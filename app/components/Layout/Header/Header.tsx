"use client"

import React, { useEffect, useState } from "react"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import NextImage from "next/image"
import { cn } from "@/app/lib/utils"


const navItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Connect',
        href: '/connect'
    }
]
export const Header = () => {
    const router = useRouter()
    const [isPageTop, setIsPageTop] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                setIsPageTop(true)
            } else {
                setIsPageTop(false)
            }
        }
        )
    }
        , [])
    return (
        <Navbar
            classNames={{
                wrapper: cn("h-[60px] justify-around items-center p-4 gap-6  max-w-screen-xl mx-[80px]",
                    isPageTop ? "hidden" : "flex"
                ),
                content: "w-full flex justify-between items-center",
                brand: "flex items-center gap-2",
                item: "text-secondary text-lg font-bold cursor-pointer hover:opacity-70",
            }
            }
        >
            <NavbarBrand>
                <NextImage src="/logo/tomomi-logo.png" alt="Tomomi Inoue" width={40} height={40} />
            </NavbarBrand>
            <NavbarContent justify="end" className="flex gap-6">
                {navItems.map((item) => (
                    <NavbarItem key={item.label} onClick={() => router.push(item.href)}>{item.label}</NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    )
}