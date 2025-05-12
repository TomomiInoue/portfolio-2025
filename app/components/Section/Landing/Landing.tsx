"use client"

import React from "react";
import NextImage from "next/image";
import * as motion from "motion/react-client"
import { AboutIntro } from "./AboutIntro";

export const LandingComponent = () => {

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-screen overflow-hidden">
                <NextImage
                    src="/images/cheater-five.jpg"
                    alt="Tomomi Inoue"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="relative lg:-top-20 w-full lg:max-w-[1280px] mx-auto h-full flex flex-col text-left justify-center items-start px-4">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col gap-3"
                    >

                        <motion.h1
                            className="font-bold text-display03 lg:text-display01 text-cream mb-2 lg:mb-6 max-w-[120px] lg:max-w-full"
                            variants={itemVariants}
                        >
                            FLOW <span className="lg:inline text-orange">Design & Code</span>
                        </motion.h1>

                        <motion.div
                            className="text-body03 lg:text-body01 font-medium text-cream font-heebo"
                            variants={itemVariants}
                        >
                            Freelance Web Developer & UX Designer
                        </motion.div>
                        <motion.div
                            className="text-body03 lg:text-body01 font-medium text-cream font-heebo"
                            variants={itemVariants}
                        >
                            Passionate Surfer, Yogini and World traveler
                        </motion.div>
                    </motion.div>
                </div >
            </div >

            {/* Second Section */}
            {/* < div className="w-full h-full lg:min-h-screen flex items-center justify-center py-10 lg:py-[80px]" >
                <div className="container h-full px-6 lg:px-0">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-[126px] items-center justify-center ">
                        <motion.div
                            className="relative w-full left-0"
                            initial={{ opacity: 0, x: -200, rotate: -90 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                rotate: 0,
                                transition: { duration: 1.5, ease: "easeOut" },
                            }}
                            viewport={{ once: true }}
                        >
                            <NextImage
                                src="/images/ondesk-side.jpg"
                                alt="on computer working"
                                width={isDesktop ? 694 : 320}
                                height={isDesktop ? 458 : 180}
                                className="rounded-md object-cover"
                            />
                        </motion.div>

                        <motion.div
                            className="flex flex-col w-full lg:w-[80%] gap-5 lg:-mt-10"
                            initial={{ opacity: 0, x: 200, rotate: 90 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                rotate: 0,
                                transition: { duration: 1.5, ease: "easeOut" },
                            }}
                            viewport={{ once: true }}
                        >
                            <h5 className="text-heading03 lg:text-heading01 text-accent">Designing with Empathy, Building with Precision</h5>
                            <div className="text-body04 lg:text-body03 font-heebo flex-wrap text-secodaty">
                                As a creative web developer and UX designer, I transform ideas into seamless digital experiences. Empathy guides my designs, problem-solving sharpens my code, and achieving client goals drives my passion for innovation and excellence.
                            </div>
                        </motion.div>

                    </div>
                    <div className="hidden lg:grid lg:grid-cols-3">
                        <div className="col-span-1" />
                        <motion.div
                            className="relative flex justify-end w-full h-[394px] col-span-1 m-[-80px]"
                            initial={{ opacity: 0, y: 200, rotate: 90 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                rotate: 0,
                                transition: { duration: 1.5, ease: "easeOut" },
                            }}
                            viewport={{ once: true }}
                        >
                            <NextImage
                                src="/images/ondesk-writing.jpg"
                                alt="taking a note"
                                width={327}
                                height={394}
                                className="hidden lg:block rounded-md object-cover shadow-lg"
                            />
                        </motion.div>
                    </div>
                </div>
            </div > */}
            <AboutIntro />
        </>
    );
};
