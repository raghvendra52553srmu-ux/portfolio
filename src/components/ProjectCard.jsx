import React from "react";
import { ArrowUpRight, Play, Info } from "lucide-react";
import { Github } from "./Icons";

export default function ProjectCard({ project, onOpenDetails, onOpenQuizDemo }) {
  return (
    <article className="group rounded-xl bg-white border border-[#e7e3da] hover:border-[#9e472a]/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_20px_-2px_rgba(158,71,42,0.06)]">
      <div>
        {/* Header: Number & Category */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#f0ece4]">
          <span className="font-mono text-xs font-semibold text-[#9e472a]">
            {project.number}
          </span>
          <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-normal text-stone-900 group-hover:text-[#9e472a] transition-colors mb-2 tracking-tight">
          {project.title}
        </h3>

        {/* Short Summary */}
        <p className="text-sm text-stone-600 leading-relaxed mb-5">
          {project.shortDesc}
        </p>

        {/* Context / Challenge */}
        <div className="p-3.5 rounded-lg bg-[#faf8f5] border border-[#eeebe3] mb-3">
          <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-1 font-semibold">
            Context:
          </div>
          <p className="text-xs text-stone-700 leading-relaxed">
            {project.context || project.problemSolved}
          </p>
        </div>

        {/* Contribution / Role */}
        <div className="p-3.5 rounded-lg bg-[#fbf9f6] border border-[#eeebe3] mb-5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#9e472a] mb-1 font-semibold">
            My Contribution:
          </div>
          <p className="text-xs text-stone-700 leading-relaxed">
            {project.myContribution || project.solution}
          </p>
        </div>

        {/* Tools Used */}
        <div className="mb-6">
          <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-2 font-semibold">
            Tools &amp; Stack:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-[#f5f2eb] border border-[#e7e3da] text-[11px] font-mono text-stone-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="pt-4 border-t border-[#f0ece4] flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium text-stone-700 hover:text-stone-950 bg-stone-100/70 hover:bg-stone-200/60 border border-stone-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9e472a]"
        >
          <Info className="w-3.5 h-3.5 text-[#9e472a]" />
          <span>Case Details</span>
        </button>

        <div className="flex items-center gap-2">
          {project.hasPlayableDemo && (
            <button
              onClick={onOpenQuizDemo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#fbf4f0] hover:bg-[#f6eae3] border border-[#f0ded5] text-[#9e472a] text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9e472a]"
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
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9e472a]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Repository</span>
              <ArrowUpRight className="w-3 h-3 text-stone-300" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
