import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { getTechIcon } from "@/data/techIcons";

export default function ProjectCard({ project }) {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/30 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10">

            {/* Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                {project.featured && (
                    <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-slate-950/70 px-3 py-1 text-[11px] font-medium text-cyan-300 backdrop-blur-md">
                        <Star size={11} className="fill-cyan-300" />
                        Featured
                    </span>
                )}

                <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 font-mono text-[11px] text-white/70 backdrop-blur-md">
                    {project.category}
                </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-1 text-sm text-cyan-400/80">{project.tagline}</p>
                <p className="mt-3 text-sm leading-6 text-white/55">
                    {project.description}
                </p>

                {/* Tech stack — small square chips, each icon in its real brand color.
                    Custom tooltip (not the native title attribute, which has a
                    slow, browser-controlled delay) shows the name on hover. */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => {
                        const { icon: Icon, color } = getTechIcon(tech);
                        return (
                            <div
                                key={tech}
                                aria-label={tech}
                                className="group/chip relative flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 transition-colors duration-300 hover:border-white/25"
                            >
                                <Icon size={14} style={{ color }} />

                                <span className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 scale-95 whitespace-nowrap rounded-md border border-white/10 bg-slate-950 px-2 py-1 text-[10px] text-white opacity-0 transition-all duration-150 group-hover/chip:scale-100 group-hover/chip:opacity-100">
                                    {tech}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Links — pinned to the bottom so cards align across a row */}
                <div className="mt-6 mt-auto flex items-center gap-3 border-t border-white/10 pt-5">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors duration-300 hover:bg-cyan-300"
                    >
                        Live Demo
                        <ArrowUpRight size={15} />
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source on GitHub`}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
                    >
                        <SiGithub size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
}