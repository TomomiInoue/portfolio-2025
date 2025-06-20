import React from 'react';
import { LandingComponent } from '../components/Section/Landing/Landing';

type Props = {
  params: Promise<{ locale: string }>;
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
