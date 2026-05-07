"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { defaultLocale, translations } from "@/data/translations";
import {
  getDirection,
  getStoredLocale,
  I18nContext,
  languageStorageKey,
  normalizeRoute,
} from "@/lib/i18n";
import type { Locale } from "@/types/i18n";

type I18nProviderProps = {
  children: ReactNode;
};

export function I18nProvider({ children }: I18nProviderProps) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const savedLocale = getStoredLocale();
    if (savedLocale === defaultLocale) return;

    window.requestAnimationFrame(() => {
      setLocaleState(savedLocale);
    });
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(languageStorageKey, nextLocale);
  }, []);

  const direction = getDirection(locale);
  const t = translations[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.body.dir = direction;
  }, [direction, locale]);

  useEffect(() => {
    const route = normalizeRoute(pathname);
    const metadata = t.meta[route];
    document.title = metadata.title;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    description?.setAttribute("content", metadata.description);

    const ogTitle = document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]',
    );
    ogTitle?.setAttribute("content", metadata.title);

    const ogDescription = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    );
    ogDescription?.setAttribute("content", metadata.description);

    const twitterTitle = document.querySelector<HTMLMetaElement>(
      'meta[name="twitter:title"]',
    );
    twitterTitle?.setAttribute("content", metadata.title);

    const twitterDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="twitter:description"]',
    );
    twitterDescription?.setAttribute("content", metadata.description);
  }, [pathname, t]);

  const value = useMemo(
    () => ({
      locale,
      direction,
      t,
      setLocale,
    }),
    [direction, locale, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
