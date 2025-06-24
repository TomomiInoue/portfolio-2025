'use client';

import { LandingCopyTypes } from '@/app/type/types';
import { cn, Link } from '@nextui-org/react';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import React from 'react';

interface AboutIntroProps {
    locale: string;
    landingCopy: LandingCopyTypes;
}

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export const AboutIntro = ({
    locale,
    landingCopy,
}: AboutIntroProps) => {
    return (
        <div className="w-full h-full lg:min-h-screen flex items-center justify-center py-10 lg:py-[80px]">
            <div className="container h-full px-6 lg:px-0">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row gap-10 lg:gap-[126px] items-center justify-center"
                >
                    <motion.div
                        className="relative w-full"
                        variants={itemVariants}
                    >
                        <NextImage
                            src="/images/ondesk-side.jpg"
                            alt="Designer, Developer on computer working"
                            width={694}
                            height={458}
                            className="rounded-md object-cover"
                        />
                    </motion.div>

                    <motion.div
                        className="flex flex-col w-full lg:w-[80%] gap-5 lg:-mt-10"
                        variants={itemVariants}
                    >
                        <h6 className="text-[20px] lg:text-[28px] font-semibold  text-secondary">
                            {locale === 'en-AU'
                                ? landingCopy.en.Subheadline.map((title, index) => (
                                    <div key={index}>
                                        {title}
                                    </div>
                                ))
                                : landingCopy.ja.Subheadline.map((title, index) => (
                                    <div key={index}>
                                        {title}
                                    </div>
                                ))
                            }
                        </h6>
                        <div className={cn("flex gap-1 text-base font-light text-secondary", locale === "ja" ? "flex-col" : "flex-col xl:flex-row")}>
                            {locale === 'en-AU'
                                ? landingCopy.en.description.map((line, index) => (
                                    <h5 key={index}>
                                        {line}
                                        {index < landingCopy.en.description.length - 1 ? ' / ' : ''}
                                    </h5>
                                ))
                                : landingCopy.ja.description.map((line, index) => (
                                    <p key={index}>
                                        {line}
                                        {index < landingCopy.ja.description.length - 1 ? ' / ' : ''}
                                    </p>
                                ))
                            }
                        </div>
                        <Link href="/projects" className="self-end mt-5 group cursor-pointer">
                            <div className="relative flex items-center justify-center text-brown py-3 px-4 rounded-md font-semibold text-[18px] md:text-2xl transition-all duration-300 hover:scale-[1.02]">
                                <span className="relative">
                                    {locale === 'en-AU' ? 'VIEW PROJECTS' : 'プロジェクトを見る'}
                                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full underline-hover" />
                                </span>

                                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                                    ➔
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative hidden lg:flex justify-center w-full h-[394px] col-span-1 m-[-80px] z-50"
                >
                    <NextImage
                        src="/images/ondesk-writing.jpg"
                        alt="taking a note"
                        width={327}
                        height={394}
                        className="rounded-md object-cover shadow-lg"
                    />
                </motion.div>
            </div>
        </div>
    );
};
