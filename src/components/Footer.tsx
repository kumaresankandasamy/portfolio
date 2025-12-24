"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-6 bg-black/20 text-white/70 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm">
                    © {new Date().getFullYear()} KK Portfolio. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <Link href="https://github.com/kumaresankandasamy" target="_blank" className="text-sm hover:text-white transition-colors">
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/kumaresankandasamy/" target="_blank" className="text-sm hover:text-white transition-colors">
                        LinkedIn
                    </Link>
                </div>
            </div>
        </footer>
    );
}
