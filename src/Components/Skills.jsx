"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
    SiJavascript,
    SiHtml5,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiFramer,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiJsonwebtokens,
    SiGit,
    SiGithub,
    SiVercel,
    SiNetlify,
} from "react-icons/si";
import { Sparkles, Palette, Database, ShieldCheck, Server, Paintbrush } from "lucide-react";

// CSS3 has no stable icon across react-icons versions — using a lucide fallback.
const SiCss3 = Paintbrush;

// Core stack shown as proficiency bars — the technologies I use most.
const PROFICIENCY = [
    { name: "JavaScript", percent: 90, icon: SiJavascript },
    { name: "React.js", percent: 90, icon: SiReact },
    { name: "Next.js", percent: 88, icon: SiNextdotjs },
    { name: "Node.js", percent: 85, icon: SiNodedotjs },
    { name: "Express.js", percent: 85, icon: SiExpress },
    { name: "MongoDB", percent: 82, icon: SiMongodb },
    { name: "Tailwind CSS", percent: 90, icon: SiTailwindcss },
    { name: "Git & GitHub", percent: 85, icon: SiGit },
];

// Grouped breakdown — everything else in the stack, organized by role.
const CATEGORIES = [
    {
        label: "LANGUAGES",
        title: "Languages",
        description: "Core languages behind every interface and interaction I build.",
        items: [
            { name: "JavaScript", icon: SiJavascript },
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss3 },
        ],
    },
    {
        label: "FRONTEND",
        title: "Frontend",
        description: "Responsive interfaces built with React and the Next.js App Router.",
        items: [
            { name: "React.js", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
    },
    {
        label: "UI & ANIMATION",
        title: "UI & Animation",
        description: "Component systems and motion that make an interface feel finished.",
        items: [
            { name: "HeroUI", icon: Sparkles },
            { name: "DaisyUI", icon: Palette },
            { name: "Framer Motion", icon: SiFramer },
        ],
    },
    {
        label: "BACKEND",
        title: "Backend",
        description: "Node.js services, REST APIs, and CRUD systems behind the UI.",
        items: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "REST APIs", icon: Server },
        ],
    },
    {
        label: "DATABASE & AUTH",
        title: "Database & Auth",
        description: "Data modeling and secure, session-based authentication.",
        items: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "Mongoose", icon: Database },
            { name: "Better Auth", icon: ShieldCheck },
            { name: "JWT", icon: SiJsonwebtokens },
        ],
    },
    {
        label: "TOOLS & DEPLOYMENT",
        title: "Tools & Deployment",
        description: "Version control and shipping projects to production.",
        items: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Vercel", icon: SiVercel },
            { name: "Netlify", icon: SiNetlify },
        ],
    },
];

// Flat pill list for the filter row — every technology across the section, deduplicated.
const ALL_SKILLS = Array.from(
    new Map(
        [...PROFICIENCY, ...CATEGORIES.flatMap((c) => c.items)].map((s) => [s.name, s])
    ).values()
);

export default function Skills() {
    const [activeSkill, setActiveSkill] = useState(null);
    const barRefs = useRef({});

    const handlePillClick = (name) => {
        setActiveSkill(name);
        const node = barRefs.current[name];
        if (node) {
            node.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <section className="relative overflow-hidden bg-slate-800 text-white">
            {/* Quiet ambient glow, consistent with the Hero section */}
            <div className="pointer-events-none absolute left-1/4 top-0 h-[420px] w-[420px] -translate-y-1/3 rounded-full bg-cyan-500/10 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-0 right-1/4 h-[380px] w-[380px] translate-y-1/3 rounded-full bg-indigo-500/10 blur-[130px]" />

            <div className="relative mx-auto w-11/12 max-w-7xl py-28">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-2xl text-left"
                >
                    <p className="mb-4 font-mono text-sm text-cyan-400/80">// skills</p>
                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Tech Stack
                    </h2>
                    <p className="mt-5 text-base leading-8 text-white/60 md:text-lg">
                        React, Next.js and Node.js sit at the core of how I build — REST
                        APIs and MongoDB on the backend, Tailwind CSS, HeroUI and Framer
                        Motion for interfaces that feel considered, not default.
                    </p>
                </motion.div>

                {/* Filter pills — right-to-left marquee, pauses on hover so pills stay clickable */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-10 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
                >
                    <Marquee direction="left" speed={38} pauseOnHover gradient={false}>
                        {ALL_SKILLS.map((skill) => (
                            <button
                                key={skill.name}
                                onClick={() => handlePillClick(skill.name)}
                                className={`mx-1.5 shrink-0 rounded-full border px-4 py-1.5 font-mono text-xs tracking-wide transition-colors duration-300 ${activeSkill === skill.name
                                        ? "border-cyan-400/60 bg-cyan-400/10 text-cyan-300"
                                        : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/25 hover:text-white/90"
                                    }`}
                            >
                                {skill.name}
                            </button>
                        ))}
                    </Marquee>
                </motion.div>

                {/* Proficiency bars */}
                <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
                    {PROFICIENCY.map((skill, i) => {
                        const Icon = skill.icon;
                        const isActive = activeSkill === skill.name;

                        return (
                            <motion.div
                                key={skill.name}
                                ref={(node) => {
                                    barRefs.current[skill.name] = node;
                                }}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className={`rounded-2xl border bg-white/5 p-6 backdrop-blur-xl transition-shadow duration-300 ${isActive
                                        ? "border-cyan-400/50 shadow-lg shadow-cyan-500/10"
                                        : "border-white/10"
                                    }`}
                            >
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="flex items-center gap-2.5 font-medium text-white">
                                        <Icon size={17} className="text-cyan-300/90" />
                                        {skill.name}
                                    </span>
                                    <span className="font-mono text-sm text-cyan-300">
                                        {skill.percent}%
                                    </span>
                                </div>
                                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percent}%` }}
                                        viewport={{ once: true, margin: "-60px" }}
                                        transition={{ duration: 1, ease: "easeOut", delay: i * 0.05 }}
                                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Category cards */}
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {CATEGORIES.map((category, i) => (
                        <motion.div
                            key={category.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
                        >
                            <p className="font-mono text-[11px] tracking-widest text-cyan-400/80">
                                {category.label}
                            </p>
                            <h3 className="mt-2 text-lg font-semibold text-white">
                                {category.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-white/55">
                                {category.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {category.items.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <span
                                            key={item.name}
                                            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-white/70"
                                        >
                                            <Icon size={14} className="text-cyan-300/80" />
                                            {item.name}
                                        </span>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}