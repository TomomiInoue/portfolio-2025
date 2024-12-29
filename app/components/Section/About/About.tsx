import React from 'react';
import NextImage from 'next/image';
import { ImageAndTextSideBySide } from './ImageAndTextSideBySide';

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
                    <h3 className="text-3xl font-bold text-accent mb-10">About Me</h3>
                    <ImageAndTextSideBySide
                        item={{
                            image: {
                                src: "/images/onDesk-behind.jpg",
                                alt: "working on the desk shot from behind"
                            },
                            title: "title here",
                            text: "text here"
                        }}
                    />
                     <ImageAndTextSideBySide
                        item={{
                            image: {
                                src: "/images/yoga.jpg",
                                alt: "yoga at the field"
                            },
                            title: "title here",
                            text: "text here",
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
                            text: "text here",
                        }}
                    />
                </div>
            </div>
        </>
    )
}