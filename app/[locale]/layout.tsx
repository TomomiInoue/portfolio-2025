import React, { ReactNode } from "react";
import type { Metadata } from "next";
import "../globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Header } from "../components/Layout/Header/Header";
import { Footer } from "../components/Layout/Footer/Footer";
import { notFound } from "next/navigation";
import { Locale } from "../type/types";
import { serverSideTranslation } from "../lib/i18n";
import I18NProvider from "../components/Layout/i18n/i18nProvider";

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
    title: isJa ? "フロー・デザイン・コード | ウェブデザインと開発" : "Flow Design Code | Web Design & Development",
    description: isJa
      ? "Flow Design Code は、Tomomi Inoue が率いるUXデザインとフロントエンド開発スタジオです。Next.js、React、TypeScript、Tailwind CSS を活用し、洗練された高性能なWeb体験を提供します。"
      : "Flow Design Code is a UX design and frontend development studio led by Tomomi Inoue. We build high-performance websites using Next.js, React, TypeScript, and Tailwind CSS.",
    openGraph: {
      title: isJa ? "フロー・デザイン・コード" : "Flow Design Code",
      description: isJa
        ? "洗練されたUXデザインとフロントエンド開発を提供するスタジオ。"
        : "UX design and frontend development studio creating seamless web experiences.",
      locale: locale,
      url: "https://flow-design-code.vercel.app/",
      siteName: "Flow Design Code",
      images: [
        {
          url: "/logo/flow-logo.png",
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
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </NextUIProvider>
      </I18NProvider>
    </div>
  );
}
