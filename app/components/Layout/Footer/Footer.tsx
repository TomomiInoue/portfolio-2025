import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';
import { navItems } from '@/app/constants/navItem';
import { cn } from '@nextui-org/react';
import { SocialLinks } from '@/app/constants/links';

interface FooterProps {
    locale: 'en-AU' | 'ja';
}
export const Footer = ({ locale }: FooterProps) => {

    return (
        <footer className="bg-brown text-cream py-6 lg:py-10">
            <h2 className="container text-white text-[2rem] lg:text-[5rem] font-semibold leading-[1] uppercase mt-5 tracking-tight mb-10">
                <span>Design to</span>
                <br />
                <span>Development</span>
            </h2>
            <div className="container px-6 lg:px-0 mx-auto grid grid-cols-2 gap-4 md:grid-cols-4 justify-between items-center">
                <div className={cn('col-span-2 flex flex-wrap gap-6 items-center')}>
                    <Link href="/"
                        aria-label='logo link to home'
                    >
                        <NextImage src="/logo/flow-logo-light.png" alt="Tomomi Inoue" width={78} height={78} />
                    </Link>
                    {navItems[locale === "en-AU" ? "en" : "ja"].map((item) => (
                        <Link key={item.href} href={item.href} passHref aria-label={`link to ${item.label}`} >
                            <p className='text-xs md:text-body04 font-medium cursor-pointer hover:text-cream'>{item.label}</p>
                        </Link>
                    ))}

                </div>
                <div className='col-span-2 flex flex-col lg:flex-row gap-4 items-end justify-end'>
                    <div className='gap-[10px]'>
                        <Link href={SocialLinks.linkedin} target="_blank">
                            <Icon icon="famicons:logo-linkedin" width="24" height="24" className="text-cream" />
                        </Link>
                        <Link href={SocialLinks.github} target="_blank">
                            <Icon icon="jam:github" width="24" height="24" className="text-cream" />
                        </Link>
                        <Link href={SocialLinks.instagram} target="_blank">
                            <Icon icon="streamline:instagram-solid" width="24" height="24" className="text-cream" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}