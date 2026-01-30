"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[#030014] opacity-50" />

      {/* Moving Purple Blob */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-purple-500/30 rounded-full blur-[120px] mix-blend-screen"
      />

      {/* Moving Cyan Blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen"
      />
    </div>
  );
}
