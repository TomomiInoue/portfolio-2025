import { ConnectComponent } from '@/app/components/Section/Connect/Connect';
import React, { Suspense } from 'react';

type Props = {
  params: Promise<{ locale: "en-AU" | "ja" }>;
};

// 👇 Add this to tell Next.js what locales to build
// export async function generateStaticParams() {
//   return [
//     { locale: "en-AU" },
//     { locale: "ja" },
//   ];
// }


export default async function ConnectPage({ params }: Props) {
  const { locale } = await params;
  return (
    <Suspense fallback={<div>Loading connect page...</div>}>
      <ConnectComponent locale={locale} />
    </Suspense>
  );
}