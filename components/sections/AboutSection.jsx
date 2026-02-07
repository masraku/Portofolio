"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { User, Globe, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiX,
} from "react-icons/si";

export default function AboutSection() {
  return (
    <Section id="about" className="scroll-mt-32 py-20 px-6 max-w-6xl mx-auto">
      {/* Bio & Photo Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        {/* Photo Column - Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            {/* Animated Border/Glow - Monochrome */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-500 to-white rounded-[2rem] -rotate-6 scale-105 opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow" />
            <div className="absolute inset-0 bg-[#0a0a0a] rounded-[2rem] -rotate-3 border border-white/10" />

            {/* Image Container */}
            <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden border-2 border-white/20 shadow-2xl z-10">
              <Image
                src="/assets/me.jpeg"
                alt="Laksmana Rakho"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm">
                  Hello There! 👋
                </span>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-10 z-20"
            >
              <div className="p-3 rounded-xl bg-[#1a1a1a] border border-white/10 shadow-xl">
                <User className="w-6 h-6 text-gray-300" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -left-6 bottom-10 z-20"
            >
              <div className="p-3 rounded-xl bg-[#1a1a1a] border border-white/10 shadow-xl">
                <Globe className="w-6 h-6 text-gray-400" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left flex-1"
        >
          <div className="mb-2 text-gray-400 font-mono text-sm tracking-wider uppercase">
            About Me
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Turning Complex Problems into{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">
              Simple Solutions
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Hi! I'm{" "}
            <span className="inline-block px-3 py-1 bg-white/10 text-white font-bold rounded-lg border border-white/10 -rotate-2 hover:rotate-0 transition-transform duration-300">
              Laksmana Rakho
            </span>{" "}
            a fullstack web developer passionate about building digital products
            that are not only functional but also beautiful and intuitive. With
            a strong foundation in modern web technologies, I strive to write
            clean, maintainable code that scales.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span>Problem Solver</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span>Detail Oriented</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span>Continuous Learner</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span>Team Player</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-2">
              🇮🇩 Based in Indonesia
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for Work
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start">
            {[
              {
                icon: SiGithub,
                href: "https://github.com/masraku",
                color: "hover:text-white",
              },
              {
                icon: SiLinkedin,
                href: "https://www.linkedin.com/in/laksmana-rakho-53a9b0245/",
                color: "hover:text-white",
              },
              {
                icon: SiInstagram,
                href: "https://www.instagram.com/masrakuuu/",
                color: "hover:text-white",
              },
              {
                icon: SiX,
                href: "https://x.com/masrakuuu",
                color: "hover:text-white",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:scale-110 transition-all group"
              >
                <social.icon
                  className={`w-5 h-5 text-gray-400 ${social.color} transition-colors`}
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <Card className="p-8 bg-white/5 border-white/5 h-full hover:border-white/20 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 mb-6 group-hover:scale-110 transition-transform">
              <User className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Background</h3>
            <p className="text-gray-400 leading-relaxed">
              I have experience developing real-world systems such as a public
              complaint management platform and a job portal inspired by
              government employment services.
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <Card className="p-8 bg-white/5 border-white/5 h-full hover:border-white/20 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Philosophy</h3>
            <p className="text-gray-400 leading-relaxed">
              I enjoy working on projects that solve real problems, with a
              strong emphasis on clarity, usability, and long-term
              maintainability.
            </p>
          </Card>
        </motion.div>
      </div>

      {/* Education Section - Enhanced Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-white" />
          Education
        </h2>

        <div className="relative group p-[1px]">
          <div className="relative p-8 rounded-2xl bg-white/5 border border-white/5 overflow-hidden h-full hover:border-white/20 transition-colors duration-300">
            {/* Background Glow - Subtle White/Gray */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10 group-hover:bg-white/10 transition-colors duration-500" />

            <div className="flex flex-col md:flex-row gap-8">
              {/* Icon / Logo Column */}
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-gray-500/10 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
                      Mercubuana University
                    </h3>
                    <p className="text-gray-400 font-medium tracking-wide">
                      Bachelor's Degree in Informatics Engineering
                    </p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gray-200 text-sm font-mono whitespace-nowrap shadow-sm">
                    2022 — Present
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 font-medium">
                  Focusing on software engineering principles, algorithms, and
                  system design. Building a strong foundation in computer
                  science while actively applying knowledge through practical
                  development projects.
                </p>

                {/* Tags / Achievements */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Software Engineering",
                    "System Design",
                    "Web Technologies",
                    "Database Management",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold shadow-[0_0_10px_rgba(255,255,255,0.05)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
