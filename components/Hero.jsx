"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      {/* Background Gradients & Spotlight -> Removed to use Global AnimatedBackground */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md mb-8 group hover:border-purple-500/40 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-purple-200/80 group-hover:text-purple-200 transition-colors">
            Open for Freelance & Contract Work
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
          Building Digital <br />
          <span className="relative whitespace-nowrap">
            <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 animate-gradient-x bg-[length:200%_auto]">
              Experiences
            </span>
          </span>{" "}
          <br className="md:hidden" />
          That Matter
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          I'm a fullstack developer specialized in crafting accessible,
          pixel-perfect, and performant web applications that help businesses
          grow.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/projects">
            <Button
              variant="primary"
              className="h-14 px-8 text-lg rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow"
            >
              View Featured Work <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant="outline"
              className="h-14 px-8 text-lg rounded-full border-white/10 hover:bg-white/5"
            >
              Let's Talk <Mail className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />
    </section>
  );
}
