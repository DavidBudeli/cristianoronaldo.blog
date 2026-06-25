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
  localeStorageKey,
  translateText,
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
    const nextValue = translateText(node.textContent ?? "", locale);
    if (node.textContent !== nextValue) {
      node.textContent = nextValue;
    }
  }

  document
    .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      "input[placeholder], textarea[placeholder]",
    )
    .forEach((element) => {
      const nextValue = translateText(element.placeholder, locale);
      if (element.placeholder !== nextValue) {
        element.placeholder = nextValue;
      }
    });

  document
    .querySelectorAll<HTMLElement>("[aria-label], [title], img[alt]")
    .forEach((element) => {
      for (const attribute of ["aria-label", "title", "alt"]) {
        const currentValue = element.getAttribute(attribute);

        if (!currentValue) {
          continue;
        }

        const nextValue = translateText(currentValue, locale);
        if (currentValue !== nextValue) {
          element.setAttribute(attribute, nextValue);
        }
      }
    });

  document.title = translateText(document.title, locale);
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
