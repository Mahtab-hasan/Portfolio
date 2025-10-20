
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Send, Phone, MapPin } from "lucide-react";

// Example project data
const projects = [
  {
    title: "Mayra Clothing",
    description: "Developed a modern e-commerce platform...",
    image: "https://i.ibb.co.com/rR01WB9k/Screenshot-2025-04-29-151637.png",
    github: "https://github.com/Mahtab-hasan",
    demo: "https://mayra-clothing.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"]
  },
  {
    title: "Vero Ecommerce",
    description: "A full-featured e-commerce storefront...",
    image: "https://i.ibb.co.com/hxhdwcxL/download.png",
    github: "https://github.com/Mahtab-hasan",
    demo: "https://vero-e-commerce.vercel.app",
    tags: ["Next.js", "CSS", "JavaScript", "MongoDB"]
  },
  {
    title: "Interactive Reflexology Chart",
    description: "A responsive and interactive web application...",
    image: "https://i.ibb.co.com/xKRLVv6V/download-1.png",
    github: "https://github.com/Mahtab-hasan",
    demo: "https://foot-reflexology-chart.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"]
  }
];

export default function HomePage() {

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col items-center justify-center md:h-[80vh] h-[90vh] px-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="block md:hidden relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden "
        >
          <Image
            src="/mahtab.png"
            alt="Profile"
            fill
            className="object-contain bg-black"
          />
        </motion.div>

        <motion.div initial="hidden" animate="visible" className="text-center flex flex-col items-center py-4">
          <h2 className="gradient-title mb-6 py-5">Mahtab Hasan Arpon</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r text-white hover:scale-110 transition-transform duration-400 pb-4"
          >
            Full Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 justify-center mb-4"
          >
            <Link href="https://github.com/Mahtab-hasan" className="text-white hover:text-gray-300"><Github size={24} /></Link>
            <Link href="https://linkedin.com" className="text-white hover:text-gray-300"><Linkedin size={24} /></Link>
            <Link href="mailto:arpon5566@gmail.com" className="text-white hover:text-gray-300"><Mail size={24} /></Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="#projects" className="inline-flex items-center gap-2 bg-[#ffffff] text-black px-6 py-3 rounded-full hover:bg-[#c9e1fc] transition-colors">
              View My Work <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== About Section ===== */}
      <section id="about" className="min-h-screen px-4 py-10 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold text-white mb-8 text-center">About Me</h1>
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden hidden md:block"
            >
              <Image
                src="/mahtab.png"
                alt="Profile"
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>


            <div className="space-y-4">
              <p className="text-gray-300">
                I am Mahtab Hasan Arpon, a dedicated Full-Stack Developer with experience in modern web technologies. My technical expertise spans multiple programming languages and frameworks, including Python, C, C++, JavaScript, React, and Next.js. I am committed to developing high-performance, scalable, and user-friendly web applications.
              </p>
              <div className="grid grid-cols-1 gap-6 py-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-[#d2dffd]/40 transition">
                  <h3 className="text-white font-medium mb-2">Languages</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>Python</li>
                    <li>JavaScript / TypeScript</li>
                    <li>C / C++</li>
                    <li>HTML / CSS</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-[#d2dffd]/40 transition">
                  <h3 className="text-white font-medium mb-2">Frameworks / Libraries</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>React / Next.js</li>
                    <li>Django</li>
                    <li>Node.js / Express</li>
                    <li>Tailwind CSS / Bootstrap</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-[#d2dffd]/40 transition">
                  <h3 className="text-white font-medium mb-2">Tech Stack</h3>
                  <ul className="text-gray-400 space-y-1">
                    <li>Python → Django</li>
                    <li>JavaScript / TypeScript → Next.js / Node.js</li>
                    <li>HTML / CSS → Tailwind CSS / Bootstrap</li>
                    <li>MongoDB / MySQL / SQLite</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== Projects Section ===== */}
      <section id="projects" className=" px-4 pt-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold text-white mb-8 text-center">My Projects</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90" />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded">{tag}</span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center gap-4 py-2">
                    <Link href={project.github} className="text-white hover:text-gray-300 flex items-center gap-1"><Github size={20} />Github</Link>
                    <Link href={project.demo} className="text-white hover:text-gray-300 flex items-center gap-1"><ExternalLink size={20} />Website</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className=" px-4 py-24  max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Me</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <Mail size={24} />
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p>arpon5566@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Phone size={24} />
                <div>
                  <h3 className="font-medium text-white">Phone</h3>
                  <p>+8801711192205</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin size={24} />
                <div>
                  <h3 className="font-medium text-white">Location</h3>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-4" action="https://formspree.io/f/xyzwkewl" method="POST">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"></textarea>
              </div>
              <button type="submit" className="flex items-center gap-2 bg-[#dae9fa] text-black px-6 py-3 rounded-full hover:bg-[#c9e1fc] transition-colors">
                Send Message <Send size={20} />
              </button>
            </motion.form>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
