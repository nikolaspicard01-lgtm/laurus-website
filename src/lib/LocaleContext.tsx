"use client";

import { createContext, useContext } from "react";
import type { Locale } from "./i18n";
import type { Dictionary } from "@/dictionaries/en";
import { getDictionarySync } from "@/dictionaries";

interface LocaleContextValue {
  locale: Locale;
  dict: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  dict: getDictionarySync("en"),
});

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const dict = getDictionarySync(locale);
  return (
    <LocaleContext.Provider value={{ locale, dict }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
