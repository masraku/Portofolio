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

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
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
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full w-fit">
                    <Briefcase className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-purple-300 font-medium mb-4">
                  {exp.company}
                </p>

                <ul className="space-y-2">
                  {exp.tasks.map((task, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-400"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>

        {/* Freelance CTA */}
        <Card className="mt-16 p-8 md:p-10 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-purple-500/20 text-center">
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
            Looking for a developer to build your website or web application?
            I'm available for freelance work and would love to help bring your
            ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Let's Work Together
          </a>
        </Card>
      </Section>
    </main>
  );
}
