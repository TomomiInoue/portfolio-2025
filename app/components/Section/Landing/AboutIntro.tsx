'use client';

import { LandingCopyTypes } from '@/app/type/types';
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
                        <h6 className="text-[20px] lg:text-heading03  text-secondary">
                            {locale === 'en-AU'
                                ? landingCopy.en.Subheadline.map((title, index) => (
                                    <div key={index}>
                                        {title}
                                        {/* {index < landingCopy.en.Subheadline.length - 1 ? ' | ' : ''} */}
                                    </div>
                                ))
                                : landingCopy.ja.Subheadline.map((title, index) => (
                                    <div key={index}>
                                        {title}
                                        {/* {index < landingCopy.ja.Subheadline.length - 1 ? ' | ' : ''} */}
                                    </div>
                                ))
                            }
                        </h6>
                        <div className="flex gap-2">
                            {locale === 'en-AU'
                                ? landingCopy.en.description.map((line, index) => (
                                    <p key={index} className="text-sm font-light font-heebo text-secondary">
                                        {line}
                                        {index < landingCopy.en.description.length - 1 ? ' / ' : ''}
                                    </p>
                                ))
                                : landingCopy.ja.description}
                        </div>
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
