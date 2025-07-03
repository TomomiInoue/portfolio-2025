import React from 'react';
import { LandingComponent } from '../components/Section/Landing/Landing';
import { Metadata } from 'next';

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
  title: "Flow Design Code | Web Design & Development",
  description: "Flow Design Code is a UX design and frontend development studio based in Lennox Head, Australia. We create seamless digital experiences that flow with your business needs.",
  openGraph: {
    title: "Flow Design Code",
    description: "Flow Design Code is a UX design and frontend development studio based in Lennox Head, Australia. We create seamless digital experiences that flow with your business needs.",
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
