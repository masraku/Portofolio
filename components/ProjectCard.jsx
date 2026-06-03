"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import { Github, Globe, ArrowUpRight } from "lucide-react";
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

const cardAccents = [
  "from-emerald-400/25 via-cyan-400/10 to-transparent",
  "from-violet-400/25 via-fuchsia-400/10 to-transparent",
  "from-sky-400/25 via-blue-400/10 to-transparent",
  "from-amber-400/25 via-orange-400/10 to-transparent",
  "from-lime-400/25 via-emerald-400/10 to-transparent",
  "from-rose-400/25 via-pink-400/10 to-transparent",
];

export default function ProjectCard({ project, index = 0 }) {
  const accent = cardAccents[index % cardAccents.length];
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <Card className="group relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-0 shadow-2xl shadow-black/20 transition-colors duration-500 hover:border-emerald-300/30">
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${accent} opacity-80`} />

      <div className="relative z-10 flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-zinc-900">
          {project.image ? (
            <div
              className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.image})` }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-zinc-500">No Preview</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            #{projectNumber}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="mb-5">
            <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-emerald-300 md:text-2xl">
              {project.title}
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-zinc-400 md:text-base">
              {project.description}
            </p>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => {
              const TechIcon = techIcons[tech]?.icon;
              const colorClass = techIcons[tech]?.color || "text-zinc-400";

              return (
                <div
                  key={tech}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300"
                >
                  {TechIcon && (
                    <TechIcon className={`h-3.5 w-3.5 ${colorClass}`} />
                  )}
                  <span>{tech}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white group/link"
              >
                <Github className="h-4 w-4" />
                <span>Code</span>
              </Link>
            )}

            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-emerald-300 group/link"
              >
                <Globe className="h-4 w-4" />
                <span>Live Demo</span>
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
