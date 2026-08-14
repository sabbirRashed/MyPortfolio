"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { Download, Loader2, Check } from "lucide-react";

const ROLES = [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
];

// Small self-contained typewriter — no external dependency needed.
function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 35, pause = 1800 } = {}) {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex];

        if (!deleting && text === current) {
            const timeout = setTimeout(() => setDeleting(true), pause);
            return () => clearTimeout(timeout);
        }

        if (deleting && text === "") {
            const timeout = setTimeout(() => {
                setDeleting(false);
                setWordIndex((i) => (i + 1) % words.length);
            }, 0);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setText((t) =>
                deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
            );
        }, deleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timeout);
    }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

    return text;
}

export default function Hero() {
    // Browsers don't expose a real "download complete" event for a plain
    // <a download> click — the file just starts saving natively with no JS
    // hook. So this timing is a deliberate, honest-feeling simulation: it
    // reassures the user something happened, it doesn't track the real file.
    const [downloadState, setDownloadState] = useState("idle"); // idle | downloading | done
    const typed = useTypewriter(ROLES);

    const handleDownloadClick = () => {
        if (downloadState !== "idle") return; // ignore repeat clicks mid-animation

        setDownloadState("downloading");
        setTimeout(() => setDownloadState("done"), 900);
        setTimeout(() => setDownloadState("idle"), 2800);
    };

    return (
        <section id="home" className="relative overflow-hidden scroll-mt-24 bg-slate-950 text-white">
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
                <div className="flex-1">

                    {/* Status indicator — terminal-style */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/5 px-3 py-1">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="text-xs font-medium tracking-wide text-white/65">
                            AVAILABLE FOR INTERNSHIP
                        </span>
                    </div>

                    <h1 className="mt-6 font-sora text-5xl font-bold leading-none md:text-7xl">
                        <span className="text-white">Sabbir </span>
                        
                        <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                            Rahman
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-slate-400 md:text-xl">
                        {typed}
                        <span className="animate-pulse text-cyan-400">|</span>
                    </p>

                    <p className="mt-8 max-w-xl leading-8 text-white/60">
                        Frontend-focused MERN Stack Developer passionate about building
                        responsive, accessible and high-performance web applications using
                        <span className="text-white"> React</span>,
                        <span className="text-white"> Next.js</span>,
                        <span className="text-white"> Node.js</span> and
                        <span className="text-white"> MongoDB</span>.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-8">

                        <div>
                            <p className="text-lg sm:text-2xl font-bold text-white">
                                20+
                            </p>
                            <p className="text-xs sm:text-sm text-white/45">
                                Projects Built
                            </p>
                        </div>

                        <div>
                            <p className=" text-lg sm:text-2xl font-bold text-white">
                                React
                            </p>
                            <p className="text-xs sm:text-sm text-white/45">
                                Ecosystem
                            </p>
                        </div>

                        <div>
                            <p className="text-lg sm:text-2xl font-bold text-white">
                                Next.js
                            </p>
                            <p className="text-xs sm:text-sm text-white/45">
                                App Router
                            </p>
                        </div>

                    </div>

                    <div className="mt-14 flex flex-wrap items-center gap-2 sm:gap-4 lg:justify-start">

                        <a
                            href="#contact"
                            className="group flex flex-1 sm:max-w-[220px]  justify-center items-center gap-1 md:gap-2 rounded-lg bg-cyan-400 px-3 py-3 md:px-7 md:py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:scale-[1.02] text-sm "
                        >
                            Get In Touch
                            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                        </a>

                        <a
                            href="/sabbir_resume.pdf"
                            download="MD_Sabbir_Rahman_Frontent_Developer_Resume.pdf"
                            onClick={handleDownloadClick}
                            aria-live="polite"
                            className={`hidden sm:flex flex-1 sm:max-w-[220px]  items-center justify-center gap-2 rounded-lg border px-3 py-3 md:px-7 md:py-3.5 font-semibold text-sm  backdrop-blur-xl transition-all duration-300 ${downloadState === "done"
                                ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                                : "border-white/15 text-white/90 hover:border-cyan-400/50 hover:bg-white/5 hover:scale-[1.02]"
                                }`}
                        >
                            {downloadState === "downloading" && (
                                <>
                                    <Loader2 size={17} className="animate-spin" />
                                    Downloading...
                                </>
                            )}
                            {downloadState === "done" && (
                                <>
                                    <Check size={17} />
                                    Downloaded
                                </>
                            )}
                            {downloadState === "idle" && (
                                <>
                                    Download Resume
                                    <Download size={17} />
                                </>
                            )}
                        </a>

                        <a
                            href="/sabbir_resume.pdf"
                            download="MD_Sabbir_Rahman_Frontent_Developer_Resume.pdf"
                            onClick={handleDownloadClick}
                            aria-live="polite"
                            className={`sm:hidden flex flex-1 items-center justify-center gap-2 rounded-lg border px-3 py-3 md:px-7 md:py-3.5 font-semibold text-sm  backdrop-blur-xl transition-all duration-300 ${downloadState === "done"
                                ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                                : "border-white/15 text-white/90 hover:border-cyan-400/50 hover:bg-white/5 hover:scale-[1.02]"
                                }`}
                        >
                            {downloadState === "downloading" && (
                                <>
                                    <Loader2 size={17} className="animate-spin" />
                                    Downloading...
                                </>
                            )}
                            {downloadState === "done" && (
                                <>
                                    <Check size={17} />
                                    Downloaded
                                </>
                            )}
                            {downloadState === "idle" && (
                                <>
                                    Resume
                                    <Download size={17} />
                                </>
                            )}
                        </a>

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
                                    src="/assets/profile_pic.png"
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