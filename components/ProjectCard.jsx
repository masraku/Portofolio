"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Card
      className="flex flex-col h-full bg-white/5 border-white/10 hover:border-purple-500/30 overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Image Section - Fixed Aspect Ratio */}
      <div className="relative w-full aspect-video overflow-hidden bg-black/50">
        {project.image ? (
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white/5">
            <span className="text-gray-500 text-sm">No Preview Available</span>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3 text-sm md:text-base">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-200 border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link href={project.demoUrl} className="block">
            <Button
              variant="ghost"
              className="w-full justify-between bg-white/5 hover:bg-purple-500/20 text-white border border-white/5"
            >
              View Project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
