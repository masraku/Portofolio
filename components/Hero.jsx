"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";
import ResumeModal from "@/components/ResumeModal";

// --- 3D Tilt Component ---
const Tilt = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Orbiting Icons ---
const OrbitIcon = ({ Icon, color, delay, radius }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay }}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
    style={{ width: radius * 2, height: radius * 2 }}
  >
    <motion.div
      className="absolute top-0 left-1/2 -translate-x-1/2"
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear", delay }}
    >
      <div
        className={`p-3 rounded-full bg-[#1a1a2e]/80 border border-white/10 backdrop-blur-md shadow-lg ${color}`}
      >
        <Icon className="w-6 h-6" />
      </div>
    </motion.div>
  </motion.div>
);

// --- Code Window with Typing Effect ---
const CodeWindow = () => {
  return (
    <div className="w-full bg-[#0d1117]/95 rounded-xl border border-gray-800 shadow-2xl font-mono text-sm relative z-0 backdrop-blur-sm overflow-hidden transform-gpu">
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-gray-500 font-medium">developer.js</div>
        <div className="w-10" />
      </div>

      {/* Code Content */}
      <div className="p-6 text-gray-300 overflow-hidden relative text-xs md:text-sm leading-relaxed">
        <div className="space-y-1">
          <div>
            <span className="text-gray-400">const</span>{" "}
            <span className="text-white">developer</span>{" "}
            <span className="text-gray-500">=</span>{" "}
            <span className="text-gray-400">{"{"}</span>
          </div>
          <div className="pl-4">
            <span className="text-gray-300">name</span>:{" "}
            <span className="text-gray-100">'Laksmana Rakho Marzendra'</span>,
          </div>
          <div className="pl-4">
            <span className="text-gray-300">education</span>:{" "}
            <span className="text-gray-100">
              'Bachelor of Informatics Engineering Mercubuana University'
            </span>
            ,
          </div>
          <div className="pl-4">
            <span className="text-gray-300">role</span>:{" "}
            <span className="text-gray-100">'Full-Stack Wizard'</span>,
          </div>
          <div className="pl-4">
            <span className="text-gray-300">skills</span>:{" "}
            <span className="text-gray-400">
              ['React', 'Next.js', 'Node.js', 'Database']
            </span>
            ,
          </div>
          <div className="pl-4">
            <span className="text-gray-300">passion</span>:{" "}
            <span className="text-gray-100">
              <Typewriter
                words={[
                  "'Building Digital Products'",
                  "'Solving Complex Problems'",
                  "'Creating User Experiences'",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
          <div>
            <span className="text-gray-400">{"}"}</span>;
          </div>
          <div className="mt-4 text-gray-500">
            <span className="text-gray-400">if</span> (
            <span className="text-white">project</span>.
            <span className="text-gray-400">isAwesome</span>) {"{"}
          </div>
          <div className="pl-4">
            <span className="text-white">developer</span>.
            <span className="text-gray-400">code</span>();
          </div>
          <div>{"}"}</div>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const [showResume, setShowResume] = useState(false);
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">
              Available for Freelance
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-6 leading-tight">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">
              Digital
            </span>{" "}
            <br />
            Experiences
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0">
            I transform ideas into high-performance web applications. Blending
            creative design with robust engineering.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="#projects">
              <Button className="h-12 px-8 rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-medium">
                View Work
              </Button>
            </Link>
            <Button
              variant="outline"
              className="h-12 px-8 rounded-full border-white/10 hover:bg-white/5 text-white font-medium"
              onClick={() => setShowResume(true)}
            >
              Resume
            </Button>
          </div>
        </motion.div>

        {/* Right Column: 3D Code Window */}
        <div className="relative flex justify-center items-center perspective-1000">
          {/* Glow Effect behind window */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-500/10 to-white/10 blur-3xl transform scale-110 rounded-full" />

          <Tilt className="relative z-10 w-full max-w-lg">
            <CodeWindow />

            {/* Floating Icons */}
            <div className="absolute -top-10 -right-10 z-20">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="p-3 bg-[#1a1a1a] rounded-xl border border-white/10 shadow-xl"
              >
                <SiReact className="w-8 h-8 text-gray-300" />
              </motion.div>
            </div>
            <div className="absolute -bottom-5 -left-5 z-20">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="p-3 bg-[#1a1a2e] rounded-xl border border-white/10 shadow-xl"
              >
                <SiNextdotjs className="w-8 h-8 text-white" />
              </motion.div>
            </div>

            {/* Orbiting Icons */}
            {/* <OrbitIcon Icon={SiTypescript} color="text-blue-500" delay={0} radius={180} />
                <OrbitIcon Icon={SiTailwindcss} color="text-cyan-400" delay={5} radius={220} />
                <OrbitIcon Icon={SiNodedotjs} color="text-green-500" delay={10} radius={260} /> */}
          </Tilt>
        </div>
      </div>
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </section>
  );
}
