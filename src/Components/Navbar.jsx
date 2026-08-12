"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#aboutMe" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? "bg-slate-700/80 backdrop-blur-xl shadow-lg"
                    : "bg-slate-950"
                }`}
        >
            <nav className="mx-auto flex w-11/12 max-w-7xl items-center justify-between py-4">
                {/* Logo */}
                <Link href="/">
                    <h2 className="cursor-pointer bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-lg font-semibold text-transparent md:text-xl">
                        SABBIR RAHMAN
                    </h2>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-xl md:flex">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${pathname === item.path
                                        ? "bg-cyan-400 text-slate-950"
                                        : "text-white/80 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white md:hidden"
                >
                    {isOpen ? (
                        <HiX className="text-3xl" />
                    ) : (
                        <HiOutlineMenuAlt3 className="text-3xl" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-300 md:hidden ${isOpen ? "max-h-96 pb-4" : "max-h-0"
                    }`}
            >
                <ul className="mx-auto flex w-11/12 flex-col gap-2 rounded-2xl border border-white/10 bg-slate-900/90 p-4 backdrop-blur-xl">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`block rounded-xl px-4 py-3 transition-all duration-300 ${pathname === item.path
                                        ? "bg-cyan-400 text-slate-950"
                                        : "text-white/80 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}