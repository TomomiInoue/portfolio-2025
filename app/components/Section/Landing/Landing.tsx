"use client"

import React, { useEffect, useState } from "react";
import NextImage from "next/image";
import * as motion from "motion/react-client"

export const LandingComponent = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768); // Set breakpoint for desktop
        };
        // Run once on mount
        handleResize();
        // Add event listener for window resize
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getAnimationProps = (desktopProps: { opacity: number, x: number, y: number }, mobileProps: { opacity: number, x: number, y: number }) => {
        return isDesktop ? desktopProps : mobileProps;
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
                        initial={getAnimationProps(
                            { opacity: 0, x: -300, y: 0 },
                            { opacity: 0, x: -120, y: 0 }
                        )}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 1 // Animation duration
                            }
                        }}
                        viewport={{ once: true }}>
                        <h1 className="font-bold text-display03 lg:text-display01 text-cream mb-6 max-w-[120px] lg:max-w-full">
                            I am <span className="lg:inline text-orange">Tomomi Inoue</span>
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={getAnimationProps(
                            { opacity: 0, x: -400, y: 0 },
                            { opacity: 0, x: -80, y: 0 }
                        )}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1.2
                            }
                        }}
                        viewport={{ once: true }}>
                        <div className="text-body03 lg:text-body01 font-medium text-cream font-heebo">Freelance Web Developer & UX Designer</div>
                        <div className="text-body-03 lg:text-body01 font-medium text-cream font-heebo">
                            Passionate Surfer, Yogini and World traveler
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Second Section */}
            <div className="w-full h-full lg:min-h-screen flex items-center justify-center py-10 lg:py-[80px]">
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
            </div >
        </>
    );
};
