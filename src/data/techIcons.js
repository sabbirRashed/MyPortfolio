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
import {
    Sparkles,
    Palette,
    ShieldCheck,
    Paintbrush,
    Code2,
} from "lucide-react";

// Keys are normalized: lowercase, letters only (no spaces, dots, or numbers).
// "Next.js 16" -> "nextjs", "Hero UI" -> "heroui", "Better Auth" -> "betterauth"
// Colors are each tech's real brand color, used to render the icon in its
// actual identity instead of a flat single tint.
const TECH_ICON_MAP = {
    javascript: { icon: SiJavascript, color: "#F7DF1E" },
    html5: { icon: SiHtml5, color: "#E34F26" },
    css3: { icon: Paintbrush, color: "#38BDF8" },
    react: { icon: SiReact, color: "#61DAFB" },
    nextjs: { icon: SiNextdotjs, color: "#FFFFFF" },
    tailwindcss: { icon: SiTailwindcss, color: "#38BDF8" },
    framermotion: { icon: SiFramer, color: "#0055FF" },
    nodejs: { icon: SiNodedotjs, color: "#339933" },
    expressjs: { icon: SiExpress, color: "#FFFFFF" },
    mongodb: { icon: SiMongodb, color: "#47A248" },
    jwt: { icon: SiJsonwebtokens, color: "#FB015B" },
    git: { icon: SiGit, color: "#F05032" },
    github: { icon: SiGithub, color: "#FFFFFF" },
    vercel: { icon: SiVercel, color: "#FFFFFF" },
    netlify: { icon: SiNetlify, color: "#00C7B7" },
    heroui: { icon: Sparkles, color: "#22D3EE" },
    daisyui: { icon: Palette, color: "#8B5CF6" },
    betterauth: { icon: ShieldCheck, color: "#34D399" },
};

const FALLBACK = { icon: Code2, color: "#94A3B8" };

export function getTechIcon(name) {
    const key = name.toLowerCase().replace(/[^a-z]/g, "");
    return TECH_ICON_MAP[key] || FALLBACK;
}