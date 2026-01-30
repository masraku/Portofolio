"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-[1000px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10" />

      <Section className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            All Projects
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            A complete collection of my work, ranging from full-stack web
            applications to experimental UI designs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Section>
    </main>
  );
}
