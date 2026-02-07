"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import { Github, Globe, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiSupabase,
  SiFramer,
  SiFlutter,
  SiFirebase,
  SiLaravel,
  SiMysql,
} from "react-icons/si";

const techIcons = {
  "Next.js": { icon: SiNextdotjs, color: "text-white" },
  React: { icon: SiReact, color: "text-cyan-400" },
  "Node.js": { icon: SiNodedotjs, color: "text-green-500" },
  Prisma: { icon: SiPrisma, color: "text-teal-400" },
  PostgreSQL: { icon: SiPostgresql, color: "text-blue-400" },
  Tailwind: { icon: SiTailwindcss, color: "text-cyan-400" },
  TypeScript: { icon: SiTypescript, color: "text-blue-500" },
  JavaScript: { icon: SiJavascript, color: "text-yellow-400" },
  MongoDB: { icon: SiMongodb, color: "text-green-500" },
  Supabase: { icon: SiSupabase, color: "text-green-400" },
  "Framer Motion": { icon: SiFramer, color: "text-pink-500" },
  Flutter: { icon: SiFlutter, color: "text-cyan-400" },
  Firebase: { icon: SiFirebase, color: "text-yellow-500" },
  Laravel: { icon: SiLaravel, color: "text-red-600" },
  MySQL: { icon: SiMysql, color: "text-blue-400" },
};

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Card className="group relative bg-zinc-900/50 border border-white/5 overflow-hidden rounded-3xl hover:border-white/10 transition-colors duration-500 w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Image Section */}
        <div className="relative h-48 md:h-full overflow-hidden bg-zinc-900 border-b md:border-b-0 md:border-r border-white/5">
          {project.image ? (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.image})` }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-zinc-500">No Preview</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Content Section */}
        <div className="relative p-4 md:p-8 flex flex-col h-full bg-zinc-900/20">
          <div className="mb-auto">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed text-xs md:text-base mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
              {project.tech.map((tech) => {
                const TechIcon = techIcons[tech]?.icon;
                const colorClass = techIcons[tech]?.color || "text-zinc-400";
                return (
                  <div
                    key={tech}
                    className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-white/5 border border-white/5 text-[10px] md:text-xs font-medium text-zinc-300"
                  >
                    {TechIcon && (
                      <TechIcon
                        className={`w-3 h-3 md:w-3.5 md:h-3.5 ${colorClass}`}
                      />
                    )}
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 md:gap-4 pt-3 md:pt-4 mt-3 md:mt-4 border-t border-white/5">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium text-zinc-400 hover:text-white transition-colors group/link"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </Link>
            )}

            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors group/link ml-auto"
              >
                <Globe className="w-4 h-4" />
                <span>Live Demo</span>
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
