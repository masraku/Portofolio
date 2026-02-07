"use client";

import { useRef } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/ui/Section";
import { motion, useScroll, useTransform } from "framer-motion";

const CardContainer = ({ children, index, range, targetScale, progress }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const scaleCard = useTransform(scrollYProgress, [0, 1], [targetScale, 1]); // Parallax scale

  return (
    <div
      ref={container}
      className="min-h-[85vh] md:h-screen flex items-start justify-center sticky top-0 pointer-events-none pt-4 md:pt-16"
    >
      <motion.div
        style={{
          scale: scale,
          top: `calc(${index * 20}px)`,
        }}
        className="relative w-full max-w-5xl origin-top pointer-events-auto"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <Section
      id="projects"
      className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 md:mb-16 text-center md:text-left"
      >
        <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">
          All Projects
        </h2>
        <p className="text-gray-400 max-w-2xl text-sm md:text-lg mx-auto md:mx-0">
          A complete collection of my work, ranging from full-stack web
          applications to experimental UI designs.
        </p>
      </motion.div>

      <div ref={container} className="relative">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          return (
            <CardContainer
              key={project.title}
              index={index}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            >
              <ProjectCard project={project} index={index} />
            </CardContainer>
          );
        })}
      </div>
    </Section>
  );
}
