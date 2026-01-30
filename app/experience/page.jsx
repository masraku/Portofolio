"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Web Developer (Freelance)",
    period: "2024 — Present",
    description:
      "Working on designing and developing responsive websites and web applications for small businesses and individual clients. Focused on clean UI, performance, and maintainable code.",
  },
  {
    title: "Academic & Project-Based Development",
    period: "2023 — 2024",
    description:
      "Built fullstack web applications including a public complaint management system and a job portal inspired by government employment services.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-[1000px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10" />

      <Section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
          Work Experience
        </h1>

        <div className="relative border-l border-purple-500/20 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

              <Card
                className="p-6 md:p-8 bg-white/5 border-white/5 transition-all duration-300 hover:border-purple-500/30 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full w-fit">
                    <Briefcase className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
