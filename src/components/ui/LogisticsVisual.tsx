"use client";

import { motion } from "framer-motion";

export default function LogisticsVisual({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center w-full ${className || ""}`}>
      {/* Bright glow effect behind the image to make it look premium and blend with the background */}
      <div className="absolute w-[60%] h-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-500/30 blur-[100px] rounded-full pointer-events-none" />

      {/* Floating animation for the logistics main visual */}
      <motion.img
        src="/logistics_hero_visual.png"
        alt="NUPA Logistics Premium 3D Visual"
        className="relative z-10 w-[85%] md:w-[100%] h-auto max-w-[550px] object-contain drop-shadow-[0_20px_40px_rgba(2,132,199,0.5)]"
        animate={{
          y: [-25, 10, -25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
