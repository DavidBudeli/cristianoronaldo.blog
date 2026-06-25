import { englishTranslations } from "@/i18n/dictionaries/en";
import { portugueseTranslations } from "@/i18n/dictionaries/pt-BR";

export type Locale = "en" | "pt-BR";

export const defaultLocale: Locale = "pt-BR";
export const localeStorageKey = "cr7-blog-locale";

export { englishTranslations, portugueseTranslations };

export function getDictionary(locale: Locale) {
  return (locale === "pt-BR" ? portugueseTranslations : englishTranslations) as Record<
    string,
    string
  >;
}

export function translateText(value: string, locale: Locale) {
  const trimmed = value.trim();

  if (!trimmed) {
    return value;
  }

  const dictionary = getDictionary(locale);
  const normalized = trimmed.replace(/\s+/g, " ");
  const translated = dictionary[trimmed] ?? dictionary[normalized];

  if (!translated) {
    return value;
  }

  const prefix = value.match(/^\s*/)?.[0] ?? "";
  const suffix = value.match(/\s*$/)?.[0] ?? "";

  return `${prefix}${translated}${suffix}`;
}
