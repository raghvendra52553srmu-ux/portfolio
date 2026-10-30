import React from "react";
import {
  Code,
  Terminal,
  FileCode2,
  Atom,
  Zap,
  Layout,
  Palette,
  BarChart3,
  Table,
  Database,
  LineChart,
  PieChart,
  GitBranch,
  Laptop,
  Layers
} from "lucide-react";
import { Github } from "./Icons";
import { SKILLS_CATEGORIES } from "../data/portfolioData";

const iconMap = {
  Code,
  Terminal,
  FileCode2,
  Atom,
  Zap,
  Layout,
  Palette,
  BarChart3,
  Table,
  Database,
  LineChart,
  PieChart,
  GitBranch,
  Github,
  Laptop
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <div className="mb-12 border-b border-zinc-800/80 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sky-400 text-xs font-mono mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>TECHNICAL CAPABILITIES</span>
        </div>
        <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Skills &amp; Technologies
        </h2>
        <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          Structured by area of application rather than abstract rating percentages. Each tool represents active hands-on development in projects, hackathons, or coursework.
        </p>
      </div>

      {/* Grouped Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS_CATEGORIES.map((categorySection) => (
          <div
            key={categorySection.category}
            className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Area Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-800/70">
                <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-200 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  {categorySection.category}
                </h3>
                <span className="text-[11px] font-mono text-zinc-400">
                  {categorySection.skills.length} competencies
                </span>
              </div>

              {/* Skills in Area */}
              <div className="space-y-3">
                {categorySection.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code;

                  return (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/60 transition-colors flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 rounded-lg bg-zinc-900 text-sky-400 border border-zinc-800 group-hover:border-sky-500/30 transition-colors shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors truncate">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-zinc-400 truncate">
                            {skill.tag}
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 shrink-0">
                        {skill.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
