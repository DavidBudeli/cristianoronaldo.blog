import {
  newsletterLocales,
  newsletterPreferences,
  type NewsletterLocale,
  type NewsletterPreference,
  type NewsletterSignupRequest,
  type ValidNewsletterSignup,
} from "@/types/newsletter";

type NewsletterFieldErrors = Partial<Record<keyof NewsletterSignupRequest, string>>;

type NewsletterValidationResult =
  | { success: true; data: ValidNewsletterSignup }
  | { success: false; message: string; fieldErrors: NewsletterFieldErrors };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isValidEmail(email: string) {
  return emailPattern.test(email.trim());
}

export function isNewsletterPreference(value: unknown): value is NewsletterPreference {
  return (
    typeof value === "string" &&
    (newsletterPreferences as readonly string[]).includes(value)
  );
}

export function isNewsletterLocale(value: unknown): value is NewsletterLocale {
  return typeof value === "string" && (newsletterLocales as readonly string[]).includes(value);
}

export function validateNewsletterSignup(payload: unknown): NewsletterValidationResult {
  if (!isObject(payload)) {
    return {
      success: false,
      message: "Request body must be an object.",
      fieldErrors: {},
    };
  }

  const fieldErrors: NewsletterFieldErrors = {};
  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const rawPreferences = Array.isArray(payload.preferences) ? payload.preferences : null;
  const preferences = rawPreferences
    ? Array.from(new Set(rawPreferences.filter(isNewsletterPreference)))
    : [];
  const locale = isNewsletterLocale(payload.locale) ? payload.locale : null;
  const consent = payload.consent === true;

  if (!email) {
    fieldErrors.email = "Email is required.";
  } else if (!isValidEmail(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (!rawPreferences || rawPreferences.length === 0 || preferences.length === 0) {
    fieldErrors.preferences = "Select at least one newsletter preference.";
  } else if (rawPreferences.some((preference) => !isNewsletterPreference(preference))) {
    fieldErrors.preferences = "Newsletter preferences are invalid.";
  }

  if (!locale) {
    fieldErrors.locale = "Locale must be pt-BR or en.";
  }

  if (!consent) {
    fieldErrors.consent = "Newsletter consent is required.";
  }

  const firstError = Object.values(fieldErrors)[0];

  if (firstError || !locale) {
    return {
      success: false,
      message: firstError ?? "Newsletter signup is invalid.",
      fieldErrors,
    };
  }

  return {
    success: true,
    data: {
      email,
      preferences,
      locale,
      consent: true,
    },
  };
}

