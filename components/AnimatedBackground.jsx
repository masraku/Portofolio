"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-[#111111]">
      {/* 
        High-Contrast Dot Grid 
        Using svg for sharper rendering and better control
      */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='rgba(255,255,255,0.8)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
