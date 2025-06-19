import { AllowedLocales, I18NConfig } from "../../type/types";

export const defaultLocale = "en-AU" as const;
export const allowedLocales: AllowedLocales = [defaultLocale, "ja"] as const;

const i18nConfig: I18NConfig = {
  locales: [...allowedLocales],
  defaultLocale,
  prefixDefault: false,
  // localeDetection: true,
  // localCookie: "NEXT_LOCALE",
};

export { i18nConfig };
