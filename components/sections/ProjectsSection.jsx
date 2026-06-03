"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projectCount = projects.length.toString().padStart(2, "0");

  return (
    <Section
      id="projects"
      className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-12 flex flex-col gap-5 text-center md:flex-row md:items-end md:justify-between md:text-left"
      >
        <div>
          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">
            All Projects
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm md:text-lg mx-auto md:mx-0">
            A complete collection of my work, ranging from full-stack web
            applications to experimental UI designs.
          </p>
        </div>

        <div className="mx-auto w-full max-w-xs rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-4 shadow-2xl shadow-emerald-500/5 backdrop-blur md:mx-0 md:w-auto md:min-w-44">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
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
  );
}
