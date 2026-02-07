"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { Layout, Database, Rocket } from "lucide-react";

export default function ServicesSection() {
  return (
    <Section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
          What I Can Do For You
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          I help startups and businesses turn ideas into reality with
          high-quality development services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Layout className="w-8 h-8 text-cyan-400" />,
            title: "Web Development",
            desc: "Fast, responsive, and SEO-friendly websites built with Next.js and Tailwind CSS.",
          },
          {
            icon: <Database className="w-8 h-8 text-purple-400" />,
            title: "Fullstack Apps",
            desc: "Scalable backend systems using Node.js, PostgreSQL, and robust APIs.",
          },
          {
            icon: <Rocket className="w-8 h-8 text-pink-400" />,
            title: "MVP for Startups",
            desc: "Rapid prototyping and development to get your product to market quickly.",
          },
        ].map((service, i) => (
          <Card
            key={i}
            className="p-8 bg-white/5 border-white/5 hover:border-purple-500/30 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {service.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{service.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
