import React from 'react';
import { LandingComponent } from '../components/Section/Landing/Landing';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: "en-AU" | "ja" }>;
};
export const metadata: Metadata = {
  title: "Flow Design Code | Web Design & Development",
  description: "Flow Design Code is a UX design and frontend development studio led by Tomomi Inoue...",
  openGraph: {
    title: "Flow Design Code",
    description: "UX design and frontend development studio...",
    url: "https://www.flowdesigncode.com",
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
