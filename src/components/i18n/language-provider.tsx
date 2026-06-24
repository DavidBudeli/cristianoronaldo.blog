"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  englishTranslations,
  localeStorageKey,
  portugueseTranslations,
  type Locale,
} from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  locale: defaultLocale,
  setLocale: () => undefined,
  toggleLocale: () => undefined,
});

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "pt-BR";
}

function translateValue(value: string, locale: Locale) {
  const trimmed = value.trim();
  if (!trimmed) {
    return value;
  }

  const dictionary = locale === "pt-BR" ? portugueseTranslations : englishTranslations;
  const normalized = trimmed.replace(/\s+/g, " ");
  const translated = dictionary[trimmed] ?? dictionary[normalized];

  if (!translated) {
    return value;
  }

  const prefix = value.match(/^\s*/)?.[0] ?? "";
  const suffix = value.match(/\s*$/)?.[0] ?? "";
  return `${prefix}${translated}${suffix}`;
}

function shouldSkip(parent: ParentNode | null) {
  if (!(parent instanceof Element)) {
    return false;
  }

  return Boolean(parent.closest("script, style, noscript, svg, code, pre"));
}

function applyTranslations(locale: Locale) {
  document.documentElement.lang = locale;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent?.trim() || shouldSkip(node.parentNode)) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes: Text[] = [];
  let currentNode = walker.nextNode();
  while (currentNode) {
    textNodes.push(currentNode as Text);
    currentNode = walker.nextNode();
  }

  for (const node of textNodes) {
    const nextValue = translateValue(node.textContent ?? "", locale);
    if (node.textContent !== nextValue) {
      node.textContent = nextValue;
    }
  }

  document
    .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input[placeholder], textarea[placeholder]")
    .forEach((element) => {
      const nextValue = translateValue(element.placeholder, locale);
      if (element.placeholder !== nextValue) {
        element.placeholder = nextValue;
      }
    });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(localeStorageKey);
    if (isLocale(storedLocale) && storedLocale !== defaultLocale) {
      window.setTimeout(() => setLocaleState(storedLocale), 0);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(localeStorageKey, locale);
    document.cookie = `${localeStorageKey}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    applyTranslations(locale);

    const observer = new MutationObserver(() => {
      applyTranslations(locale);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((currentLocale) => (currentLocale === "en" ? "pt-BR" : "en"));
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
