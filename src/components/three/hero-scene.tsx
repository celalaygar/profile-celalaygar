"use client";

import { motion } from "framer-motion";

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-950">

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-transparent to-purple-900/30" />

      {/* Glow blobs */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-violet-600/20 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-violet-400 rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Grid overlay (çok hoş görünür) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
}