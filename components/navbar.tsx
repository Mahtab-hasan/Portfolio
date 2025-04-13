"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full z-50 top-0 px-4 py-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">MHA</Link>
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                href={item.path}
                className={`text-sm ${
                  pathname === item.path 
                    ? "text-white" 
                    : "text-gray-400 hover:text-white"
                } transition-colors`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}