"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const SectionDivider = ({ label }: { label: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 my-16"
        >
            <div className="flex-grow border-t border-brown/30" />
            <span className="text-sm uppercase tracking-widest text-brown font-semibold whitespace-nowrap">
                {label}
            </span>
            <div className="flex-grow border-t border-brown/30" />
        </motion.div>
    );
};
