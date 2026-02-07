"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiLaravel,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiGit,
  SiFirebase,
  SiFlutter,
  SiFramer,
} from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "Prisma", icon: SiPrisma, color: "text-teal-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
  { name: "Flutter", icon: SiFlutter, color: "text-cyan-400" },
  { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
];

export default function SkillsSection() {
  return (
    <Section id="skills" className="scroll-mt-32 py-20 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600 mb-6">
          Tech Stack
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
          "Mastering the art of modern web development with cutting-edge
          technologies"
        </p>
      </motion.div>

      {/* Tech Stack Grid */}
      <div className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all group cursor-default"
            >
              <tech.icon
                className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`}
              />
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors text-sm">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
