"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="pt-0 pb-24 bg-zinc-50 relative">
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
                        About Me
                    </motion.h2>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-md p-8 md:p-12 overflow-hidden"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 md:order-1"
                        >
                            <div className="space-y-4 text-zinc-600 text-lg leading-relaxed">
                                <p>
                                    I have 6 years of experience in full-stack development using Next.js, React.js, Tailwind CSS, and Python, building maintainable and efficient systems.
                                </p>
                                <p>
                                    I also have extensive experience in cloud architecture on AWS and GCP, designing data pipelines and platforms using Snowflake, BigQuery. Additionally, I develop internal tools and dashboards to optimize complex workflows.
                                </p>
                                <p>
                                    Beyond development, I enjoy mentoring junior developers, improving CI/CD pipelines, and solving challenging problems that make a real impact for users and organizations.
                                </p>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-100/5 order-1 md:order-2"
                        >
                            <div className="aspect-square relative">
                                <img
                                    src="./full-stack.png"
                                    alt="Full-stack development"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}