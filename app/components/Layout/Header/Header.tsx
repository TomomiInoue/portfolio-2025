"use client"

import { Divider, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react"
import clsx from "clsx"
import Link from "next/link"

const navItems = [
    {
        label: 'Home',
        href: '#top'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Contact',
        href: '#contact'
    }
]
export const Header = () => {

    const handleScroll = (href: string) => {
        //scroll to href id
        const target = document.querySelector(href ?? '')
        target?.scrollIntoView({ behavior: 'smooth' })

    }
    // const scrolled
    return (
        <Navbar isBordered shouldHideOnScroll className={clsx("bg-primary w-full h-[60px] flex justify-end items-center p-4 gap-6")}>
            <NavbarContent justify="end" className="flex gap-6">
            {navItems.map((item) => (
                <NavbarItem key={item.label} className="text-secondary text-lg font-bold" onClick={() => handleScroll(item.href)}>{item.label}</NavbarItem>
            ))}
            </NavbarContent>
        </Navbar>
    )
}