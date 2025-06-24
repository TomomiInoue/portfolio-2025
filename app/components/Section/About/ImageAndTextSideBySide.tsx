"use client"

import React, { useRef } from "react";
import NextImage from "next/image";
import { ImageAndTextSideBySiteType } from "@/app/type/types";
import { cn } from "@/app/lib/utils";
import { motion, useInView } from "framer-motion";

interface Props {
    item: ImageAndTextSideBySiteType;
    screenSize: number;
    locale: "en-AU" | "ja";
}

export const ImageAndTextSideBySide = ({ item, screenSize, locale }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    // Framer motion variants for text animation
    const textVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: screenSize > 768 ? -80 : 0,
            // y: -120,
            opacity: 1,
            transition: { duration: 2.2, ease: "easeOut" },
        },
    };

    // Wrapper animation for sliding up and exiting
    const wrapperVariants = {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
        exit: {
            opacity: 0,
            y: -50,
            transition: { duration: 0.8, ease: "easeIn" },
        },
    };


    return (
        <motion.div
            ref={ref}
            className={cn("flex flex-col lg:flex-row gap-6 lg:gap-[100px] items-center py-10 justify-center")}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="exit"
            variants={wrapperVariants}
        >
            {/* Image Block */}
            <motion.div
                whileHover={{
                    y: -10,
                    rotate: 1.5,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 200, damping: 15 },
                }}
                className={cn(
                    "relative block col-span-3",
                    item.isImageRight ? "order-1 md:order-2" : "md:order-1"
                )}
            >
                <NextImage
                    src={item.image.src}
                    alt={item.image.alt}
                    width={360}
                    height={540}
                    className="rounded-lg object-cover shadow-lg transition-shadow duration-300"
                />
            </motion.div>


            {/* Text Block */}
            <motion.div
                className={cn(
                    "flex flex-col max-w-[560px]",
                    item.isImageRight ? "order-2 md:order-1" : "order-2"
                )}
                variants={textVariants}
            >
                <h3 className="text-heading02 lg:text-heading01 font-semibold text-accent">
                    {locale === "ja" ? item.title.ja : item.title.en}
                </h3>
                <p className="text-caption01 font-heebo lg:max-w-[80%] leading-relaxed mt-6">
                    {locale === "ja"
                        ? item.text.ja
                        : item.text.en
                    }
                </p>
            </motion.div>
        </motion.div>

    );
};
