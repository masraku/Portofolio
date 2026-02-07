"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <Section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <GraduationCap className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
      </div>

      <Card className="p-8 bg-white/5 border-white/5 hover:border-purple-500/30 transition-colors group">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
          <div className="shrink-0 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/20">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
              Mercubuana University
            </h3>
            <p className="text-cyan-400 font-mono text-sm mt-1">
              2022 — Present
            </p>
          </div>
        </div>

        <h4 className="text-xl font-semibold text-gray-200 mb-4">
          Bachelor's Degree in Informatics Engineering
        </h4>
        <p className="text-gray-400 leading-relaxed text-lg">
          Studying software development fundamentals, data structures,
          databases, and web technologies with a focus on practical application
          and real-world projects.
        </p>
      </Card>
    </Section>
  );
}
