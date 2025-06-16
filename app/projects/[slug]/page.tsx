// app/projects/[slug]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/app/constants/projects';
import { ProjectDetailComponent } from '@/app/components/Section/Projects/ProjectDetailComponent/ProjectDetailComponent';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({
    params,
}: PageProps) {
    const resolvedParams = await params;
    const resolvedProjects = await projects;
    const project = resolvedProjects.find((p) => p.slug.replace(/^\//, "") === resolvedParams.slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailComponent project={project} />;
}

export async function generateStaticParams() {
    const resolvedProjects = Array.isArray(projects)
        ? projects
        : await projects;

    return resolvedProjects.map((project) => ({
        slug: project.slug.replace(/^\//, ''),
    }));
}
