"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Mahtab Hasan Arpon
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Full Stack Developer
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Link href="https://github.com/Mahtab-hasan" className="text-white hover:text-gray-300 transition-colors">
              <Github size={24} />
            </Link>
            <Link href="https://linkedin.com" className="text-white hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </Link>
            <Link href="mailto:arpon5566@gmail.com" className="text-white hover:text-gray-300 transition-colors">
              <Mail size={24} />
            </Link>
          </div>
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            View My Work <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}