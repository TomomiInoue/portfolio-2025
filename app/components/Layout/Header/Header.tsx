"use client"

import React, { useEffect, useState } from "react"
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { usePathname, useRouter } from "next/navigation"
import NextImage from "next/image"
import { cn } from "@/app/lib/utils"
import { motion } from "framer-motion";
import { navItems } from "@/app/constants/navItem"
import { MobileHeader } from "./MobileHeader"
import { LanguageSwitcher } from "./LanguageSwitch/LanguageSwitch"

interface HeaderProps {
    locale: "en-AU" | "ja";
}

export const Header = ({ locale }: HeaderProps) => {
    const router = useRouter()
    const pathname = usePathname()
    const [isPageTop, setIsPageTop] = useState(false);
    useEffect(() => {
        if (pathname === "/") {
            const handleScroll = () => {
                setIsPageTop(window.scrollY === 0);
            };

            // Check immediately and add scroll listener
            handleScroll();
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else {
            // Not on landing page, show header
            setIsPageTop(false);
        }
    }, [pathname]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }} // Start hidden and slightly above
                animate={{
                    opacity: isPageTop ? 0 : 1,
                    y: isPageTop ? -20 : 0, // Slide down smoothly
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
                className="fixed top-0 left-0 w-full z-50 hidden md:flex"
            >
                <Navbar
                    classNames={{
                        wrapper: cn("h-[78px] justify-around items-center p-4 gap-6  max-w-screen-xl mx-[80px]",
                            isPageTop ? "hidden" : "flex"
                        ),
                        content: "w-full flex justify-between items-center",
                        brand: "flex items-center gap-2 order-1",
                        item: "text-secondary text-lg font-bold cursor-pointer hover:opacity-70",
                    }
                    }
                >
                    <NavbarBrand >
                        <Link href="/">
                            <NextImage src="/logo/logo-main-circle.png" alt="Tomomi Inoue" width={68} height={68} />
                        </Link>
                    </NavbarBrand>
                    <NavbarContent justify="end" className="flex gap-6 justify-end items-center order-2">
                        {navItems[locale === "en-AU" ? "en" : "ja"].map((item) => {
                            const isHome = item.href === "/";
                            const isActive = isHome
                                ? pathname === "/"
                                : pathname.startsWith(item.href);
                            return (
                                <NavbarItem key={item.label} onClick={() => router.push(item.href)}
                                    className={cn(
                                        "text-secondary text-lg  cursor-pointer hover:opacity-70",
                                        isActive ? "text-orange font-bold" : "font-medium"
                                    )}
                                >
                                    {item.label}
                                </NavbarItem>
                            )
                        })}
                    </NavbarContent>
                </Navbar>
            </motion.div>
            <div className="md:hidden">
                <MobileHeader locale={locale} />
            </div>
            <div className="fixed bg-transparent z-50 right-5 top-6 hidden md:flex items-center justify-end">
                <LanguageSwitcher locale={locale} />
            </div>
        </>
    )
}