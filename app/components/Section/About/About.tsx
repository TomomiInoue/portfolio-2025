import React from 'react';
import NextImage from 'next/image';

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
                  />
                  <div className="relative -top-20 w-full max-w-[1280px] mx-auto h-full flex flex-col text-left justify-center items-start px-4">
                      <h1 className="font-bold text-[72px] text-accent mb-6">
                          title
                      </h1>
                      <div className="text-2xl font-medium text-cream">Freelance Web Developer & Designer</div>
                  </div>
              </div>
              </>
    )
}