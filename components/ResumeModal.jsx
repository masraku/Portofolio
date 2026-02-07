"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ResumeModal({ isOpen, onClose }) {
  // Prevent scrolling when modal is open
  if (typeof window !== "undefined") {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-5xl h-[85vh] bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#1a1a1a]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <FileText className="w-5 h-5 text-zinc-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">My Resume</h3>
                    <p className="text-xs text-zinc-400">
                      Laksmana Rakho • Fullstack Developer
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/assets/resume.pdf"
                    download
                    className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content (PDF Viewer) */}
              <div className="flex-1 bg-[#111] relative group">
                {/* PDF Embed */}
                <iframe
                  src={`/assets/resume.pdf?t=${Date.now()}`}
                  className="w-full h-full"
                  title="Resume PDF"
                />

                {/* Fallback / Mobile View (if iframe doesn't work well on mobile) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111] -z-10 text-center p-6">
                  <p className="text-zinc-500 mb-2">
                    Preview not available (File might be missing)
                  </p>
                  <p className="text-zinc-600 text-xs mb-6 max-w-sm">
                    Please ensure <code>public/assets/resume.pdf</code> exists
                    in your project.
                  </p>
                  <Button
                    onClick={() => window.open("/assets/resume.pdf", "_blank")}
                    variant="outline"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open in New Tab
                  </Button>
                </div>
              </div>

              {/* Mobile Footer (Download button for mobile) */}
              <div className="sm:hidden p-4 border-t border-white/10 bg-[#1a1a1a]">
                <a
                  href="/assets/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
