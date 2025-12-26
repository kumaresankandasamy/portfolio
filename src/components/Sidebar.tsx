"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { User, Activity, FolderOpen, BarChart2, GraduationCap, Mail, Github, Linkedin, Menu } from "lucide-react";

const navItems = [
    { name: "About", href: "#about", icon: <User size={20} /> },
    { name: "Experience", href: "#experience", icon: <Activity size={20} /> },
    { name: "Projects", href: "#projects", icon: <FolderOpen size={20} /> },
    { name: "Skills", href: "#skills", icon: <BarChart2 size={20} /> },
    { name: "Education", href: "#education", icon: <GraduationCap size={20} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showToggle, setShowToggle] = useState(true); // Default to true for initial visibility
    const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetHideTimer = (duration = 5000) => {
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
        }
        hideTimeoutRef.current = setTimeout(() => {
            if (window.scrollY > 50) {
                setShowToggle(false);
            }
        }, duration);
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowToggle(true);
            resetHideTimer();
        };

        window.addEventListener('scroll', handleScroll);
        // Initial timer
        resetHideTimer();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
            }
        };
    }, []);

    // Effect to show toggle after navigation (when menu closes)
    useEffect(() => {
        if (!isOpen) {
            setShowToggle(true);
            resetHideTimer(5000);
        }
    }, [isOpen]);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setShowToggle(true)}
                onMouseLeave={() => resetHideTimer(2000)}
                className={`fixed top-4 left-4 z-[60] p-2 bg-white rounded-lg shadow-lg md:hidden text-zinc-600 transition-all duration-300 ${showToggle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
            >
                <Menu size={24} />
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside className={`fixed top-0 left-0 h-screen bg-sidebar-bg text-sidebar-fg flex flex-col items-center py-8 shadow-xl z-50 overflow-hidden transition-all duration-300 
                ${isOpen ? "w-72 translate-x-0" : "w-0 -translate-x-full"} md:w-72 md:translate-x-0`}
            >
                {/* Profile Image */}
                <div className="w-40 h-40 rounded-full border-4 border-primary/20 p-1 mb-8 hover:scale-105 transition-transform cursor-pointer">
                    <Link href="#home" onClick={() => setIsOpen(false)}>
                        <div className="w-full h-full rounded-full bg-zinc-200 overflow-hidden relative">
                            <img
                                src="/profile.png"
                                alt="Kumaresan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 w-full px-6 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-zinc-100 transition-colors text-sm font-medium tracking-wide uppercase hover:text-primary"
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Social Links */}
                <div className="mt-auto flex gap-4 text-gray-400">
                    <Link href="https://github.com/kumaresankandasamy" target="_blank" className="hover:text-primary transition-colors"><Github size={24} /></Link>
                    <Link href="https://www.linkedin.com/in/kumaresankandasamy/" target="_blank" className="hover:text-primary transition-colors"><Linkedin size={24} /></Link>
                </div>
            </aside>
        </>
    );
}
