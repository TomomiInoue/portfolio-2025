import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';

export const Footer = () => {

    return (
        <footer className="bg-brown text-cream py-10">
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 justify-between items-center">
                <div className='col-span-2 flex gap-6 items-center'>
                    <Link href="/">
                        <NextImage src="/logo/tomomi-logo-cream.png" alt="Tomomi Inoue" width={56} height={56} />
                    </Link>
                </div>

                <div className='col-span-2 flex gap-4 items-end justify-end'>
                    <div className='flex flex-col gap-2'>
                    <h3 className="text-body03 font-bold">Contact</h3>
                    <Link href="mailto:tomomi.codes@gmail.com" passHref target="_blank">
                    <p className='text-body04 font-medium'>tomomi.code@gmail.com</p>
                    </Link>
                    </div>
      
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
        </footer>
    )
}