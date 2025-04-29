"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Mayra Clothing",
    description: "A modern e-commerce platform for premium t-shirts, built with Next.js, featuring product catalog, shopping cart, and secure checkout",
    image: "https://i.ibb.co.com/rR01WB9k/Screenshot-2025-04-29-151637.png",
    github: "https://github.com/Mahtab-hasan",
    demo: "https://mayra-clothing.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"]
  },
  {
    title: "Project 2",
    description: "Real-time chat application using WebSocket",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/Mahtab-hasan",
    demo: "https://mayra-clothing.vercel.app",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"]
  },
  {
    title: "Project 3",
    description: "E-commerce platform with payment integration",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/Mahtab-hasan",
    demo: "https://mayra-clothing.vercel.app",
    tags: ["Next.js", "Stripe", "Prisma", "TypeScript"]
  }
];

export default function Projects() {
  return (
    <main className="min-h-screen pt-24 px-4 bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href={project.github} className="text-white hover:text-gray-300 transition-colors">
                    <Github size={20} />
                  </Link>
                  <Link href={project.demo} className="text-white hover:text-gray-300 transition-colors">
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}