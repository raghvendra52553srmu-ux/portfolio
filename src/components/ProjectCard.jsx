import React from 'react';
import { ArrowUpRight, Play, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectCard({ project, onOpenQuizDemo }) {
  return (
    <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all p-5 sm:p-6 flex flex-col justify-between">
      <div>
        {/* Category & Status */}
        <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-400">
          <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
            {project.category}
          </span>
          <span>Verified Repository</span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
          {project.title}
        </h3>

        {/* Tagline / Description */}
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-1.5 mb-5">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
              Key Features:
            </span>
            <div className="space-y-1">
              {project.features.slice(0, 3).map((f, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>
                    <strong className="text-zinc-200">{f.title}:</strong> {f.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/60 text-[11px] font-mono text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 hover:text-white transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>View on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
        </a>

        {project.hasPlayableDemo && (
          <button
            onClick={onOpenQuizDemo}
            className="flex items-center gap-1.5 py-2 px-3 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-semibold transition-colors"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Interactive Demo</span>
          </button>
        )}
      </div>
    </div>
  );
}
