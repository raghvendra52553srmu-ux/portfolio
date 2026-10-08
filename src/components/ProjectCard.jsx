import React from "react";
import { ArrowUpRight, Play, ExternalLink, Info, CheckCircle2 } from "lucide-react";
import { Github } from "./Icons";

export default function ProjectCard({ project, onOpenDetails, onOpenQuizDemo }) {
  return (
    <div className="group rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-200 p-6 flex flex-col justify-between">
      <div>
        {/* Header: Number & Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs font-semibold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-md border border-sky-500/20">
            {project.number}
          </span>
          <span className="text-xs font-mono text-zinc-400">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors mb-2">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
          {project.shortDesc}
        </p>

        {/* Problem preview */}
        <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80 mb-4">
          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1 font-semibold">
            Problem Addressed:
          </div>
          <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
            {project.problemSolved}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-zinc-800/70 border border-zinc-700/50 text-[11px] font-mono text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 transition-colors"
        >
          <Info className="w-3.5 h-3.5 text-sky-400" />
          <span>View Details</span>
        </button>

        <div className="flex items-center gap-2">
          {project.hasPlayableDemo && (
            <button
              onClick={onOpenQuizDemo}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-medium transition-colors"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Mini Demo</span>
            </button>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-medium transition-colors border border-zinc-700/50"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
