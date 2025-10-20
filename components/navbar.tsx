// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const navItems = [
//   { path: "#hero", label: "Home" },
//   { path: "#about", label: "About" },
//   { path: "#projects", label: "Projects" },
//   { path: "#contact", label: "Contact" },
// ];

// export function Navbar() {
//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="fixed w-full z-50 top-0 px-4 py-4 bg-black/80 backdrop-blur-sm"
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <Link href="#hero" className="text-[#c2d8f5] text-xl font-bold">MHA</Link>
//         <ul className="flex gap-8 ">
//           {navItems.map((item) => (
//             <li key={item.path}>
//               <Link 
//                 href={item.path} 
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.nav>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "#hero", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#projects", label: "Projects" },
  { path: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full z-50 top-0 px-4 py-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="#hero" className="text-[#c2d8f5] text-xl font-bold">
          MHA
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-t border-gray-800"
          >
            <ul className="flex flex-col items-center py-6 space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)} // close menu on click
                    className="text-gray-300 hover:text-white text-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
