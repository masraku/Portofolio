"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Fullstack Developer",
    company: "Disnaker Cirebon",
    period: "2026",
    type: "Fullstack Developer",
    tasks: [
      "Developed a web application for public jobseekers",
      "Implemented user authentication and authorization",
      "Designed and developed RESTful APIs",
    ],
  },
  {
    title: "Intern Fullstack Developer",
    company: "Jakarta Pasti Happy",
    period: "2025",
    type: "Fullstack Developer",
    tasks: [
      "Developed a web application for public complaints",
      "Implemented user authentication and authorization",
      "Designed and developed RESTful APIs",
    ],
  },
  {
    title: "Admin & Warehouse Staff",
    company: "PT Guna Maju Bersama",
    period: "2021 — 2023",
    type: "Admin and Warehouse Staff",
    tasks: [
      "Monitored stock in and out",
      "Performed stock opname",
      "Packed stock",
      "Created PO (Purchase Order)",
      "Created PR (Purchase Request)",
      "Created BAST (Berita Acara Serah Terima)",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
      className="scroll-mt-32 py-20 px-6 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">
        Work Experience
      </h2>

      <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.2)]" />

            <Card
              className="p-6 md:p-8 bg-white/5 border-white/5 transition-all duration-300 hover:border-white/20 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-zinc-300 transition-colors">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-mono text-zinc-300 bg-white/5 px-3 py-1 rounded-full w-fit">
                  <Briefcase className="w-3 h-3" />
                  {exp.period}
                </div>
              </div>

              <p className="text-zinc-400 font-medium mb-4">{exp.company}</p>

              <ul className="space-y-2">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>

      {/* Freelance CTA removed or kept? The user wants "all page", probably keep it as it's part of experience */}
      <Card className="mt-16 p-8 md:p-10 bg-white/5 border-white/10 text-center">
        <div className="flex justify-center mb-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Open for Freelance Projects
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-6 leading-relaxed">
          Looking for a developer to build your website or web application? I'm
          available for freelance work and would love to help bring your ideas
          to life.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
        >
          Let's Work Together
        </a>
      </Card>
    </Section>
  );
}
