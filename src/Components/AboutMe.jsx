"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    // useDisclosure,
} from "@heroui/react";
import { MapPin, FileText, ChevronRight, Mail, Download } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { AboutModal } from "./aboutModal";

const STATS = [
    { value: "20+", label: "PROJECTS BUILT" },
    { value: "3RD YR", label: "BSC MATHEMATICS" },
    { value: "24/7", label: "AVAILABILITY" },
    { value: "3", label: "LANGUAGES" },
];

const LANGUAGES = [
    { flag: "🇧🇩", name: "Bangla", level: "Native" },
    { flag: "🇬🇧", name: "English", level: "Medium" },
    { flag: "🇮🇳", name: "Hindi", level: "Basic" },
];

export default function About() {
    // const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <section id="aboutMe" className="relative overflow-hidden scroll-mt-24 bg-slate-950 text-white">
            {/* Ambient glow, consistent with Hero */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="relative mx-auto w-11/12 max-w-7xl py-28">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className=""
                >
                    <p className="mb-4 font-mono text-sm text-cyan-400/80">// about</p>
                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl font-sora">
                        About Me
                    </h2>
                    <p className=" mt-4 max-w-xl text-white/50">
                        Currently building SparkNest, Voyentra and QurbaniHat — three
                        full-stack platforms, one growing skill set.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr]">

                    {/* Photo card */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative overflow-hidden rounded-2xl border border-white/10"
                    >
                        <div className="relative h-[480px] w-full">
                            <Image
                                src="/assets/profile_pic.png"
                                alt="Sabbir Rahman"
                                fill
                                className="object-cover"
                            />
                            <motion.div
                                className="absolute left-0 right-0 h-12 pointer-events-none"
                                animate={{ y: [-50 , 480] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                {/* Glow */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent blur-md" />

                                {/* Bright center line */}
                                <div className="absolute top-1/2 h-[2px] w-full -translate-y-1/2 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
                            </motion.div>

                            {/* Bottom gradient so overlaid text stays readable */}
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                        </div>

                        {/* Scan-frame corners */}
                        <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-cyan-400/60" />
                        <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-cyan-400/60" />
                        <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-cyan-400/60" />
                        <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-cyan-400/60" />

                        {/* Floating status chip */}
                        <div className="absolute left-4 top-14 rounded-lg border border-white/10 bg-slate-950/70 px-3 py-2 font-mono text-[11px] backdrop-blur-md">
                            <span className="flex items-center gap-1.5 text-emerald-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                build: passing
                            </span>
                        </div>

                        {/* Name + location, overlaid */}
                        <div className="absolute inset-x-0 bottom-0 p-5">
                            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium tracking-wide text-emerald-300">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                AVAILABLE FOR HIRE
                            </span>
                            <h3 className="text-2xl font-bold text-white">Sabbir Rahman</h3>
                            <span className="mt-1 flex items-center gap-1.5 text-sm text-white/60">
                                <MapPin size={14} />
                                Bangladesh · Remote-ready
                            </span>
                        </div>
                    </motion.div>

                    {/* Right panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                    >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                            <h3 className="text-3xl font-bold font-sora leading-tight md:text-4xl">
                                Building the <br />
                                <span className="text-cyan-400">Modern Web Stack</span>
                            </h3>

                            {/* load full profile */}
                            <AboutModal />
                        </div>

                        <div className="mt-6 space-y-5 leading-8 text-white/60">
                            <p>
                                I'm a <span className="font-semibold text-white">Frontend Developer (MERN Stack)</span>{" "}
                                focused on turning ideas into fast, reliable web products. My
                                work sits at the intersection of clean architecture, practical
                                engineering, and interfaces people actually enjoy using.
                            </p>
                            <p>
                                With hands-on experience across{" "}
                                <span className="text-cyan-400">Next.js</span> and{" "}
                                <span className="text-indigo-400">Node.js</span> ecosystems, I
                                don't just style components — I build complete systems:
                                authentication, REST APIs, and MongoDB-backed backends that
                                hold up end to end, from idea-sharing platforms to booking
                                systems.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
                            {STATS.map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-2xl font-bold font-sora text-white">{stat.value}</p>
                                    <p className="mt-1 font-mono text-[11px] tracking-wide text-white/40">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Languages */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mt-6 flex flex-wrap gap-3"
                >
                    {LANGUAGES.map((lang) => (
                        <span
                            key={lang.name}
                            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl"
                        >
                            <span>{lang.flag}</span>
                            {lang.name}
                            <span className="text-white/40">({lang.level})</span>
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Full profile modal — glassmorphic */}
        </section>
    );
}