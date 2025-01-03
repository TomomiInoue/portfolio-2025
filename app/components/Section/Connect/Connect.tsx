import Link from "next/link"
import React from "react"
import { Icon } from "@iconify/react";
import NextImage from "next/image";

export const ConnectComponent = () => {
    return (
        <div className="h-screen flex flex-col md:flex-row items-center justify-center">
            <div className="container grid grid-cols-1 lg:grid-cols-5 gap-10">
                <div className="col-span-2 flex flex-col justify-center items-start">
                    <h4 className="text-heading02 lg:text-heading01 font-semibold text-accent">Connect</h4>\
                    <p className="text-body04 lg:text-body03 text-secondary font-heebo mb-6">
                        I&apos;m always looking for new opportunities to collaborate and create. Whether you&apos;re a brand looking to elevate your digital presence or a fellow creative looking to team up, I&apos;d love to hear from you.
                    </p>
                    <Link href="mailto:tomomi.codes@gmail.com" passHref target="_blank"
                        className="text-body04 lg:text-body03 text-secondary font-heebo font-semibold"
                    >
                        tomomi.codes@gmail.com
                    </Link>
                    <div className="flex gap-4 mt-4">
                        <Link href="https://www.linkedin.com/in/tomomi-inoue-730ab71ab/" target="_blank">
                            <Icon icon="famicons:logo-linkedin" width="24" height="24" className="text-secondary" />
                        </Link>
                        <Link href="https://github.com/TomomiInoue" target="_blank">
                            <Icon icon="jam:github" width="24" height="24" className="text-secondary" />
                        </Link>
                        <Link href="" target="_blank">
                            <Icon icon="streamline:instagram-solid" width="24" height="24" className="text-secondary" />
                        </Link>
                    </div>
                </div>
                <div className="col-span-3">
                    <NextImage src="/images/connect.jpg" alt="connect" layout="responsive" priority width={600} height={400} className="rounded-md" />
                </div>
            </div>
        </div>
    )
}