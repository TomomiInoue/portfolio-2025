import React from "react";
import NextImage from "next/image";

export const LandingComponent = () => {
    // return (
    //     <>
    //         <div className="absolute top-0 w-full h-screen">
    //             <NextImage
    //                 src="/images/cheater-five.jpg"
    //                 alt="Tomomi Inoue"
    //                 layout="fill"
    //                 objectFit="cover"
    //                 quality={100}
    //             />
    //         </div>
    //         <div className="absolute top-0 w-full h-screen">
    //             <div className="px-[171px] h-full flex flex-col text-left justify-center items-start">
    //                 <h1 className="text-display01 text-cream">I am <span className="inline text-orange">Tomomi Inoue</span></h1>
    //                 <div className="text-heading01 font-medium text-cream">Freelance Web Developer & Designer</div>
    //                 <div className="text-heading01 font-medium text-cream">Passionate Surfer, Yogini and World traveler</div>
    //             </div>
    //         </div>
    //         <div className="w-full min-h-screen flex items-center justify-center">
    //             <div className="container h-screen">
    //                 <div className="relative">
    //                     <NextImage src="/images/ondesk-side.jpg" alt="on computer working" width={694} height={458}
    //                         className="rounded-md bottom-0 object-cover"
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //     </>

    // );
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-screen">
                <NextImage
                    src="/images/cheater-five.jpg"
                    alt="Tomomi Inoue"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="relative -top-20 w-full max-w-[1280px] mx-auto h-full flex flex-col text-left justify-center items-start px-4">
                    <h1 className="font-bold text-[88px] text-cream mb-6">
                        I am <span className="inline text-orange">Tomomi Inoue</span>
                    </h1>
                    <div className="text-body01 font-medium text-cream">Freelance Web Developer & Designer</div>
                    <div className="text-body01 font-medium text-cream">
                        Passionate Surfer, Yogini and World traveler
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="w-full min-h-screen flex items-center justify-center py-10">
                <div className="container h-screen flex items-center justify-center gap-[126px]">
                    <div className="relative w-full left-0">
                        <NextImage
                            src="/images/ondesk-side.jpg"
                            alt="on computer working"
                            width={694}
                            height={458}
                            className="rounded-md object-cover"
                        />
                    </div>
                    <div className="flex flex-col w-[80%]">
                        <h5 className="text-heading01 text-accent">text here</h5>
                        <div className="text-base flex-wrap text-secodaty">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                                        {/* <div className="absolute right-0 w-[120px] h-[120px]">
                        <NextImage
                            src="/images/ondesk-writing.jpg"
                            alt="taking a note"
                            width={327}
                            height={394}
                            className="rounded-md object-cover"
                            />

                    </div> */}
                </div>
            </div>
        </>
    );
};
