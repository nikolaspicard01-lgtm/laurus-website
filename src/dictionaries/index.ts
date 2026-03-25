import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "./en";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en").then((m) => m.default),
  fr: () => import("./fr").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

// Client-side sync version
import en from "./en";
import fr from "./fr";

const dictionariesSync: Record<Locale, Dictionary> = { en, fr };

export function getDictionarySync(locale: Locale): Dictionary {
  return dictionariesSync[locale];
}
