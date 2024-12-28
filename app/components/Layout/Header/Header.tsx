"use client"

import React from "react"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import NextImage from "next/image"

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
        label: 'Contact',
        href: '/contact'
    }
]
export const Header = () => {
    const router = useRouter()
    return (
        <Navbar isBordered shouldHideOnScroll
        classNames={{
            wrapper: "h-[60px] flex justify-around items-center p-4 gap-6 bg-cream max-w-screen-xl mx-[80px]]",
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