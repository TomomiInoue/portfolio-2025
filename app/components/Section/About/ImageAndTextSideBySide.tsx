"use client"

import React, { useRef } from "react";
import NextImage from "next/image";
import { ImageAndTextSideBySiteType } from "@/app/type/types";
import { cn } from "@/app/lib/utils";
import { motion, useInView } from "framer-motion";

interface Props {
    item: ImageAndTextSideBySiteType;
}

export const ImageAndTextSideBySide = ({ item }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    // Framer motion variants for text animation
    const textVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: -120,
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
            className={cn("grid grid-cols-8 gap-5 items-center py-[80px]")}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="exit"
            variants={wrapperVariants}
        >
            {/* Image Block */}
            <div
                className={cn(
                    "relative h-[626px] col-span-3",
                    item.isImageRight ? "order-2 col-start-6" : "col-start-1"
                )}
            >

                <NextImage
                    src={item.image.src}
                    alt={item.image.alt}
                    width={417}
                    height={626}
                    className="rounded-lg object-cover"
                />
            </div>


            {/* Text Block */}
            <motion.div
                className={cn(
                    "flex flex-col gap-6 col-span-4",
                    item.isImageRight ? "order-1 col-start-1" : "col-start-5"
                )}
                variants={textVariants}
            >
                <div
                    className={cn(
                        "flex flex-col gap-6 col-span-4",
                        item.isImageRight ? "order-1 col-start-1" : "col-start-5"
                    )}
                >
                    <h4 className="text-[40px] font-semibold">{item.title}</h4>
                    <p className="text-lg font-normal">{item.text}</p>
                </div>
            </motion.div>
        </motion.div>

    );
};
