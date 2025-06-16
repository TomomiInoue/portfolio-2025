import React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/app/constants/projects';
import { ProjectDetailComponent } from '@/app/components/Section/Projects/ProjectDetailComponent/ProjectDetailComponent';

type ProjectDetailPageProps = {
    params: {
        slug: string;
    };
};

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const project = projects.find((p) => p.slug.endsWith(params.slug));


    if (!project) {
        return notFound(); // Shows 404
    }

    return (
        <ProjectDetailComponent project={project} />
    );
}

// Inside [slug]/page.tsx or exported from a separate file
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug.replace(/^\//, ""), // remove leading slash
    }));
}
