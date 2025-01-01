"use client";

import React, { useEffect, useState } from 'react';
import NextImage from 'next/image';
import { ImageAndTextSideBySide } from './ImageAndTextSideBySide';
import { TimelineComponent } from './TimelineComponent';

export const AboutComponent = () => {
    const [screenSize, setScreenSize] = useState<number>(0);

    useEffect(() => {
        // Function to update screen size
        const updateScreenSize = () => {
            setScreenSize(window.innerWidth);
        };

        // Initialize screen size
        updateScreenSize();

        // Add event listener for window resize
        window.addEventListener("resize", updateScreenSize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);
    return (
        <>
            {/* Hero Section */}

            <div className="relative w-full h-screen">

                <NextImage
                    src={
                        screenSize > 768 ? "/images/barrel-pigdog.jpg" : "/images/sitting-on-board.jpg"
                    }
                    alt="Tomomi Inoue"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />

                <div className="relative lg:top-20 w-full max-w-[1280px] mx-auto h-full flex flex-col justify-end text-left lg:justify-center items-start pb-5 lg:pb-0 px-4">
                    <h1 className="text-display05 lg:text-display02 text-accent mb-6 lg:w-[55%] leading-tight">
                        Living My Passions, Creating With Purpose
                    </h1>
                    <div className="text-body03 lg:text-body02 text-cream font-heebo lg:w-1/2">I blend creativity and determination in every aspect of my life, from crafting seamless digital experiences to embracing the power of the ocean, yoga, and mindful living</div>
                </div>
            </div>
            {/* Second Section */}
            <div className="w-full min-h-screen flex items-center justify-center py-10 lg:py-[80px]">
                <div className="container h-full">
                    <h4 className="text-heading02 lg:text-heading01 font-semibold text-accent">About Me</h4>
                    <ImageAndTextSideBySide
                        screenSize={screenSize}
                        item={{
                            image: {
                                src: "/images/onDesk-behind.jpg",
                                alt: "working on the desk shot from behind"
                            },
                            title: "Bringing Ideas to Life with Precision and Passion",
                            text: "I thrive on turning visions into reality. With a sharp eye for detail and a love for animation and design, I work tirelessly to create digital experiences that inspire. Punctuality and dedication drive me to consistently deliver outstanding results."
                        }}
                    />
                    <ImageAndTextSideBySide
                        screenSize={screenSize}
                        item={{
                            image: {
                                src: "/images/yoga.jpg",
                                alt: "yoga at the field"
                            },
                            title: "Fostering Balance Through Movement and Mindfulness",
                            text: "My decade-long journey as a yoga teacher and chef has instilled a deep passion for cultivating a healthy mind and body. Yoga remains my daily ritual, and I channel this energy into crafting nourishing meals to fuel my creativity and focus..",
                            isImageRight: true
                        }}
                    />
                    <ImageAndTextSideBySide
                        screenSize={screenSize}
                        item={{
                            image: {
                                src: "/images/smiling-on-board.jpg",
                                alt: "smiling on the longboard in the ocean"
                            },
                            title: "Chasing Waves, Embracing Adventure",
                            text: "Surfing is my ultimate passion — an exhilarating blend of dedication, determination, and adventure. Traveling the world in pursuit of the perfect wave reflects my commitment to pushing boundaries and chasing dreams with unrelenting focus.",
                        }}
                    />
                    <h4 className="text-[42px] font-semibold text-accent mb-6">Stroll Through My Glory Days</h4>
                    <TimelineComponent />
                </div>
            </div>
        </>
    )
}