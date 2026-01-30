"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Card
      className="flex flex-col h-full bg-white/5 border-white/10 hover:border-purple-500/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-200 border border-purple-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <Link href={project.demoUrl}>
          <Button
            variant="ghost"
            className="w-full justify-between group-hover:bg-purple-500/10 group-hover:text-purple-300 transition-colors"
          >
            View Project
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
