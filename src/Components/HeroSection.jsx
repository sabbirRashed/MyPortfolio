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

                    <p className="mb-2 text-lg text-cyan-400/80">
                        Hi, I am
                    </p>

                    <h1 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
                        Sabbir Rahman
                    </h1>

                    <h2 className="mt-5 font-mono text-lg text-white/60 md:text-xl">
                        <span className="text-white/30">const</span>{" "}
                        <span className="text-cyan-300">role</span>{" "}
                        <span className="text-white/30">=</span>{" "}
                        <span className="text-indigo-300">
                            "{typed}
                            <span className="animate-pulse">_</span>"
                        </span>
                    </h2>

                    <p className="mt-8 max-w-2xl leading-8 text-white/60">
                        I'm a <span className="font-semibold text-cyan-400">Frontend-focused MERN Stack Developer</span> who enjoys building{" "}
                        <span className="font-semibold text-white">fast</span>,{" "}
                        <span className="font-semibold text-white">scalable</span>, and{" "}
                        <span className="font-semibold text-white">user-centric</span> web applications.
                        With expertise in{" "}
                        <span className="font-semibold text-cyan-400">
                            React, Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB
                        </span>
                        , I create modern digital experiences that combine{" "}
                        <span className="font-semibold text-white">clean code</span>,{" "}
                        <span className="font-semibold text-white">responsive design</span>,{" "}
                        <span className="font-semibold text-white">accessibility</span>, and{" "}
                        <span className="font-semibold text-white">performance</span> to deliver
                        real value.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">

                        <a
                            href="#contact"
                            className="group flex items-center gap-2 rounded-lg bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:scale-[1.02]"
                        >
                            Get In Touch
                            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                        </a>

                        <a
                            href="/sabbir_resume.pdf"
                            download="Sabbir_Rahman_Resume.pdf"
                            onClick={handleDownloadClick}
                            aria-live="polite"
                            className={`flex min-w-[200px] items-center justify-center gap-2 rounded-lg border px-7 py-3.5 font-semibold backdrop-blur-xl transition-all duration-300 ${downloadState === "done"
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