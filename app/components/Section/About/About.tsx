import React from 'react';
import NextImage from 'next/image';
import { ImageAndTextSideBySide } from './ImageAndTextSideBySide';
import { TimelineComponent } from './TimelineComponent';

export const AboutComponent = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-screen">
                <NextImage
                    src="/images/barrel-pigdog.jpg"
                    alt="Tomomi Inoue"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority={true}
                />
                <div className="relative -top-20 w-full max-w-[1280px] mx-auto h-full flex flex-col text-left justify-center items-start px-4">
                    <h1 className="font-bold text-[72px] text-accent mb-6">
                        title
                    </h1>
                    <div className="text-2xl font-medium text-cream">Freelance Web Developer & Designer</div>
                </div>
            </div>
            {/* Second Section */}
            <div className="w-full min-h-screen flex items-center justify-center py-[80px]">
                <div className="container h-full">
                    <h4 className="text-[42px] font-semibold text-accent">About Me</h4>
                    <ImageAndTextSideBySide
                        item={{
                            image: {
                                src: "/images/onDesk-behind.jpg",
                                alt: "working on the desk shot from behind"
                            },
                            title: "title here",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        }}
                    />
                     <ImageAndTextSideBySide
                        item={{
                            image: {
                                src: "/images/yoga.jpg",
                                alt: "yoga at the field"
                            },
                            title: "title here",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            isImageRight: true  
                        }}
                    />
                          <ImageAndTextSideBySide
                        item={{
                            image: {
                                src: "/images/smiling-on-board.jpg",
                                alt: "smiling on the longboard in the ocean"
                            },
                            title: "title here",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        }}
                    />
                     <h4 className="text-[42px] font-semibold text-accent mb-6">Stroll Through My Glory Days</h4>
                    <TimelineComponent />
                </div>
            </div>
        </>
    )
}