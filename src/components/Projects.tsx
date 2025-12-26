"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Focus Platform (Career Explorer, Talent & Assist)",
        desc: "Worked on a large-scale labor exchange platform connecting job seekers, employers, and administrators. Built and enhanced job search, resume matching, job posting workflows, approval queues, and admin dashboards.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
        link: "#",
        github: "#",
    },
    {
        title: "Raptor Application Suite",
        desc: "Developed and maintained internal data tooling for Internal teams, including CIP code mapping, workbook generation, automated link checking, and data validation utilities.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        link: "#",
        github: "#",
    },
    {
        title: "SkillFit Applications",
        desc: "Contributed to SkillFit jobseeker and admin applications, enabling skill tracking, jobseeker progress monitoring, and API-driven workflows for Lightcast customers.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
        link: "#",
        github: "#",
    },
    {
        title: "Stratigens",
        desc: "Worked on strategic workforce intelligence features combining labor market, economic, and geographic data to support data-driven talent and location decisions.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
        link: "#",
        github: "#",
    },
    {
        title: "Career Coach",
        desc: "Built and enhanced career guidance features including interest assessments for undecided learners, skills inventory mapping, guided career exploration, education recommendations, and localized job postings with vetted industry partners.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
        link: "#",
        github: "#",
    },
    {
        title: "Cloud Marketplace Data Updates",
        desc: "Worked on data publishing and update workflows for cloud marketplaces, ensuring accurate dataset availability across Snowflake Marketplace, Google Cloud and Analytics Hub.",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80",
        link: "#",
        github: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="pt-0 pb-24 bg-zinc-50 relative">

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
                        Projects
                    </motion.h2>
                </div>
            </div>

            {/* Project Cards */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 w-full"
                        >
                            {/* Image */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-teal-700/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <Link
                                        href={project.link}
                                        className="p-3 bg-white text-teal-700 rounded-full hover:scale-110 transition-transform shadow-lg"
                                    >
                                        <ExternalLink size={20} />
                                    </Link>
                                    <Link
                                        href={project.github}
                                        className="p-3 bg-white text-teal-700 rounded-full hover:scale-110 transition-transform shadow-lg"
                                    >
                                        <Github size={20} />
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 sm:p-6">
                                <h3 className="text-xl font-bold mb-2 text-zinc-800">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}