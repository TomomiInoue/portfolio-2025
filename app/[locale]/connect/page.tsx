import { ConnectComponent } from '@/app/components/Section/Connect/Connect';
import React from 'react';

type Props = {
  params: Promise<{ locale: 'en-AU' | 'ja' }>;
}

export default async function Home(
  { params }: Props
) {
  const { locale } = await params;
  return (
    <>
      <ConnectComponent locale={locale} />
    </>
  );
}
