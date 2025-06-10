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

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
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

                {/* Scroll Down Arrow */}
                <div className="absolute bottom-6 w-full flex flex-col text-center justify-center z-10">
                    <a
                        className="animate-bounce text-brown text-6xl"
                        aria-label="Scroll to About Section"
                        onClick={handleScroll}
                        href="#about"
                    >
                        ↓
                    </a>
                    scroll down
                </div>
            </div >

            {/* About Section with scroll anchor */}
            < div id="about" >
                <AboutIntro />
            </div >
            {/* <AboutIntro /> */}
        </>
    );
};
