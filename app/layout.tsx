import React, { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Header } from "./components/Layout/Header/Header";
import { Playfair_Display } from 'next/font/google';
import { Playfair } from "next/font/google";
import { Heebo } from "next/font/google";
import { Footer } from "./components/Layout/Footer/Footer";
import { notFound } from "next/navigation";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700', '800', '900']
});

const playfair = Playfair({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
});

const heebo = Heebo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heebo',
  weight: ['400', '500', '600', '700', '800', '900']
});

const locales = ['en-AU', 'ja'];

export const metadata: Metadata = {
  title: "Flow Design and Code website",
  keywords: [
    "Front end web developer",
    "UX designer",
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Web development",
    "Web design",
    "Responsive design",
    "UI/UX design",
    "Web performance",
    "Web accessibility",
    "SEO optimization",
    "User experience",
    "Web animations",
    //japanese keywords
    "フロントエンドウェブ開発者",
    "ウェブ開発",
    "ウェブデザイン",
    "レスポンシブデザイン",
    "UI/UXデザイン",
    "ウェブパフォーマンス",
    "ウェブアクセシビリティ",
    "SEO最適化",
    "ユーザーエクスペリエンス",
    "ウェブアニメーション",
  ],
  description: "Front end web developer and UX designer showcasing skills and projects. Specializing in Next.js, React.js, TypeScript, Tailwind CSS, and Framer Motion.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Flow Design and Code website",
    description: "Front end web developer and UX designer showcasing skills and projects. Specializing in Next.js, React.js, TypeScript, Tailwind CSS, and Framer Motion.",
    //locale will be Australian English
    locale: "en-AU",
    url: "https://flow-design-code.vercel.app/",
    siteName: "Flow Design and Code website",
    images: [
      {
        url: "/logo/flow-logo.png",
        width: 1200,
        height: 630,
        alt: "Flow Design and Code website",
      },
    ],
    type: "website",
  }
};

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params?.locale || 'en-AU';


  if (!locales.includes(locale)) {
    notFound(); // handle unsupported locale
  }


  return (
    <html lang={locale}>
      <body className={`${playfairDisplay.className} ${playfair.variable} ${heebo.variable}`}>
        <NextUIProvider>
          <Header />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
