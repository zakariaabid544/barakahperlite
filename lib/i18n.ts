"use client";

import { createContext, useContext } from "react";
import { defaultLocale, translations, type Translation } from "@/data/translations";
import type { Direction, Locale, RouteKey } from "@/types/i18n";

export const languageStorageKey = "barakah-perlite-locale";

export type I18nContextValue = {
  locale: Locale;
  direction: Direction;
  t: Translation;
  setLocale: (locale: Locale) => void;
};

export const I18nContext = createContext<I18nContextValue | null>(null);

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "fr" || value === "en" || value === "ar" || value === "nl";
}

export function getDirection(locale: Locale): Direction {
  return locale === "ar" ? "rtl" : "ltr";
}

export function normalizeRoute(pathname: string | null | undefined): RouteKey {
  const path = pathname?.split("?")[0].replace(/\/$/, "") || "/";
  if (
    path === "/" ||
    path === "/produit" ||
    path === "/agriculture" ||
    path === "/green-space" ||
    path === "/industrie" ||
    path === "/a-propos" ||
    path === "/contact" ||
    path === "/privacy-policy" ||
    path === "/cookie-policy" ||
    path === "/terms" ||
    path === "/admin" ||
    path === "/admin/content" ||
    path === "/client" ||
    path === "/portal/login"
  ) {
    return path;
  }

  return "/";
}

export function getStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const savedLocale = window.localStorage.getItem(languageStorageKey);
  return isLocale(savedLocale) ? savedLocale : defaultLocale;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}

export function getTranslation(locale: Locale): Translation {
  return translations[locale];
}
