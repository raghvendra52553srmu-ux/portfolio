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
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20 border-b border-[#e7e3da]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 gap-4 pb-6 border-b border-[#e7e3da]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#9e472a] block mb-2 font-medium">
            03 / Capabilities
          </span>
          <h2 id="skills-heading" className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Technical Competencies
          </h2>
        </div>
        <p className="text-stone-500 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
          Tools and technologies practiced through hands-on project engineering, university hackathons, and certified data coursework.
        </p>
      </div>

      {/* Grouped Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {SKILLS_CATEGORIES.map((categorySection) => (
          <div
            key={categorySection.category}
            className="p-6 sm:p-7 rounded-xl bg-white border border-[#e7e3da] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
          >
            <div>
              {/* Area Header */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#f0ece4]">
                <h3 className="font-mono text-xs uppercase tracking-wider text-stone-900 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9e472a]" />
                  {categorySection.category}
                </h3>
                <span className="text-[11px] font-mono text-stone-500">
                  {categorySection.skills.length} tools
                </span>
              </div>

              {/* Skills in Area */}
              <div className="space-y-2.5">
                {categorySection.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code;

                  return (
                    <div
                      key={skill.name}
                      className="p-3 rounded-lg bg-[#faf8f5] hover:bg-[#f5f2eb] border border-[#eeebe3] transition-colors flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 rounded bg-white text-[#9e472a] border border-[#e7e3da] shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-medium text-stone-900 truncate">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-stone-500 truncate">
                            {skill.tag}
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-[#e7e3da] text-stone-600 shrink-0">
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
