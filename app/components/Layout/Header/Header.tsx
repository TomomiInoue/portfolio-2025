"use client"

import React from "react"
import {  Navbar, NavbarContent, NavbarItem } from "@nextui-org/react"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/navigation"

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
        <Navbar isBordered shouldHideOnScroll className={clsx("w-full h-[60px] flex justify-end items-center p-4 gap-6", onscroll? "bg-bone": "bg-transparent")}>
            <NavbarContent justify="end" className="flex gap-6">
            {navItems.map((item) => (
                <NavbarItem key={item.label} className="text-darkGreen text-lg font-bold" onClick={() => router.push(item.href)}>{item.label}</NavbarItem>
            ))}
            </NavbarContent>
        </Navbar>
    )
}