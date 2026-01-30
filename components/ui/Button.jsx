"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // We need to ensure we have a utils file or create one for 'cn'

export const Button = ({
  children,
  onClick,
  variant = "primary",
  className,
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105",
    outline:
      "bg-transparent border border-[#7042f88b] text-white hover:bg-[#7042f88b]/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(112,66,248,0.5)]",
    ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/5",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
