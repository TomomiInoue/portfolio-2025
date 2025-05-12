"use client"

import React, { useRef } from "react";
import NextImage from "next/image";
import { ImageAndTextSideBySiteType } from "@/app/type/types";
import { cn } from "@/app/lib/utils";
import { motion, useInView } from "framer-motion";

interface Props {
    item: ImageAndTextSideBySiteType;
    screenSize: number;
}

export const ImageAndTextSideBySide = ({ item, screenSize }: Props) => {
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
        // <div ref={ref} className={cn("grid grid-cols-8 grid-rows-1 gap-5 items-center")}>
        <motion.div
            ref={ref}
            className={cn("flex flex-col lg:flex-row gap-6 lg:gap-[100px] items-center py-10 justify-center")}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="exit"
            variants={wrapperVariants}
        >
            {/* Image Block */}
            <div
                className={cn(
                    "relative block col-span-3",
                    item.isImageRight ? "order-2" : "order-1"
                )}
            >

                <NextImage
                    src={item.image.src}
                    alt={item.image.alt}
                    width={360}
                    height={540}
                    className="rounded-lg object-cover"
                />
            </div>


            {/* Text Block */}
            <motion.div
                className={cn(
                    "flex flex-col gap-6 max-w-[560px]",
                    item.isImageRight ? "order-1" : "order-2"
                )}
                variants={textVariants}
            >
                <h4 className="text-heading02 lg:text-heading01  font-semibold leading-tight lg:max-w-[85%]">{item.title}</h4>
                <p className="text-caption01 font-heebo lg:max-w-[80%] leading-relaxed">{item.text}</p>
            </motion.div>
        </motion.div>

    );
};
