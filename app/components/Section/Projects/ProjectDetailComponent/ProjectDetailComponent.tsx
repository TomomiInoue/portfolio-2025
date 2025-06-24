'use client';

import { Project } from "@/app/type/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { WorkTogether } from "../WorkTogether";

interface ProjectProps {
    project: Project
    locale: "en-AU" | "ja";
}

export const ProjectDetailComponent = ({
    project,
    locale
}: ProjectProps) => {
    //add 0 to the project id if it is less than 10
    const formattedId = project.id < 10 ? `0${project.id}` : project.id.toString();
    return (
        <>
            <div className="container mx-auto px-[5.5%] pt-[8rem]">
                <div className="lg:grid lg:grid-cols-[1fr_min(90%,820px)_1fr] gap-[5%] pb-[80px]">
                    <small className="font-normal text-base lowercase">#Case_{formattedId}</small>
                    <section className="mt-[45px]">
                        <h1 className="text-3xl font-bold text-title scramble-text">
                            {project.name}
                        </h1>
                        <small className="font-light text-small mt-2">
                            <Link
                                href={project.url}
                                target="_blank"
                                className="flex items-center gap-[0.5rem]"
                            >
                                Launch Site

                                <Icon icon="basil:arrow-up-solid" width="24" height="24" className='rotate-45' />

                            </Link>
                        </small>

                        <article className="mt-[4rem] grid gap-[2.5rem] lg:grid-cols-2">
                            <div className="w-[min(90%,400px)]">
                                <h2 className="text-base opacity-70">Roles</h2>
                                <p className="mt-[1rem] font-light text-base">
                                    {project.roles || ""}
                                </p>
                            </div>

                            <div className="w-[min(90%,400px)]">
                                <h2 className="text-base opacity-70 ">Development</h2>
                                <p className="mt-[1rem]">
                                    {project.development || ""}
                                </p>
                            </div>

                            <div className="w-[min(90%,400px)]">
                                <h2 className="text-base opacity-70 ">Project Summary</h2>
                                <p className="mt-[1rem] leading-[1.6]">
                                    {project.projectSummary || ""}
                                </p>
                            </div>

                            <div className="w-[min(90%,400px)]">
                                <h2 className="text-base opacity-70 ">Duration</h2>
                                <p className="mt-[1rem]">
                                    {project.duration || ""}
                                </p>
                            </div>
                        </article>

                        <div className="mt-[2.5rem]">
                            <h2 className="text-base opacity-70">Project Overview</h2>
                            <p className="mt-[1rem]">
                                {project.projectOverview || ""}
                            </p>
                        </div>

                        {/* Images */}
                        <div className="mt-[5rem] w-full">
                            <Image
                                src={project.images?.desktop || ""}
                                alt={project.images?.alt || "work image desktop"}
                                width={832}
                                height={400}
                                className="mx-auto rounded-md"
                            />
                        </div>

                        <div className="flex mt-[3rem] gap-[1.5rem] lg:gap-[9rem] lg:mt-[9rem] flex-wrap">
                            <div className="w-full max-w-[600px] h-[600px]">
                                <Image
                                    src={project.images?.mobile || ""}
                                    alt={project.images?.alt || "work image mobile"}
                                    width={600}
                                    height={300}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Sidebar Links */}
                    <aside className="relative w-full h-[4rem] lg:h-full">
                        <div className="absolute bottom-0 right-0 mt-[2rem] lg:mt-0 w-[200px]">
                            <Link href="/projects" className="flex items-center gap-2 text-base font-semibold  hover:opacity-70 transition">
                                <Icon icon="basil:arrow-left-solid" width="24" height="24" />
                                View All Projects
                            </Link>
                        </div>
                    </aside>
                </div >
            </div >
            <WorkTogether locale={locale} />
        </>
    );
};

