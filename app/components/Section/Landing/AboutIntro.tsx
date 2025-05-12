'use client';

import { motion } from 'framer-motion';
import NextImage from 'next/image';
import React from 'react';

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

export const AboutIntro = () => {
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
                        <h5 className="text-heading03 lg:text-heading01 text-accent">
                            Designing with Empathy, Building with Precision
                        </h5>
                        <p className="text-body04 lg:text-lg font-normal font-heebo text-secondary">
                            As a creative web developer and UX designer, I transform ideas into seamless digital experiences. Empathy guides my designs, problem-solving sharpens my code, and achieving client goals drives my passion for innovation and excellence.
                        </p>
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
