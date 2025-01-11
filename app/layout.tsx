import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Header } from "./components/Layout/Header/Header";
import { Playfair_Display } from 'next/font/google';
import { Playfair } from "next/font/google";
import { Heebo } from "next/font/google";
import { Footer } from "./components/Layout/Footer/Footer";

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

export const metadata: Metadata = {
  title: "Portfolio Tomomi Inoue",
  description: "Front end web developer and UX designer",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Portfolio Tomomi Inoue",
    description: "Front end web developer and designer showcasing skills and projects.",
    url: "https://flow-design-code.vercel.app/",
    siteName: "Tomomi Inoue Portfolio",
    images: [
      {
        url: "/logo/flow-logo.png",
        width: 1200,
        height: 630,
        alt: "Tomomi Inoue Portfolio Preview",
      },
    ],
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
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
