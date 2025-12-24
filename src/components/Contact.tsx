"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

/* ------------------ Reusable Social Card ------------------ */
function SocialCard({
    icon: Icon,
    label,
    href,
}: {
    icon: any;
    label: string;
    href: string;
}) {
    return (
        <Link href={href} target="_blank" className="group">
            <div className="flex flex-col items-center justify-center gap-4 h-44 bg-white rounded-lg shadow-md hover:shadow-lg transition-all border border-zinc-100 cursor-pointer">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Icon size={28} />
                </div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                    {label}
                </p>
            </div>
        </Link>
    );
}

/* ------------------ Email Flip Card ------------------ */
function EmailFlipCard() {
    return (
        <div className="relative h-44 perspective">
            <motion.div
                className="relative w-full h-full preserve-3d cursor-pointer"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {/* Front */}
                <div className="absolute inset-0 bg-white rounded-lg shadow-md border border-zinc-100
                                flex flex-col items-center justify-center gap-4 backface-hidden">
                    <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
                        <Mail size={28} />
                    </div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                        Email
                    </p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-white rounded-lg shadow-md border border-zinc-100
                                flex flex-col items-center justify-center gap-4 backface-hidden rotate-y-180">
                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white">
                        <Mail size={28} />
                    </div>
                    <p className="text-teal-600 font-medium text-sm">
                        kumaresank2000@gmail.com
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

/* ------------------ Main Contact Section ------------------ */
export default function Contact() {
    return (
        <section id="contact" className="pt-0 pb-24 bg-zinc-50 relative">

            {/* Header */}
            <div className="w-full bg-teal-700 py-6 mb-8 shadow-md">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-wide uppercase"
                    >
                        Get in Touch
                    </motion.h2>
                </div>
            </div>

            {/* Cards */}
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <EmailFlipCard />

                    <SocialCard
                        icon={Github}
                        label="GitHub"
                        href="https://github.com/kumaresankandasamy"
                    />

                    <SocialCard
                        icon={Linkedin}
                        label="LinkedIn"
                        href="https://www.linkedin.com/in/kumaresankandasamy/"
                    />
                </div>

                {/* Description */}
                <p className="mt-12 text-center text-zinc-600 text-lg max-w-3xl mx-auto">
                    I'm always open to discussing new technologies, architectural patterns,
                    and best practices in software engineering.
                </p>
            </div>
        </section>
    );
}