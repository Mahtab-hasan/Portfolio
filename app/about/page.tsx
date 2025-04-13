"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen pt-24 px-4 bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-300">
              I am Mahtab Hasan Arpon, a dedicated Full-Stack Developer with experience in modern web technologies. My technical expertise spans multiple programming languages and frameworks, including Python, C, C++, JavaScript, React, and Next.js. I am committed to developing high-performance, scalable, and user-friendly web applications.
            </p>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-white font-medium">Frontend</h3>
                  <ul className="text-gray-400">
                    <li>React/Next.js</li>
                    <li>JavaScript/TypeScript</li>
                    <li>HTML/CSS</li>
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-medium">Backend</h3>
                  <ul className="text-gray-400">
                    <li>Python</li>
                    <li>Django</li>
                    <li>Node.js</li>
                    <li>C/C++</li>
                    <li>SQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop"
              alt="Profile"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}