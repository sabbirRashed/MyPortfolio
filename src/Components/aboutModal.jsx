"use client";

import { Button, Modal } from "@heroui/react";
import { ChevronRight, FileText, Terminal, GraduationCap, Award, Users, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import { SiGithub, } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import Link from "next/link";

const EDUCATION = [
    { period: "2021 — Present", title: "BSc in Mathematics", place: "National University, Bangladesh" },
    { period: "2021", title: "Higher Secondary Certificate (HSC)", place: "GPA 4.75" },
    { period: "2019", title: "Secondary School Certificate (SSC)", place: "GPA 4.72" },
];


const LANGUAGES = [
    { name: "Bangla", level: "Native", percent: 100 },
    { name: "English", level: "Medium", percent: 70 },
    { name: "Hindi", level: "Basic", percent: 40 },
];

const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
    }),
};

export function AboutModal() {
    return (
        <Modal>
            <Button
                // onClick={onOpen}
                className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-xs tracking-wide text-white/70 transition-colors duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
            >
                <FileText size={14} />
                LOAD FULL PROFILE
                <ChevronRight size={14} />
            </Button>
            <Modal.Backdrop className={"bg-slate-950/60 backdrop-blur-md"}>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-3xl bg-white/10 backdrop-blur-2xl border border-slate-700 ">
                        <Modal.CloseTrigger />
                        <Modal.Body >
                            <div className="space-y-8 text-white">

                                {/* Terminal-style intro */}
                                <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
                                    <p className="flex items-center gap-2 font-mono text-xs text-white/40">
                                        <Terminal size={13} />
                                        whoami
                                    </p>
                                    <p className="mt-2 leading-7 text-white/70">
                                        Frontend Developer (MERN Stack) with practical experience building
                                        20+ web applications using React.js, Next.js, Node.js, Express.js
                                        and MongoDB. Strong foundation in responsive UI development, REST
                                        APIs, authentication, and CRUD operations — seeking an opportunity
                                        to build scalable applications and grow as a software engineer.
                                    </p>
                                </motion.div>

                                {/* Education — vertical timeline */}
                                <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1}>
                                    <p className="mb-4 flex items-center gap-2 font-mono text-[11px] tracking-widest text-cyan-400/80">
                                        <GraduationCap size={13} />
                                        EDUCATION
                                    </p>
                                    <div className="relative space-y-6 border-l border-white/10 pl-5">
                                        {EDUCATION.map((item) => (
                                            <div key={item.title} className="relative">
                                                <span className="absolute -left-[25px] top-1 h-2 w-2 rounded-full border-2 border-cyan-400 bg-slate-900" />
                                                <p className="font-mono text-[11px] text-white/40">{item.period}</p>
                                                <p className="mt-0.5 font-medium text-white">{item.title}</p>
                                                <p className="text-sm text-white/50">{item.place}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Certifications + Leadership */}
                                <motion.div
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="show"
                                    custom={2}
                                    className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-2"
                                >
                                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <p className="mb-2 flex items-center gap-2 font-mono text-[11px] tracking-widest text-cyan-400/80">
                                            <Award size={13} />
                                            CERTIFICATION
                                        </p>
                                        <p className="text-sm text-white/80">Web Development</p>
                                        <p className="text-sm text-white/45">Programming Hero — In Progress</p>
                                    </div>

                                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <p className="mb-2 flex items-center gap-2 font-mono text-[11px] tracking-widest text-cyan-400/80">
                                            <Users size={13} />
                                            LEADERSHIP
                                        </p>
                                        <p className="text-sm text-white/80">Bangladesh Scouts</p>
                                        <p className="text-sm text-white/45">2019 — 2021</p>
                                    </div>
                                </motion.div>

                                {/* Languages — proficiency bars, echoing the Skills section */}
                                <motion.div
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="show"
                                    custom={3}
                                    className="border-t border-white/10 pt-6"
                                >
                                    <p className="mb-4 font-mono text-[11px] tracking-widest text-cyan-400/80">
                                        LANGUAGES
                                    </p>
                                    <div className="space-y-4">
                                        {LANGUAGES.map((lang) => (
                                            <div key={lang.name}>
                                                <div className="mb-1.5 flex items-center justify-between text-sm">
                                                    <span className="text-white/80">{lang.name}</span>
                                                    <span className="font-mono text-xs text-white/40">{lang.level}</span>
                                                </div>
                                                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${lang.percent}%` }}
                                                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                                                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Links */}
                                <motion.div
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="show"
                                    custom={4}
                                    className="flex flex-wrap gap-3 border-t border-white/10 pt-6"
                                >
                                    <a
                                        href="https://github.com/sabbirRashed"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                                    >
                                        <SiGithub size={16} />
                                        GitHub
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/sabbirrahman"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                                    >
                                        <SlSocialLinkedin size={16} />
                                        LinkedIn
                                    </a>
                                    <a
                                        href="mailto:srsabbirrahman12@gmail.com"
                                        target="_self"
                                        className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                                    >
                                        <Mail size={16} />
                                        Email
                                    </a>
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-auto flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 transition-colors hover:bg-cyan-300"
                                    >
                                        Resume
                                        <Download size={16} />
                                    </a>
                                </motion.div>
                            </div>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}