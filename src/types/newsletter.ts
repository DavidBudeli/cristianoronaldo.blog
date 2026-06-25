export const newsletterPreferences = [
  "news",
  "records",
  "career",
  "portugal",
  "fans",
] as const;

export const newsletterLocales = ["pt-BR", "en"] as const;

export type NewsletterPreference = (typeof newsletterPreferences)[number];
export type NewsletterLocale = (typeof newsletterLocales)[number];

export type NewsletterSignupRequest = {
  email: string;
  preferences: NewsletterPreference[];
  locale: NewsletterLocale;
  consent: boolean;
};

export type ValidNewsletterSignup = NewsletterSignupRequest & {
  consent: true;
};

