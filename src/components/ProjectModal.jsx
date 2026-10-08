import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles, CheckCircle2, AlertCircle, Layers, ArrowRight } from "lucide-react";
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/60">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-semibold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-md border border-sky-500/20">
                {project.number}
              </span>
              <div>
                <h3 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
                  {project.title}
                  {project.isFeatured && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      Featured
                    </span>
                  )}
                </h3>
                <p className="text-xs text-zinc-400">{project.category}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 rounded-lg border border-zinc-700/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto p-6 space-y-6">
            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                Overview
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.shortDesc}
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/90">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 mb-2">
                  <AlertCircle className="w-3.5 h-3.5" />
                  PROBLEM ADDRESSED
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/90">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  IMPLEMENTED SOLUTION
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 font-semibold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  Key Features &amp; System Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/80"
                    >
                      <div className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        {feat.title}
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-1 leading-normal">
                        {feat.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5 font-semibold">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/70 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-zinc-500 font-mono">
              Verified Public Repository on GitHub
            </span>

            <div className="flex items-center gap-3">
              {project.hasPlayableDemo && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuiz();
                  }}
                  className="px-4 py-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-medium transition-colors"
                >
                  Play Mini Demo
                </button>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors"
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
