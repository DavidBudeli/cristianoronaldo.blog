import { portugueseTranslations } from "@/i18n/dictionaries/pt-BR";

export const englishTranslations = Object.fromEntries(
  Object.entries(portugueseTranslations).map(([english, portuguese]) => [portuguese, english]),
) as Record<string, string>;
