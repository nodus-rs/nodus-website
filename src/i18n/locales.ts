export const LOCALES = ["en", "zh-cn"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_PREFIXES: Record<Locale, string> = {
  en: "",
  "zh-cn": "/zh-cn"
} as const;

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  "zh-cn": "简体中文"
} as const;

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

