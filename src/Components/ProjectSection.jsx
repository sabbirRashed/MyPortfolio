"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./cards/ProjectCard";


// Parent orchestrates the stagger — children don't need their own delay math.
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden scroll-mt-24 bg-slate-950 text-white">
            {/* Ambient glow, consistent with the rest of the page */}
            <div className="pointer-events-none absolute left-1/3 top-0 h-[420px] w-[420px] -translate-y-1/3 rounded-full bg-cyan-500/10 blur-[140px]" />
            <div className="pointer-events-none absolute bottom-0 right-1/3 h-[380px] w-[380px] translate-y-1/3 rounded-full bg-indigo-500/10 blur-[140px]" />

            <div className="relative mx-auto w-11/12 max-w-7xl py-28">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-2xl text-left"
                >
                    <p className="mb-4 font-mono text-sm text-cyan-400/80">// projects</p>
                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Featured Projects
                    </h2>
                    <p className="mt-5 text-base leading-8 text-white/60 md:text-lg">
                        A selection of full-stack platforms I've designed and built end
                        to end — from database schema to the pixels on screen.
                    </p>
                </motion.div>

                {/* Grid — stagger orchestrated by the parent, so cards reveal in sequence */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="h-full"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}