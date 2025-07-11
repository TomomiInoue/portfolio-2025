'use client';

import { Link, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";
import NextImage from "next/image";
import { navItems } from "@/app/constants/navItem";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitch/LanguageSwitch";

interface MobileHeaderProps {
  locale: "en-AU" | "ja";
}

export const MobileHeader = ({
  locale
}: MobileHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="fixed top-0">
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <NextImage src="/logo/logo-rectangle.png" alt="Tomomi Inoue" width={100} height={48} />
          </Link>
        </NavbarBrand>
        <NavbarContent>
          <LanguageSwitcher locale={locale} />
        </NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="justify-self-end"

        />
      </NavbarContent>

      <NavbarMenu>
        {navItems[locale === "en-AU" ? "en" : "ja"].map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              href={item.href}
              size="lg"
              className={cn("w-full text-base",
                pathname === item.href ? "text-orange font-semibold" : "text-secondary font-medium")}

            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}