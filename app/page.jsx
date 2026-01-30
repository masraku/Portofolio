import Hero from "@/components/Hero";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ProjectCard";
import Card from "@/components/ui/Card";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, Code2, Layout, Database, Rocket } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Services Section */}
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

      <Section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
              Featured Work
            </h2>
            <p className="text-gray-400 max-w-lg">
              A selection of projects that showcase my passion for building
              clean, scalable, and user-friendly applications.
            </p>
          </div>

          <Link
            href="/projects"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className="py-20 px-6 max-w-4xl mx-auto text-center relative z-10">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work and open to new
            opportunities. Let's discuss how I can help your business grow.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-white/10">
              Let's Work Together
            </button>
          </Link>
        </div>
      </Section>
    </main>
  );
}
