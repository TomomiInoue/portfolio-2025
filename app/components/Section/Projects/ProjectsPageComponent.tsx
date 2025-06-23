'use client';

import { projects } from '@/app/constants/projects';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

import type { Project } from '@/app/type/types';
import { Icon } from '@iconify/react/dist/iconify.js';

export const ProjectsPageComponent: React.FC = () => {
    return (
        <section className="container mx-auto px-6 py-40">
            <h2 className="text-[56px] font-bold mb-12">Recent Projects</h2>

            <div className="space-y-24 mt-14 relative">
                {projects.map((project: Project) => (
                    <ProjectRow key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
};

type ProjectRowProps = {
    project: Project;
};

const ProjectRow: React.FC<ProjectRowProps> = ({ project }) => {
    const controls = useAnimation();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [hovering, setHovering] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setHovering(true);
        controls.start({
            x: ['0%', '-200%'],
            transition: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 16,
                ease: 'linear',
            },
        });
    };

    const handleMouseLeave = () => {
        setHovering(false);
        controls.stop();
    };

    return (
        <div
            className="container group relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="text-lg pb-4 font-semibold">{project.name}</div>
            {/* Right-side Carousel Project Name */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 overflow-hidden hidden md:block z-0 pointer-events-none">
                <motion.div
                    animate={controls}
                    initial={{ x: '0%' }}
                    className="whitespace-nowrap text-[100px] font-bold uppercase text-gray-200 opacity-20"
                >
                    {Array(10).fill(project.name).join(' – ')}
                </motion.div>
            </div>

            {/* Images Row */}

            <Link className="relative z-10 flex flex-col md:flex-row gap-6 items-baseline w-1/2" href={`/projects/${project.slug}`}>
                {/* Mobile Image */}
                <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg " >
                    {project.images?.mobile && (
                        <Image
                            src={project.images.mobile}
                            alt={`${project.name} mobile view`}
                            width={600}
                            height={600}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )}
                </div>

                {/* Desktop Image */}
                <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg" >
                    {project.images?.desktop && (
                        <Image
                            src={project.images.desktop}
                            alt={`${project.name} desktop view`}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )}
                </div>
            </Link>

            {/* View Details Button */}
            <div className="mt-6 z-10 relative items-center justify-end flex">
                <Link
                    href={`/projects/${project.slug}`}
                    className="px-6 py-2 text-base hover:opacity-70 transition flex"
                >
                    View Details
                    <Icon icon="basil:arrow-up-solid" width="24" height="24" className='rotate-90' />
                </Link>
            </div>
        </div>
    );
};
