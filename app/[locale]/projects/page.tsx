import { ProjectsPageComponent } from '@/app/components/Section/Projects/ProjectsPageComponent';
import React, { Suspense } from 'react';

type Props = {
    params: Promise<{ locale: 'en-AU' | 'ja' }>;
};

// 👇 Add this to tell Next.js what locales to build
// export async function generateStaticParams() {
//     return [
//         { locale: "en-AU" },
//         { locale: "ja" },
//     ];
// }


export default async function Projects({ params }: Props) {
    const { locale } = await params;

    return (
        <Suspense fallback={<div>Loading projects...</div>}>
            <ProjectsPageComponent locale={locale} />
        </Suspense>
    );
}
