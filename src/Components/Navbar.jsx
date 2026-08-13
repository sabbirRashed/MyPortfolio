"use client";
import { useLenis } from "./provider/SmoothScrollProvider";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";


// "id" is the section's actual DOM id (no #). Home points at the Hero
// section — give it id="home" in your Hero component. Every other section
// needs id="aboutMe", id="skills", id="projects", id="contact" respectively.
const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#aboutMe", id: "aboutMe" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState("home");

    const lenis = useLenis();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll-spy: watch every section, mark whichever one is crossing the
    // "active zone" (roughly the top-middle of the viewport) as current.
    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                // Triggers when a section's top has crossed 20% down the
                // viewport and its bottom hasn't yet reached the 60% mark —
                // keeps the "active" zone near where you're actually reading.
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const handleNavClick = (id) => {
        setActiveId(id);
        setIsOpen(false);

        lenis?.scrollTo(`#${id}`, {
            offset: -80, // adjust based on your navbar height
            duration: 1.2,
        });
    };

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "bg-slate-700/80 shadow-lg backdrop-blur-xl"
                : "bg-slate-950"
                }`}
        >
            <nav className="mx-auto flex w-11/12 max-w-7xl items-center justify-between py-4">
                {/* Logo */}
                <a href="#home" onClick={() => handleNavClick("home")}>
                    <h2 className="cursor-pointer bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-lg font-semibold text-transparent md:text-xl">
                        SABBIR RAHMAN
                    </h2>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-xl md:flex">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.href}
                                onClick={(e) => {e.preventDefault(), handleNavClick(item.id)}}
                                className={`block rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${activeId === item.id
                                    ? "bg-cyan-400 text-slate-950"
                                    : "text-white/80 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {item.name}
                            </a>
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
                        <li key={item.id}>
                            <a
                                href={item.href}
                                onClick={(e) => {e.preventDefault(), handleNavClick(item.id)}}
                                className={`block rounded-xl px-4 py-3 transition-all duration-300 ${activeId === item.id
                                    ? "bg-cyan-400 text-slate-950"
                                    : "text-white/80 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}