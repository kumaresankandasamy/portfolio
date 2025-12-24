"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Senior Software Engineer",
        company: "Lightcast",
        companyColor: "text-teal-600",
        roleColor: "text-orange-700",
        period: "Apr 2025 - Present (5+ Years)",
        location: "Dharmapuri, TN",
        logo: "/lightcast.png",
        desc: [
            "Designed, developed, and maintained modern web applications and internal dashboards (Stratigens, Career Coach) using Next.js, React.js, and Tailwind CSS.",
            "Led the development of cloud-based data sharing pipelines across Snowflake, Databricks and Google Cloud Platform (BigQuery, Analytics Hub).",
            "Built and enhanced platforms including Focus (Career Explorer, Talent, Assist), Raptor suite (CIP mapping, workbook generation, approval workflows), and SkillFit applications.",
            "Developed backend services with Python (Flask) and automation scripts for data processing and analysis.",
            "Automated ETL workflows to transfer, validate, and normalize data across multiple sources, improving data quality and operational efficiency.",
            "Mentored junior developers, optimized CI/CD pipelines, and implemented best practices for code quality and maintainability.",
            "Collaborated with cross-functional teams to design scalable, secure, and data-driven solutions aligned with business objectives."
        ],
        tools: "Next.js, React, Tailwind CSS, Python (Flask), C#/.NET, AWS, Snowflake, GCP, Node.js, MongoDB, Redshift, Neo4j, DynamoDB"
    },
    {
        role: "Software Engineer",
        company: "Lightcast",
        companyColor: "text-teal-600",
        roleColor: "text-orange-700",
        period: "Mar 2020 - Mar 2025",
        location: "Dharmapuri, TN",
        logo: "/lightcast.png",
        desc: [
            "Developed and maintained full-stack web applications using React.js, Next.js, Tailwind CSS, and Vercel.",
            "Built backend services with Python (Flask) and maintained C#/.NET applications hosted on IIS.",
            "Automated ETL workflows transferring data between Snowflake and Google BigQuery.",
            "Developed internal administrative tools for data normalization, role management, and operational support (Raptor suite, Alumni Pathway Tool).",
            "Contributed to job matching and career pathing platforms such as Focus Career, Focus Talent, Focus Assist, and SkillFit."
        ],
        tools: "React, Next.js, Tailwind CSS, Python (Flask), C#/.NET, AWS, SQL, Snowflake, BigQuery"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="pt-0 pb-24 bg-zinc-50 relative">
            <div className="w-full bg-teal-700 py-6 mb-8 shadow-md">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-wide uppercase"
                    >
                        Experience
                    </motion.h2>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6">
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                        >
                            <div className="p-8">
                                <div className="flex flex-col md:flex-row gap-6 mb-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-24 h-24 rounded-full bg-white border border-zinc-100 flex items-center justify-center p-2 shadow-sm">
                                            <img
                                                src={exp.logo}
                                                alt={exp.company}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                            <h3 className={`text-2xl font-bold ${exp.companyColor} uppercase tracking-wide`}>{exp.company}</h3>
                                            <span className={`text-xl font-medium ${exp.roleColor}`}>{exp.role}</span>
                                        </div>

                                        <div className="mt-6 space-y-3">
                                            {exp.desc.map((item, i) => (
                                                <p key={i} className="text-zinc-600 leading-relaxed text-[15px] flex gap-3">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
                                                    {item}
                                                </p>
                                            ))}
                                        </div>

                                        <div className="mt-6 pt-6 border-t border-zinc-100">
                                            <p className="text-zinc-800 font-medium">
                                                Tools: {exp.tools}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-zinc-50 px-8 py-3 border-t border-zinc-100 text-sm text-zinc-500 font-medium tracking-wide">
                                {exp.period} | {exp.location}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}