// app/projects/[slug]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/app/constants/projects';
import { ProjectDetailComponent } from '@/app/components/Section/Projects/ProjectDetailComponent/ProjectDetailComponent';

interface PageProps {
    params: Promise<{
        slug: string,
        locale: "en-AU" | "ja"
    }>;
    searchParams?: Promise<{ [key: string]: string | string[] }>;
}


export default async function ProjectDetailPage({
    params,
}: PageProps) {
    const resolvedParams = await params;
    const resolvedProjects = await projects;
    const project = resolvedProjects.find((p) => p.slug.replace(/^\//, "") === resolvedParams.slug);
    //find the locale from the URL
    const locale = resolvedParams.locale || "en-AU";
    if (!project) {
        notFound();
    }

    return <ProjectDetailComponent project={project} locale={locale} />;
}

export async function generateStaticParams() {
    const resolvedProjects = Array.isArray(projects)
        ? projects
        : await projects;


    return resolvedProjects.map((project) => ({
        slug: project.slug.replace(/^\//, ''),
    }));
}

