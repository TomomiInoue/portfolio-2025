import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LandingCopyTypes } from "@/app/type/types";
import React from "react";

interface BannerProps {
    locale: "en-AU" | "ja";
    landingCopy: LandingCopyTypes;
}

export const Banner = ({ locale, landingCopy }: BannerProps) => {
    const ref = useRef(null);

    // Track scroll progress for this section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"], // from fully in view to scrolled out
    });

    // Animate opacity and scale as user scrolls
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    return (
        <section
            ref={ref}
            className="relative h-screen overflow-hidden="
        >
            <div className="sticky top-0 h-screen z-0 bg-cream flex items-center justify-center">
                <motion.h1
                    style={{ opacity, scale }}
                    className="text-2xl md:text-5xl font-semibold leading-loose text-accent font-playfairDisplay px-8 md:px-0"
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
        </section>
    );
};
