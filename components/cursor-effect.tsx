"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovering ? 1.5 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "tween",
        duration: 0,
        ease: "linear"
      }}
    >
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="absolute -inset-2 rounded-full border-2 border-white/20"
          animate={{
            scale: isHovering ? 1.2 : 1,
            opacity: isHovering ? 0.8 : 0.5,
          }}
          transition={{
            type: "tween",
            duration: 0,
            ease: "linear"
          }}
        />
        
        {/* Inner dot */}
        <motion.div
          className="w-2 h-2 rounded-full bg-white"
          animate={{
            scale: isHovering ? 0.8 : 1,
          }}
          transition={{
            type: "tween",
            duration: 0,
            ease: "linear"
          }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/10 blur-sm"
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.5 : 0.2,
          }}
          transition={{
            type: "tween",
            duration: 0,
            ease: "linear"
          }}
        />
      </div>
    </motion.div>
  );
}; 