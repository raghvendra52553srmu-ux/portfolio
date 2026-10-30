import React from "react";
import { ArrowUpRight, Play, Info } from "lucide-react";
import { Github } from "./Icons";

export default function ProjectCard({ project, onOpenDetails, onOpenQuizDemo }) {
  return (
    <article className="group rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between">
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
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors mb-2">
          {project.title}
        </h3>

        {/* Short Summary */}
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
          {project.shortDesc}
        </p>

        {/* Project Context */}
        <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 mb-3.5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1 font-semibold">
            Context:
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            {project.context || project.problemSolved}
          </p>
        </div>

        {/* My Contribution */}
        <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 mb-5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-sky-400 mb-1 font-semibold">
            My Contribution:
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            {project.myContribution || project.solution}
          </p>
        </div>

        {/* Tools Used */}
        <div className="mb-6">
          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
            Tools Used:
          </div>
          <div className="flex flex-wrap gap-1.5">
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
      </div>

      {/* Bottom Actions */}
      <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-800/70 hover:bg-zinc-800 border border-zinc-700/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <Info className="w-3.5 h-3.5 text-sky-400" />
          <span>Case Details</span>
        </button>

        <div className="flex items-center gap-2">
          {project.hasPlayableDemo && (
            <button
              onClick={onOpenQuizDemo}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Interactive Simulator</span>
            </button>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-800" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
