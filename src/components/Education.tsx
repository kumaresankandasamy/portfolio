"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="pt-0 pb-24 bg-zinc-50 relative">
            <div className="w-full bg-teal-700 py-6 mb-8 shadow-md">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-wide uppercase"
                    >
                        Education
                    </motion.h2>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6">

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all h-full"
                    >
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-white border border-zinc-100 rounded-xl flex items-center justify-center p-2 flex-shrink-0 shadow-sm">
                                <img
                                    src="/gce.png"
                                    alt="GCE"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-2">B.E, CSE</h3>
                                <p className="text-lg font-semibold text-primary mb-1">GCE, Dharmapuri(Anna University)</p>
                                <p className="text-zinc-500 mb-2">2014 - 2018</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all h-full"
                    >
                        <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-white border border-zinc-100 rounded-xl flex items-center justify-center p-2 flex-shrink-0 shadow-sm">
                                <img
                                    src="/great-learning.png"
                                    alt="Great Learning"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-2">Full Stack Development Program</h3>
                                <p className="text-lg font-semibold text-primary mb-1">Great Learning</p>
                                <p className="text-zinc-500 mb-4">2019 - November 2019</p>
                                <a
                                    href="https://eportfolio.mygreatlearning.com/kumaresan-kandasamy"
                                    target="_blank"
                                    className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 hover:underline"
                                >
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
