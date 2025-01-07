import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';
import { navItems } from '@/app/constants/navItem';

export const Footer = () => {

    return (
        <footer className="bg-brown text-cream py-6 lg:py-10">
            <div className="container mx-auto grid grid-cols-2 gap-4 md:grid-cols-4 justify-between items-center">
                <div className='col-span-2 flex gap-6 items-center'>
                    <Link href="/">
                        <NextImage src="/logo/tomomi-logo-cream.png" alt="Tomomi Inoue" width={56} height={56} />
                    </Link>
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.href} passHref>
                            <p className='text-body04 font-medium cursor-pointer hover:text-cream'>{item.label}</p>
                        </Link>
                    ))}
                </div>
                <div className='col-span-2 flex flex-col lg:flex-row gap-4 items-end ljustify-end'>
                    <div className='flex gap-[10px]'>
                        <Link href="https://www.linkedin.com/in/tomomi-inoue-730ab71ab/" target="_blank">
                            <Icon icon="famicons:logo-linkedin" width="24" height="24" className="text-cream" />
                        </Link>
                        <Link href="https://github.com/TomomiInoue" target="_blank">
                            <Icon icon="jam:github" width="24" height="24" className="text-cream" />
                        </Link>
                        <Link href="" target="_blank">
                            <Icon icon="streamline:instagram-solid" width="24" height="24" className="text-cream" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}