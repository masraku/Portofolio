"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Section = ({ children, className, id, delay = 0 }) => {
  return (
    <section id={id} className={cn("relative w-full", className)}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
