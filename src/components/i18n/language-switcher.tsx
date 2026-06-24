"use client";

import { useLanguage } from "@/components/i18n/language-provider";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, toggleLocale } = useLanguage();
  const nextLocaleLabel = locale === "en" ? "PT" : "EN";
  const currentLocaleLabel = locale === "en" ? "EN" : "PT";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={`inline-flex items-center justify-center gap-2 border border-white/15 bg-white/[0.03] text-xs font-bold uppercase tracking-[0.14em] text-warm transition hover:border-brand-orange hover:text-brand-orange ${
        compact ? "h-10 px-3" : "h-10 px-4"
      }`}
      aria-label={`Switch language to ${nextLocaleLabel}`}
      title={`Switch language to ${nextLocaleLabel}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a13.5 13.5 0 0 1 0 18" />
        <path d="M12 3a13.5 13.5 0 0 0 0 18" />
      </svg>
      <span>{currentLocaleLabel}</span>
    </button>
  );
}
