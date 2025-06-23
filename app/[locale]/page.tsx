import React from 'react';
import { LandingComponent } from '../components/Section/Landing/Landing';

type Props = {
  params: Promise<{ locale: "en-AU" | "ja" }>;
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
