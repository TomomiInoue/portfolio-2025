import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

import { Lato, Abril_Fatface } from "next/font/google";
import { Header } from "./components/Layout/Header/Header";
import { useEffect, useState } from "react";

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--wght-400",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700"],
  variable: "--wght-400",
});
export const metadata: Metadata = {
  title: "Portfolio Tomomi Inoue",
  description: "Front end ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${lato.className} ${abrilFatface.variable}`}>
      <body>
        <NextUIProvider>
          <Header />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
