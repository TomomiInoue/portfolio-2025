import { Link, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";
import NextImage from "next/image";
import { navItems } from "@/app/constants/navItem";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";
import { LanguageSwitcher } from "../LanguageSwitch/LanguageSwitch";

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="fixed top-0">
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <NextImage src="/logo/flow-logo.png" alt="Tomomi Inoue" width={48} height={48} />
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="justify-self-end"

        />
      </NavbarContent>


      <NavbarMenu>
        {navItems.map((item, index) => (
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
      <NavbarContent className="justify-end">
        <LanguageSwitcher />
      </NavbarContent>
    </Navbar>
  );
}