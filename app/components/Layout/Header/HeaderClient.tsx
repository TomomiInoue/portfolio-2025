// app/components/Layout/Header/HeaderClient.tsx
'use client';

import React from 'react';
import { Header } from './Header';

export default function HeaderClient({ locale }: { locale: "en-AU" | "ja" }) {
    return <Header locale={locale} />;
}