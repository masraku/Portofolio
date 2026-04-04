"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  Rocket,
  Code2,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <Section className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="relative p-10 md:p-16 overflow-hidden border-emerald-500/30 bg-zinc-950/80 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)] group">
            {/* Animated internal gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6 tracking-wide">
                  <Sparkles className="w-4 h-4" />
                  AVAILABLE FOR HIRE
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                  Make some <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    Projects?
                  </span>
                </h1>
                
                <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
                  Punya ide project website atau butuh layanan pembuatan website profesional? 
                  Kunjungi website freelance saya untuk melihat daftar harga, paket layanan, dan SOP lengkapnya.
                </p>
                
                <a 
                  href="https://rakubuatwebsite.masraku.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] w-full md:w-auto"
                >
                  <Rocket className="w-6 h-6" />
                  Kunjungi Website Freelance
                  <ExternalLink className="w-5 h-5 ml-1" />
                </a>
              </div>
              
              {/* Abstract element */}
              <div className="hidden md:flex relative w-72 h-72 shrink-0 items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-emerald-500/30"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-6 rounded-full border border-emerald-500/20"
                />
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative bg-zinc-900 border border-emerald-500/40 p-10 rounded-3xl shadow-2xl shadow-emerald-500/20 transform rotate-6"
                >
                  <Code2 className="w-20 h-20 text-emerald-400" />
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>
    </section>
  );
}
