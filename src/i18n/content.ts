import { siteContent } from "../site-content";
import { type Locale } from "./locales";

export const translations = siteContent;

export type I18nContent = (typeof translations)[Locale];

export const getContent = (locale: Locale) => translations[locale];
