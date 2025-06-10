import React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/app/constants/projects';
import Image from 'next/image';

// type Project = {
//     name: string;
//     slug: string;
//     images: {
//         desktop?: string;
//         mobile?: string;
//     };
// };

type Params = {
    params: {
        slug: string;
    };
};

export default function ProjectDetailPage({ params }: Params) {
    console.log('ProjectDetailPage params:', params.slug);
    const project = projects.find((p) => p.slug === `/${params.slug}`);
    if (!project) {
        return notFound(); // Shows 404
    }

    return (
        <div className="container mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-6">{project.name}</h1>

            <div className="flex flex-col md:flex-row gap-8">
                {project.images?.desktop && (
                    <Image
                        src={project.images.desktop}
                        alt={`${project.name} desktop`}
                        width={1200}
                        height={800}
                        className="w-full md:w-1/2 rounded-lg object-cover"
                    />
                )}
                {project.images?.mobile && (
                    <Image
                        src={project.images.mobile}
                        alt={`${project.name} mobile`}
                        width={600}
                        height={800}
                        className="w-full md:w-1/2 rounded-lg object-cover"
                    />
                )}
            </div>
        </div>
    );
}

// Inside [slug]/page.tsx or exported from a separate file
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}
