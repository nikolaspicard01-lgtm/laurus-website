import type { Locale } from "./i18n";

export function localePath(locale: Locale, path: string): string {
  return `/${locale}${path}`;
}
