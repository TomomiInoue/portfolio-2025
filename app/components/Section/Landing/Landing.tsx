import React from "react";
import NextImage from "next/image";
import * as motion from "motion/react-client"

export const LandingComponent = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-screen">
                <NextImage
                    src="/images/cheater-five.jpg"
                    alt="Tomomi Inoue"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="relative -top-20 w-full max-w-[1280px] mx-auto h-full flex flex-col text-left justify-center items-start px-4">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -300
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 1 // Animation duration
                            }
                        }}
                        viewport={{ once: true }}>
                        <h1 className="font-bold text-[88px] text-cream mb-6">
                            I am <span className="inline text-orange">Tomomi Inoue</span>
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -400
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1.2
                            }
                        }}
                        viewport={{ once: true }}>
                        <div className="text-body01 font-medium text-cream">Freelance Web Developer & Designer</div>
                        <div className="text-body01 font-medium text-cream">
                            Passionate Surfer, Yogini and World traveler
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Second Section */}
            <div className="w-full min-h-screen flex items-center justify-center py-[80px]">
                <div className="container h-full">
                    <div className="flex gap-[126px] items-center justify-center ">
                    <div className="relative w-full left-0">
                        <NextImage
                            src="/images/ondesk-side.jpg"
                            alt="on computer working"
                            width={694}
                            height={458}
                            className="rounded-md object-cover"
                        />
                    </div>

                    <div className="flex flex-col w-[80%]">
                        <h5 className="text-heading01 text-accent">text here</h5>
                        <div className="text-base flex-wrap text-secodaty">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>

                    </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="col-span-1" />
                    <div className="relative flex justify-end w-full h-[394px] col-span-1 m-[-80px]">
                        <NextImage
                            src="/images/ondesk-writing.jpg"
                            alt="taking a note"
                            width={327}
                            height={394}
                            className="rounded-md object-cover shadow-lg"
                        />
                        </div>
                        </div>
                </div>
            </div>
        </>
    );
};
