import { Divider } from "@nextui-org/react"
import Link from "next/link"

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
        label: 'Services',
        href: '/services'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
]
export const Header = () => {
    return (
        <nav className="w-full h-[60px] absolute top-0 left-0 flex justify-end items-center p-4 gap-6 border-b-1">
            {navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                    <div className="text-secondary text-lg font-bold">{item.label}</div>
                </Link>
            ))}
        </nav>
    )
}