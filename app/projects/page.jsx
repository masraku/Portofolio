"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projectCount = projects.length.toString().padStart(2, "0");

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-[1000px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10" />

      <Section className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              All Projects
            </h1>
            <p className="text-gray-400 max-w-2xl text-lg">
              A complete collection of my work, ranging from full-stack web
              applications to experimental UI designs.
            </p>
          </div>

          <div className="w-full max-w-xs rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-4 shadow-2xl shadow-cyan-500/5 backdrop-blur md:w-auto md:min-w-44">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              Total Projects
            </p>
            <p className="mt-2 text-4xl font-black text-white md:text-5xl">
              {projectCount}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Section>
    </main>
  );
}
