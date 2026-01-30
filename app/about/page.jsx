"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { User, Globe, GraduationCap } from "lucide-react";
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

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-[1000px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10" />

      <Section className="max-w-5xl mx-auto">
        {/* Hero Section with Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-12 mb-20"
        >
          {/* Photo */}
          <div className="relative shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-purple-500/20 shadow-2xl shadow-purple-500/20">
              {/* Replace with your actual photo */}
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                <User className="w-24 h-24 text-purple-300/50" />
              </div>
              <Image
                src="/assets/me.jpeg"
                alt="Profile Photo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Intro Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              About Me
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a fullstack web developer focused on building clean,
              scalable, and maintainable web applications. I enjoy turning
              complex problems into simple, beautiful solutions.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
                🇮🇩 Based in Indonesia
              </span>
              <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-medium">
                ✅ Available for Work
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/masraku"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all group"
              >
                <SiGithub className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/laksmana-rakho-53a9b0245/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all group"
              >
                <SiLinkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/masrakuuu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/30 hover:bg-white/10 transition-all group"
              >
                <SiInstagram className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors" />
              </a>
              <a
                href="https://x.com/masrakuuu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/30 hover:bg-white/10 transition-all group"
              >
                <SiX className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Card className="p-8 bg-white/5 border-white/5 h-full">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <User className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Background</h3>
            <p className="text-gray-400 leading-relaxed">
              I have experience developing real-world systems such as a public
              complaint management platform and a job portal inspired by
              government employment services.
            </p>
          </Card>

          <Card className="p-8 bg-white/5 border-white/5 h-full">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Philosophy</h3>
            <p className="text-gray-400 leading-relaxed">
              I enjoy working on projects that solve real problems, with a
              strong emphasis on clarity, usability, and long-term
              maintainability.
            </p>
          </Card>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-purple-400" />
            Education
          </h2>
          <Card className="p-8 bg-white/5 border-white/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Mercubuana University
                </h3>
                <p className="text-cyan-400 font-mono text-sm">
                  2022 — Present
                </p>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-200 mb-3">
              Bachelor's Degree in Informatics Engineering
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Studying software development fundamentals, data structures,
              databases, and web technologies with a focus on practical
              application and real-world projects.
            </p>
          </Card>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  name: "Next.js",
                  icon: <SiNextdotjs className="w-5 h-5" />,
                  color: "text-white",
                },
                {
                  name: "React",
                  icon: <SiReact className="w-5 h-5" />,
                  color: "text-cyan-400",
                },
                {
                  name: "Node.js",
                  icon: <SiNodedotjs className="w-5 h-5" />,
                  color: "text-green-500",
                },
                {
                  name: "Prisma",
                  icon: <SiPrisma className="w-5 h-5" />,
                  color: "text-teal-400",
                },
                {
                  name: "PostgreSQL",
                  icon: <SiPostgresql className="w-5 h-5" />,
                  color: "text-blue-400",
                },
                {
                  name: "Tailwind CSS",
                  icon: <SiTailwindcss className="w-5 h-5" />,
                  color: "text-cyan-400",
                },
                {
                  name: "Framer Motion",
                  icon: <SiFramer className="w-5 h-5" />,
                  color: "text-pink-400",
                },
                {
                  name: "Git",
                  icon: <SiGit className="w-5 h-5" />,
                  color: "text-orange-500",
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all group"
                >
                  <span
                    className={`${tech.color} group-hover:scale-110 transition-transform`}
                  >
                    {tech.icon}
                  </span>
                  <span className="text-gray-300 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    </main>
  );
}
