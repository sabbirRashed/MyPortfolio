"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">


      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto flex w-11/12 max-w-7xl flex-col items-center py-20 text-center">
        <h2 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-4xl font-bold font-sora text-transparent">
          Let's Build Something Amazing
        </h2>

        <p className="mt-5 max-w-2xl text-white/70">
          Building modern, responsive and scalable web applications with
          beautiful user experiences.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Link
            href="https://github.com/sabbirRashed"
            target="_blank"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500"
          >
            <FaGithub className="text-xl transition-transform group-hover:rotate-12" />
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/sabbirrahman"
            target="_blank"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500"
          >
            <FaLinkedin className="text-xl transition-transform group-hover:scale-110" />
            LinkedIn
          </Link>
        </div>

        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <p className="flex flex-wrap items-center justify-center gap-2 text-center text-sm text-white/60">
          <span>© {new Date().getFullYear()} Sabbir Rahman • Crafted with</span>
          <FaHeart className="shrink-0 text-red-400" />
          <span>using Next.js & Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}