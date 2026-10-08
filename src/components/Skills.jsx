import React, { useState } from "react";
import { motion } from "framer-motion";
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
  Layers,
  Wrench
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

const statusStyles = {
  "Building With": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Working Knowledge": "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "Learning": "bg-purple-500/10 text-purple-400 border-purple-500/20"
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const filterTabs = ["ALL", "PROGRAMMING", "WEB DEVELOPMENT", "DATA & ANALYTICS", "TOOLS"];

  const displayedCategories =
    selectedFilter === "ALL"
      ? SKILLS_CATEGORIES
      : SKILLS_CATEGORIES.filter((c) => c.category === selectedFilter);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-zinc-800/80 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Skills &amp; Technologies
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
            Practical competencies categorized by real application. Measured by hands-on usage
            rather than arbitrary percentage bars.
          </p>
        </div>

        {/* Status Legend */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Building With
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            Working Knowledge
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            Active Learning
          </span>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedFilter(tab)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all ${
              selectedFilter === tab
                ? "bg-zinc-100 text-zinc-950 shadow-sm"
                : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedCategories.map((catSection, idx) => (
          <motion.div
            key={catSection.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all"
          >
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-zinc-800/60">
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                {catSection.category}
              </h3>
              <span className="text-xs text-zinc-500 font-mono">
                {catSection.skills.length} skills
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {catSection.skills.map((skill) => {
                const Icon = iconMap[skill.icon] || Code;
                const statusStyle =
                  statusStyles[skill.status] || "bg-zinc-800 text-zinc-400 border-zinc-700";

                return (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all group flex flex-col justify-between"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-zinc-900 text-sky-400 border border-zinc-800 group-hover:border-sky-500/30 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                            {skill.name}
                          </div>
                          <div className="text-[11px] text-zinc-400">
                            {skill.tag}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 pt-2 border-t border-zinc-800/60 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase">
                        Proficiency
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${statusStyle}`}
                      >
                        {skill.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
