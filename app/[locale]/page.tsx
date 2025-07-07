import React from 'react';
import { LandingComponent } from '../components/Section/Landing/Landing';
import { Metadata } from 'next';
import { Meta } from '../constants/meta';

type Props = {
  params: Promise<{ locale: "en-AU" | "ja" }>;
};

export const dynamic = 'force-static';

// 👇 Add this to tell Next.js what locales to build
export async function generateStaticParams() {
  return [
    { locale: "en-AU" },
    { locale: "ja" },
  ];
}


export const metadata: Metadata = {
  title: Meta.en.title,
  description: Meta.en.description,
  openGraph: {
    title: Meta.en.title,
    description: Meta.en.description,
    type: 'website',
    url: "https://www.flowdesigncode.com",
    siteName: "Flow Design Code",
    images: [
      {
        url: "/logo/logo-dark-circle.png",
        width: 600,
        height: 600,
        alt: "Flow Design Code logo",
      },
    ],
  },
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <main>
        <LandingComponent locale={locale} />
      </main>
    </>
  );
}
