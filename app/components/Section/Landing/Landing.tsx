"use client"

import React from "react";
import NextImage from "next/image";
import * as motion from "motion/react-client"
import { AboutIntro } from "./AboutIntro";
import { LandingCopyTypes } from "@/app/type/types";
import { Banner } from "./Banner";

const landingCopy: LandingCopyTypes = {
    en: {
        landingCopy:
            [
                "Empowering Global Brands with Bilingual,",
                "Human - Centered Web Design"
            ],
        headline: ["Designing with Empathy,", "Building with Precision"],
        Subheadline: ["Intuitive, multilingual websites,",
            "built with clean UX and scalable code.",
        ],
        description: ["💡 Headless CMS", "✍️ Easy Content Edits", "🌐 Multilingual Support"],
    },
    ja: {
        landingCopy: ["バイリンガル対応で、",
            "世界に伝わるデザインを。"],
        headline: ["シンプルで美しいデザインを、",
            "多言語で世界へ届ける。",],
        Subheadline: ["多言語サイトを、もっと直感的に。",
            "使いやすさと、未来を見据えた設計で。"],
        description: ["💡 ヘッドレスCMSで自由に更新",
            "✍️ 編集はコード不要、すぐできる",
            "🌐 英語も日本語もOKな多言語対応"],
    }
};

export const LandingComponent = ({
    locale
}: {
    locale: "en-AU" | "ja";
}) => {
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
        <div className="w-full overflow-x-hidden scroll-smooth">
            {/* Hero Section */}
            <div className="snap-start relative w-full h-screen overflow-hidden">
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
                            {
                                locale === "ja"
                                    ? landingCopy.ja.landingCopy.map((line, index) => (
                                        <div key={index} className="flex flex-col">
                                            {line}
                                        </div>
                                    ))
                                    : landingCopy.en.landingCopy.map((line, index) => (
                                        <div key={index} className="flex flex-col">
                                            {line}
                                        </div>
                                    ))
                            }

                        </motion.div>
                    </motion.div>
                </div >

                {/* Scroll Down Arrow */}
                <div className="absolute bottom-6 w-full flex flex-col text-center justify-center z-10">
                    <a
                        className="animate-bounce text-main text-6xl"
                        aria-label="Scroll to About Section"
                        onClick={handleScroll}
                        href="#banner"
                    >
                        ↓
                    </a>
                    {/* scroll down */}
                    <p className="text-main text-body04 font-medium mt-2">
                        {locale === "ja" ? "スクロールダウン" : "Scroll Down"}
                    </p>
                </div>
            </div >
            {/* Banner Section */}
            <div id="banner">
                <Banner
                    locale={locale}
                    landingCopy={landingCopy}
                />
            </div>
            {/* About Section with scroll anchor */}
            <div id="about" className="relative z-10 -mt-24 pt-24 bg-primary">
                <div className="absolute top-0 left-0 w-full h-24 z-20 pointer-events-none" />

                <AboutIntro
                    locale={locale}
                    landingCopy={landingCopy}
                />
            </div>
        </div >
    );
};
