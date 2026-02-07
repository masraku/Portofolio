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
      "bg-white text-black shadow-lg shadow-white/10 hover:shadow-white/20 hover:scale-105 hover:bg-gray-200",
    outline:
      "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
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
