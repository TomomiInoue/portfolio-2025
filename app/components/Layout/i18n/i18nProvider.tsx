/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { createInstance } from "i18next";

type Props = {
    children: React.ReactNode;
    locale: string;
    namespaces: string[];
    resources: any;
};


export default function I18NProvider({ children, locale, resources }: Props) {
    const i18n = useRef(createInstance()).current;

    if (!i18n.isInitialized) {
        i18n
            .use(initReactI18next)
            .init({
                lng: locale,
                resources: { [locale]: resources },
                fallbackLng: locale,
                interpolation: { escapeValue: false },
            });
    }

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}