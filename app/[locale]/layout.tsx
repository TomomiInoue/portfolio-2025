import React, { ReactNode } from "react";
import type { Metadata } from "next";
import "../globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Footer } from "../components/Layout/Footer/Footer";
import { notFound } from "next/navigation";
import { Locale } from "../type/types";
import { serverSideTranslation } from "../lib/i18n";
import I18NProvider from "../components/Layout/i18n/i18nProvider";
import HeaderClient from "../components/Layout/Header/HeaderClient";
import { Meta } from "../constants/meta";

const locales = ["en-AU", "ja"] as const;
type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }

  const isJa = locale === "ja";

  return {
    metadataBase: new URL("https://www.flowdesigncode.com"),
    title: isJa ? Meta.ja.title : Meta.en.title,
    description: isJa
      ? Meta.ja.description
      : Meta.en.description,

    openGraph: {
      title: isJa ? Meta.ja.title : Meta.en.title,
      description: isJa
        ? Meta.ja.description
        : Meta.en.description,
      type: "website",
      locale: locale,
      url: "https://www.flowdesigncode.com",
      siteName: "Flow Design Code",
      images: [
        {
          url: "/logo/logo-main-circle.png",
          width: 600,
          height: 600,
          alt: "Flow Design Code logo",
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const ns = ["home"];
  const { resources } = await serverSideTranslation(locale, ns);

  return (
    <div>
      <I18NProvider locale={locale} namespaces={ns} resources={resources}>
        <NextUIProvider>
          <HeaderClient locale={locale} />
          {children}
          <Footer locale={locale} />
        </NextUIProvider>
      </I18NProvider>
    </div>
  );
}
