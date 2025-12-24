import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Portfolio | Creative Developer",
  description: "A selection of my work and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} antialiased bg-background text-foreground flex`}
      >
        <Sidebar />
        <main className="flex-1 md:ml-72 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
