import "server-only";

import {
  newsletterPreferences,
  type NewsletterPreference,
  type ValidNewsletterSignup,
} from "@/types/newsletter";

const brevoApiBaseUrl = "https://api.brevo.com/v3";

type BrevoErrorBody = {
  code?: string;
  message?: string;
};

type NewsletterAttributes = {
  SOURCE: "cr7-blog";
  LOCALE: ValidNewsletterSignup["locale"];
  PREF_NEWS: boolean;
  PREF_RECORDS: boolean;
  PREF_CAREER: boolean;
  PREF_PORTUGAL: boolean;
  PREF_FANS: boolean;
  CONSENT_NEWSLETTER: true;
  CONSENT_DATE: string;
};

export class NewsletterConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NewsletterConfigError";
  }
}

export class NewsletterProviderError extends Error {
  readonly status?: number;
  readonly code?: string;

  constructor(message: string, options: { status?: number; code?: string } = {}) {
    super(message);
    this.name = "NewsletterProviderError";
    this.status = options.status;
    this.code = options.code;
  }
}

function getBrevoConfig() {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  const rawListId = process.env.BREVO_NEWSLETTER_LIST_ID?.trim();
  const listId = Number(rawListId);

  if (!apiKey) {
    throw new NewsletterConfigError("BREVO_API_KEY is missing.");
  }

  if (!rawListId || !Number.isInteger(listId) || listId <= 0) {
    throw new NewsletterConfigError("BREVO_NEWSLETTER_LIST_ID must be a positive number.");
  }

  return { apiKey, listId };
}

function hasPreference(preferences: NewsletterPreference[], preference: NewsletterPreference) {
  return preferences.includes(preference);
}

export function buildNewsletterAttributes(input: ValidNewsletterSignup): NewsletterAttributes {
  return {
    SOURCE: "cr7-blog",
    LOCALE: input.locale,
    PREF_NEWS: hasPreference(input.preferences, "news"),
    PREF_RECORDS: hasPreference(input.preferences, "records"),
    PREF_CAREER: hasPreference(input.preferences, "career"),
    PREF_PORTUGAL: hasPreference(input.preferences, "portugal"),
    PREF_FANS: hasPreference(input.preferences, "fans"),
    CONSENT_NEWSLETTER: true,
    CONSENT_DATE: new Date().toISOString(),
  };
}

async function brevoRequest(
  path: string,
  apiKey: string,
  init: Omit<RequestInit, "headers"> & { body: string },
) {
  return fetch(`${brevoApiBaseUrl}${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
  });
}

async function readBrevoError(response: Response): Promise<BrevoErrorBody> {
  try {
    const body = (await response.json()) as BrevoErrorBody;

    return {
      code: typeof body.code === "string" ? body.code : undefined,
      message: typeof body.message === "string" ? body.message : undefined,
    };
  } catch {
    return {
      message: response.statusText || "Brevo request failed.",
    };
  }
}

function isDuplicateContactError(status: number, error: BrevoErrorBody) {
  const code = error.code?.toLowerCase() ?? "";
  const message = error.message?.toLowerCase() ?? "";

  return (
    status === 409 ||
    ((status === 400 || status === 409) &&
      (code.includes("duplicate") ||
        message.includes("duplicate") ||
        message.includes("already exist")))
  );
}

function logBrevoError(context: string, response: Response, error: BrevoErrorBody) {
  console.error(context, {
    status: response.status,
    code: error.code,
    message: error.message,
  });
}

export async function upsertNewsletterContact(input: ValidNewsletterSignup) {
  const { apiKey, listId } = getBrevoConfig();
  const attributes = buildNewsletterAttributes(input);
  const listIds = [listId];

  const createResponse = await brevoRequest("/contacts", apiKey, {
    method: "POST",
    body: JSON.stringify({
      email: input.email,
      attributes,
      listIds,
      updateEnabled: true,
    }),
  });

  if (createResponse.ok) {
    return;
  }

  const createError = await readBrevoError(createResponse);

  if (!isDuplicateContactError(createResponse.status, createError)) {
    logBrevoError("Brevo newsletter contact create failed.", createResponse, createError);
    throw new NewsletterProviderError("Brevo contact create failed.", {
      status: createResponse.status,
      code: createError.code,
    });
  }

  const updateResponse = await brevoRequest(
    `/contacts/${encodeURIComponent(input.email)}`,
    apiKey,
    {
      method: "PUT",
      body: JSON.stringify({
        attributes,
        listIds,
      }),
    },
  );

  if (updateResponse.ok) {
    return;
  }

  const updateError = await readBrevoError(updateResponse);
  logBrevoError("Brevo newsletter contact update failed.", updateResponse, updateError);
  throw new NewsletterProviderError("Brevo contact update failed.", {
    status: updateResponse.status,
    code: updateError.code,
  });
}

export function getNewsletterPreferenceAttributes() {
  return newsletterPreferences.map((preference) => `PREF_${preference.toUpperCase()}`);
}

