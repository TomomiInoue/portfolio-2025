import { ProjectsPageComponent } from '@/app/components/Section/Projects/ProjectsPageComponent';
import React from 'react';

type Props = {
    params: Promise<{ locale: 'en-AU' | 'ja' }>;
};

export default async function Projects({ params }: Props) {
    const { locale } = await params;

    return (
        <>
            <ProjectsPageComponent locale={locale} />
        </>
    );
}
