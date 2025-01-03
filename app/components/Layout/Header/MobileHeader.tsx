import { Link, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";
import NextImage from "next/image";
import { navItems } from "@/app/constants/navItem";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";

export const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname();
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
          <NavbarContent>
            <NavbarBrand>
            <Link href="/">
                        <NextImage src="/logo/tomomi-logo.png" alt="Tomomi Inoue" width={40} height={40} />
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
                  className={cn("w-full",
                    pathname === item.href ? "text-orange" : "text-secondary")}
                  
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      );
    }