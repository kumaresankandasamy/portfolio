"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = ["Senior Software Engineer", "Full Stack Developer"];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const speed = isDeleting ? 100 : 150;

        const timer = setTimeout(() => {
            if (!isDeleting && displayText === currentRole) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                setDisplayText(
                    currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1))
                );
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section
            id="home"
            className="flex items-start justify-center
                px-4 md:px-20
                pt-24 md:pt-10 pb-16
                relative overflow-hidden
                bg-gradient-to-b from-teal-700 to-teal-800"
        >
            <div className="w-full max-w-4xl z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-thin tracking-tight leading-tight text-white">
                        Hi, I'm <br />
                        <span className="font-bold">Kumaresan Kandasamy</span>
                        <span className="text-primary">.</span>
                    </h1>

                    <div className="text-xl sm:text-2xl md:text-4xl font-light text-white/80 min-h-[40px] flex flex-wrap items-center gap-2">
                        <span>A</span>
                        <span className="font-semibold text-white border-b-2 border-primary">
                            {displayText}
                        </span>
                        <span className="animate-pulse">|</span>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-lg leading-relaxed mt-4 sm:mt-6">
                        I build <strong>scalable web applications</strong> and <strong>cloud-based data solutions</strong>, turning complex challenges into efficient, real-world results.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-8">
                        <Link
                            href="#projects"
                            className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-zinc-200 transition-colors shadow-lg"
                        >
                            Read More
                        </Link>

                        <Link
                            href="#contact"
                            className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}