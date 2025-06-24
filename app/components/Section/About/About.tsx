"use client";

import React, { useEffect, useState } from 'react';
import NextImage from 'next/image';
import { ImageAndTextSideBySide } from './ImageAndTextSideBySide';
import { SectionDivider } from './SectionDivider';
import { cn, Link } from '@nextui-org/react';

interface AboutProps {
    locale: "en-AU" | "ja";
}

const AboutCopy = {
    en: {
        title: "Living My Passions, Creating With Purpose",
        description: "I blend creativity and determination in every aspect of my life, from crafting seamless digital experiences to embracing the power of the ocean, yoga, and mindful living",
    },
    ja: {
        title: ["好きなことを大切に、心をこめてつくる",
            "サーフィン、ヨガ、デザイン。",
            "私らしいリズムで生きながら、世界に届くものをつくっています。",
        ],
        description: [
            "私は、シームレスなデジタル体験の創造から、",
            "海の力、ヨガ、マインドフルな生活を受け入れることまで、",
            "あらゆる面で創造性と決意を融合さ=",
            "させています。"
        ]
    }
};
export const AboutComponent = ({ locale }: AboutProps) => {
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
                    src="/images/barrel-pigdog.jpg"
                    alt="Tomomi Inoue"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className='hidden lg:block'
                />
                <NextImage
                    src="/images/sitting-on-board.jpg"
                    alt="Tomomi Inoue sitting on surf board"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className='lg:hidden'
                />

                <div className="relative lg:top-20 w-full max-w-[1280px] mx-auto h-full flex flex-col justify-end text-left lg:justify-center items-start pb-5 lg:pb-0 px-4">
                    <h1 className={cn("text-accent mb-6 lg:w-[58%] leading-tight",
                        locale === "ja" ? "text-display05 lg:text-display05" : "text-display05 lg:text-display02",
                    )}>
                        {locale === "ja"
                            ? AboutCopy.ja.title.map((line, index) => (
                                <span key={index} className="block text-accent">{line}</span>
                            ))
                            :
                            <span className='text-accent'>{AboutCopy.en.title}</span>
                        }
                    </h1>

                    <div className="text-body03 lg:text-body02 font-regular text-cream font-heebo lg:w-1/3 pt-6">
                        {locale === "ja"
                            ? AboutCopy.ja.description.map((line, index) => (
                                <span key={index} className="block">{line}</span>
                            ))
                            : AboutCopy.en.description}
                    </div>
                </div>
            </div >
            {/* Second Section */}
            <div className="w-full min-h-screen flex items-center justify-center py-10 lg:py-[80px]" >
                <div className="container h-full px-6 lg:px-0">
                    <h4 className="text-heading02 lg:text-heading01 font-semibold text-accent">About Me</h4>
                    <SectionDivider label="About My Craft" />
                    <ImageAndTextSideBySide
                        locale={locale}
                        screenSize={screenSize}
                        item={{
                            image: {
                                src: "/images/ondesk-behind.jpg",
                                alt: "working on the desk shot from behind"
                            },
                            title: {
                                en: ["Bringing Ideas to Life with Precision and Passion"],
                                ja: ["アイデアを", "情熱と正確さで", "形にする"]
                            },
                            text: {
                                en: "I thrive on turning visions into reality. With a sharp eye for detail and a love for animation and design, I work tirelessly to create digital experiences that inspire. Punctuality and dedication drive me to consistently deliver outstanding results.",
                                ja: "アイデアをかたちにするのが得意です。アニメーションやデザインが大好きで、細かい部分にもこだわりながら、見る人の心に残る体験をつくっています。"
                            },
                        }}
                    />

                    <SectionDivider label="Mindful Living" />
                    <ImageAndTextSideBySide
                        locale={locale}
                        screenSize={screenSize}
                        item={{
                            image: {
                                src: "/images/yoga.jpg",
                                alt: "yoga at the field"
                            },
                            title: {
                                en: ["Fostering Balance Through Movement and Mindfulness"],
                                ja: ["動きとマインドフルネスで", "バランスを育む"]
                            },
                            text: {
                                en: "My decade-long journey as a yoga teacher and chef has instilled a deep passion for cultivating a healthy mind and body. Yoga remains my daily ritual, and I channel this energy into crafting nourishing meals to fuel my creativity and focus.",
                                ja: "ヨガのインストラクターとシェフとしての10年の旅は、健康な心と体を育むことへの深い情熱を私に植え付けました。ヨガは私の日常の儀式であり、このエネルギーを創造性と集中力を高めるための栄養豊富な食事の作成に注いでいます。"
                            },
                            isImageRight: true
                        }}
                    />
                    <SectionDivider label="Surf & Spirit" />
                    <ImageAndTextSideBySide
                        locale={locale}
                        screenSize={screenSize}
                        item={{
                            image: {
                                src: "/images/smiling-on-board.jpg",
                                alt: "smiling on the longboard in the ocean"
                            },
                            title: {
                                en: ["Chasing Waves, Embracing Adventure"],
                                ja: ["波を追い求め", "冒険を受け入れる"]
                            },
                            text: {
                                en: "Surfing is my ultimate passion — an exhilarating blend of dedication, determination, and adventure. Traveling the world in pursuit of the perfect wave reflects my commitment to pushing boundaries and chasing dreams with unrelenting focus.",
                                ja: "サーフィンは私の究極の情熱です。献身、決意、冒険が融合したエキサイティングな体験です。完璧な波を求めて世界を旅することは、限界を押し広げ、夢を追い求めることへの私のコミットメントを反映しています。"
                            },
                        }}
                    />
                </div>
            </div>
            {/* CTX to "/projects" */}
            <div className="w-full bg-cream border-t border-brown text-center py-6">
                <p className="text-brown text-sm lg:text-base font-heebo">
                    Curious what I’ve been building?{" "}
                    <Link
                        //href with locale
                        href={locale === "ja" ? "/ja/projects" : "/projects"}
                        aria-label="View my projects"
                        rel="noopener noreferrer"
                        className="text-accent font-semibold hover:underline ml-2"
                    >
                        {
                            locale === "ja"
                                ? "最近の制作はこちらから →"
                                : "View my projects →"
                        }
                    </Link>
                </p>
            </div>
        </>
    );
};