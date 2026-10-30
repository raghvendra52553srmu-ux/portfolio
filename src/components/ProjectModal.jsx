import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, AlertCircle, Layers } from "lucide-react";
import { Github } from "./Icons";

export default function ProjectModal({ project, onClose, onOpenQuiz }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/60 backdrop-blur-sm">
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-3xl bg-white border border-[#e7e3da] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#e7e3da] bg-[#faf8f5]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-[#9e472a] bg-stone-100 px-2.5 py-1 rounded border border-[#eeebe3]">
                {project.number}
              </span>
              <div>
                <h3 className="font-serif text-xl font-normal text-stone-900 flex items-center gap-2">
                  {project.title}
                  {project.isFeatured && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Featured
                    </span>
                  )}
                </h3>
                <p className="text-xs text-stone-500 font-mono">{project.category}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto p-6 sm:p-7 space-y-6">
            {/* Overview */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-stone-400 mb-2 font-medium">
                Overview &amp; Purpose
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed font-sans">
                {project.shortDesc}
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#faf8f5] border border-[#eeebe3]">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-800 mb-2">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                  PROBLEM ADDRESSED
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {project.problemSolved}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0]">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  IMPLEMENTED SOLUTION
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-stone-400 mb-3 font-medium flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#9e472a]" />
                  Key Features &amp; System Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-lg bg-[#faf8f5] border border-[#eeebe3]"
                    >
                      <div className="text-xs font-semibold text-stone-900 flex items-center gap-1.5 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9e472a]" />
                        {feat.title}
                      </div>
                      <div className="text-[11px] text-stone-600 mt-1 leading-normal font-sans">
                        {feat.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-stone-400 mb-2.5 font-medium">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[#faf8f5] border border-[#eeebe3] text-xs font-mono text-stone-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t border-[#e7e3da] bg-[#faf8f5] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-stone-500 font-mono">
              Verified Public Repository on GitHub
            </span>

            <div className="flex items-center gap-3">
              {project.hasPlayableDemo && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuiz();
                  }}
                  className="px-4 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 text-xs font-medium transition-colors"
                >
                  Play Mini Demo
                </button>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#9e472a] hover:bg-[#883c22] text-white text-xs font-medium transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
