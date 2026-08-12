"use client";

import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-slate-950 text-white">
            {/* Subtle backdrop grid — quiet texture, not decoration */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "56px 56px",
                }}
            />

            <div className="relative mx-auto flex min-h-screen w-11/12 max-w-7xl flex-col-reverse items-center gap-20 py-24 lg:flex-row">

                {/* Left */}
                <div className="flex-1 text-center lg:text-left">

                    {/* Status indicator — terminal-style, not an emoji badge */}
                    <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-xl">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60 [animation-duration:2.5s]" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        </span>
                        <span className="font-mono text-xs tracking-wide text-white/60">
                            OPEN_TO_INTERNSHIP · FREELANCE
                        </span>
                    </div>

                    <p className="mb-2 font-mono text-sm text-cyan-400/80">
                        Hi, my name is
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
                        Sabbir Rahman
                    </h1>

                    <h2 className="mt-5 font-mono text-lg text-white/60 md:text-xl">
                        <span className="text-white/30">const</span>{" "}
                        <span className="text-cyan-300">role</span>{" "}
                        <span className="text-white/30">=</span>{" "}
                        <span className="text-indigo-300">
                            "
                            <Typewriter
                                words={[
                                    "Frontend Developer",
                                    "React Developer",
                                    "Next.js Developer",
                                    "MERN Stack Developer",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={35}
                                delaySpeed={1800}
                            />
                            "
                        </span>
                    </h2>

                    <p className="mt-8 max-w-xl leading-8 text-white/60">
                        I build fast, responsive and modern web applications using React,
                        Next.js, Tailwind CSS and Node.js with a strong focus on performance,
                        accessibility and delightful user experiences.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">

                        <Link
                            href="#contact"
                            className="group flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition-colors duration-300 hover:bg-cyan-300"
                        >
                            Get In Touch
                            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Link>

                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white/90 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/50 hover:bg-white/5"
                        >
                            Download Resume
                            <FiDownload />
                        </Link>

                    </div>
                </div>

                {/* Right */}
                <div className="relative flex flex-1 items-center justify-center">

                    {/* Single quiet glow, no competing rings */}
                    <div className="absolute h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[110px]" />

                    {/* Image with a single static frame */}
                    <div className="relative h-[280px] w-[280px] md:h-[330px] md:w-[330px]">
                        <div className="absolute inset-0 rounded-full border border-white/10" />
                        <div className="absolute inset-3 overflow-hidden rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
                            <div className="relative h-full w-full overflow-hidden rounded-full">
                                <Image
                                    src="/profile.png"
                                    alt="Sabbir Rahman"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* IDE-style corner brackets — the one signature flourish */}
                        <span className="absolute -top-2 -left-2 h-5 w-5 border-t-2 border-l-2 border-cyan-400/60" />
                        <span className="absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-cyan-400/60" />
                    </div>

                </div>

            </div>
        </section>
    );
}