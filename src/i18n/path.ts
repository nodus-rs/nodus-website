import { DEFAULT_LOCALE, LOCALE_PREFIXES, type Locale, isLocale } from "./locales";

type PathParts = {
  pathname: string;
  search: string;
  hash: string;
};

const splitPath = (input: string): PathParts => {
  const hashIndex = input.indexOf("#");
  const searchIndex = input.indexOf("?");
  const pathEndIndex =
    hashIndex === -1 ? input.length : searchIndex === -1 ? hashIndex : Math.min(searchIndex, hashIndex);
  const pathname = input.slice(0, pathEndIndex);
  const search =
    searchIndex !== -1
      ? input.slice(searchIndex, hashIndex === -1 ? input.length : hashIndex)
      : "";
  const hash = hashIndex !== -1 ? input.slice(hashIndex) : "";

  return { pathname, search, hash };
};

export const ensureLeadingSlash = (pathname: string) =>
  pathname.startsWith("/") ? pathname : `/${pathname}`;

export const hasTrailingSlash = (pathname: string) =>
  pathname.length > 1 && pathname.endsWith("/");

export const normalizePathname = (pathname: string) => {
  const normalized = ensureLeadingSlash(pathname).replace(/\/{2,}/g, "/");

  if (normalized === "/") {
    return normalized;
  }

  return hasTrailingSlash(pathname) ? normalized.replace(/\/?$/, "/") : normalized.replace(/\/$/, "");
};

export const getLocaleFromPathname = (pathname: string): Locale => {
  const { pathname: cleanPathname } = splitPath(pathname);
  const normalized = normalizePathname(cleanPathname);
  const prefix = normalized.split("/")[1];

  return isLocale(prefix) ? prefix : DEFAULT_LOCALE;
};

export const stripLocalePrefix = (pathname: string) => {
  const { pathname: cleanPathname, search, hash } = splitPath(pathname);
  const normalized = normalizePathname(cleanPathname);
  const locale = getLocaleFromPathname(normalized);
  const prefix = LOCALE_PREFIXES[locale];

  if (!prefix) {
    return `${normalized}${search}${hash}`;
  }

  const stripped = normalized.slice(prefix.length) || "/";

  return `${stripped.startsWith("/") ? stripped : `/${stripped}`}${search}${hash}`;
};

export const withLocalePrefix = (pathname: string, locale: Locale = DEFAULT_LOCALE) => {
  const { search, hash } = splitPath(pathname);
  const normalized = normalizePathname(pathname);
  const basePath = stripLocalePrefix(normalized);
  const prefix = LOCALE_PREFIXES[locale];

  if (!prefix) {
    return `${basePath}${search}${hash}`;
  }

  const localizedPathname = basePath === "/" ? prefix || "/" : `${prefix}${basePath}`;
  const normalizedLocalizedPathname = localizedPathname.replace(/\/{2,}/g, "/");

  return `${normalizedLocalizedPathname}${search}${hash}`;
};

export const localizedPath = withLocalePrefix;
export const localizedHref = withLocalePrefix;
