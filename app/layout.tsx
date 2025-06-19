/** app/layout.tsx */
import type { ReactNode } from "react";
import React from "react";
import { Playfair_Display } from 'next/font/google';
import { Playfair } from "next/font/google";
import { Heebo } from "next/font/google";

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-playfair-display',
    weight: ['400', '500', '600', '700', '800', '900']
});

const playfair = Playfair({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-playfair',
    weight: ['400', '500', '600', '700', '800', '900']
});

const heebo = Heebo({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-heebo',
    weight: ['400', '500', '600', '700', '800', '900']
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${playfairDisplay.className} ${playfair.variable} ${heebo.variable}`} suppressHydrationWarning>
                {children}</body>
        </html>
    )
}
