"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  Briefcase,
  GraduationCap,
  Layout,
  FileText,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "#home", icon: Home },
  { name: "About", path: "#about", icon: User },
  { name: "Skills", path: "#skills", icon: Code2 },
  { name: "Experience", path: "#experience", icon: Briefcase },
  { name: "Projects", path: "#projects", icon: Layout },
  { name: "Contact", path: "#contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredPath, setHoveredPath] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.path.replace("#", ""));
      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.startsWith("/demo")) return null;

  return (
    <>
      <nav
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] md:w-auto",
        )}
      >
        <div
          className={cn(
            "relative flex items-center justify-between md:justify-center p-1.5 rounded-full backdrop-blur-md transition-all duration-300",
            "bg-zinc-950/80", // Dark base background
            "border border-transparent", // Transparent border for gradient mask
            "before:absolute before:inset-0 before:-z-10 before:rounded-full before:p-[1px]", // Gradient border container
            "before:bg-gradient-to-r before:from-white/20 before:via-gray-400/20 before:to-white/20", // The gradient
            "before:content-[''] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
            "before:[mask-composite:exclude]",
            "shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]", // Glow effect
          )}
        >
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full px-4 py-2">
            <span className="font-bold text-white">Raku</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.path.replace("#", "");
              const isHovered = hoveredPath === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onMouseEnter={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    isActive ? "text-white" : "text-gray-400 hover:text-white",
                  )}
                >
                  {/* Hover Background */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-white/5 rounded-full z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  {/* Active Background */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-white/10 rounded-full z-0"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-4 right-4 z-40 p-2 rounded-2xl bg-zinc-950/95 backdrop-blur-xl border border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.path.replace("#", "");
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-xl transition-all font-medium",
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5",
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
