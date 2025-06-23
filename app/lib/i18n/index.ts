/* eslint-disable @typescript-eslint/no-explicit-any */
import { createInstance, TFunction } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
// import resourcesToBackend from "i18next-resources-to-backend";
import { i18nConfig } from "./i18n";
import { Locale } from "@/app/type/types";

async function initTranslations(
  locale: string,
  namespaces: string[],
  options?: { keyPrefix?: string; i18nInstance?: any; resources?: any }
) {
  const i18nInstance = options?.i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  // if (!options?.resources) {
  //   i18nInstance.use(
  //     resourcesToBackend(
  //       (language: string, namespace: string) =>
  //         import(`./translations/${language}/${namespace}.json`)
  //     )
  //   );
  // }

  await i18nInstance.init({
    lng: locale,
    resources: options?.resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: options?.resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.getFixedT(
      locale,
      namespaces[0],
      options?.keyPrefix
    ) as TFunction<Locale, undefined>,
  };
}

// Exported function to fetch translations on server components
export async function serverSideTranslation(
  locale: string,
  namespaces: string[],
  options?: { keyPrefix?: string; i18nInstance?: any; resources?: any }
) {
  return await initTranslations(locale, namespaces, options);
}
