import { AboutComponent } from '@/app/components/Section/About/About';
import React from 'react';

type Props = {
  params: Promise<{ locale: 'en-AU' | 'ja' }>;
}

export default async function About({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <AboutComponent locale={locale} />
    </>
  );
}
