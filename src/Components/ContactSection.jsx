"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Copy,
    Check,
    Send,
    Loader2,
    CircleAlert,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@heroui/react";


const CONTACT_INFO = {
    email: "srsabbirrahman12@gmail.com",
    phone: "+880 1308 962 721",
    phoneHref: "tel:+8801308962721",
    location: "Bangladesh · Remote-ready",
};

const SOCIALS = [
    { name: "GitHub", href: "https://github.com/sabbirRashed", icon: FaGithub },
    { name: "LinkedIn", href: "https://linkedin.com/in/sabbirrahman", icon: FaLinkedin },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const [copied, setCopied] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;

        setStatus("sending");
        try {
            // TODO: point this at your real endpoint — an API route (e.g. /api/contact)
            // that emails you, or a service like Formspree / EmailJS / Resend.
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Request failed");

            setStatus("sent");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            setStatus("error");
        }
    };

    const handleCopyEmail = async () => {
        await navigator.clipboard.writeText(CONTACT_INFO.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="relative overflow-hidden scroll-mt-24 bg-slate-800 text-white">
            {/* Ambient glow, consistent with Skills */}
            <div className="pointer-events-none absolute right-1/4 top-0 h-[400px] w-[400px] -translate-y-1/3 rounded-full bg-cyan-500/10 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-0 left-1/4 h-[360px] w-[360px] translate-y-1/3 rounded-full bg-indigo-500/10 blur-[130px]" />

            <div className="relative mx-auto w-11/12 max-w-7xl py-28">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-2xl text-left"
                >
                    <p className="mb-4 font-mono text-sm text-cyan-400/80">// contact</p>
                    <h2 className="text-4xl font-bold font-sora tracking-tight text-white md:text-5xl">
                        Get In Touch
                    </h2>
                    <p className="mt-5 text-base leading-8 text-white/60 md:text-lg">
                        Open to internship and freelance opportunities. Have a project in
                        mind or just want to talk shop — send a message and I'll get back
                        to you within a day or two.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[380px_1fr]">

                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
                    >
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium tracking-wide text-emerald-300">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                AVAILABLE FOR WORK
                            </span>

                            <div className="mt-7 space-y-5">
                                <button
                                    onClick={handleCopyEmail}
                                    className="group flex w-full items-center justify-between gap-3 text-left"
                                >
                                    <span className="flex items-center gap-3 text-sm text-white/70">
                                        <Mail size={16} className="text-cyan-300" />
                                        {CONTACT_INFO.email}
                                    </span>
                                    <span className="text-white/40 transition-colors group-hover:text-cyan-300">
                                        {copied ? <Check size={15} /> : <Copy size={15} />}
                                    </span>
                                </button>

                                <a
                                    href={CONTACT_INFO.phoneHref}
                                    className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-cyan-300"
                                >
                                    <Phone size={16} className="text-cyan-300" />
                                    {CONTACT_INFO.phone}
                                </a>

                                <span className="flex items-center gap-3 text-sm text-white/70">
                                    <MapPin size={16} className="text-cyan-300" />
                                    {CONTACT_INFO.location}
                                </span>
                            </div>
                        </div>

                        <div className="mt-10 flex gap-3 border-t border-white/10 pt-6">
                            {SOCIALS.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                                    >
                                        <Icon size={16} />
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.1, }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl md:p-8"
                    >
                        {status === "sent" ? (
                            <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10">
                                    <Check size={22} className="text-emerald-400" />
                                </span>
                                <p className="mt-4 text-lg font-semibold text-white">
                                    Message sent
                                </p>
                                <p className="mt-1 text-sm text-white/50">
                                    Thanks for reaching out — I'll reply soon.
                                </p>
                                <Button
                                    variant="light"
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 font-mono text-xs text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
                                >
                                    Send another message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block font-mono text-xs tracking-wide text-white/50">
                                            NAME
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-cyan-400/50"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-2 block font-mono text-xs tracking-wide text-white/50">
                                            EMAIL
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@email.com"
                                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-cyan-400/50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block font-mono text-xs tracking-wide text-white/50">
                                        MESSAGE
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell me a bit about the project or opportunity..."
                                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-cyan-400/50"
                                    />
                                </div>

                                {status === "error" && (
                                    <p className="flex items-center gap-2 text-sm text-red-400">
                                        <CircleAlert size={15} />
                                        Something went wrong — please try again, or email me directly.
                                    </p>
                                )}

                                <Button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-5 font-semibold text-slate-950 transition-colors duration-300 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                                >
                                    {status === "sending" ? (
                                        <>
                                            <Loader2 size={17} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={16} />
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}