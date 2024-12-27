import React from "react";
import NextImage from "next/image";

export const LandingComponent = () => {
    return (
        <>
            <div className="absolute top-0 w-full h-screen">
                <NextImage
                    src="/images/cheater-five.jpg"
                    alt="Tomomi Inoue"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="absolute top-0 w-full h-screen">
                <div className="px-[171px] h-full flex flex-col text-left justify-center items-start">
                    <h1 className="text-display01 text-cream">I am <span className="inline text-orange">Tomomi Inoue</span></h1>
                    <div className="text-heading01 font-medium text-cream">Freelance Web Developer & Designer</div>
                    <div className="text-heading01 font-medium text-cream">Passionate Surfer, Yogini and World traveler</div>
                </div>
            </div>
            <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Second Section</h2>
                    <p className="text-lg">This is the second section of your landing page.</p>
                </div>
            </div>
        </>

    );
};
