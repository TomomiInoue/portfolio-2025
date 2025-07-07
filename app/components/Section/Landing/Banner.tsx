import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LandingCopyTypes } from "@/app/type/types";
import React from "react";

interface BannerProps {
    locale: "en-AU" | "ja";
    landingCopy: LandingCopyTypes;
}

export const Banner = ({ locale, landingCopy }: BannerProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const textVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: -40,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeOut" },
        },
    };

    return (
        <div ref={ref} className="relative h-[360px] md:h-screen overflow-hidden">
            <div className="sticky top-0 h-[360px] md:h-screen z-0 bg-cream flex items-center justify-center">
                <motion.h1
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={textVariants}
                    className="text-2xl md:text-5xl font-semibold leading-loose text-accent font-playfairDisplay px-8 md:px-10 text-center"
                >
                    {locale === "en-AU"
                        ? landingCopy.en.headline.map((title, index) => (
                            <div key={index} className="mb-2">
                                {title}
                            </div>
                        ))
                        : landingCopy.ja.headline}
                </motion.h1>
            </div>
        </div>
    );
};
