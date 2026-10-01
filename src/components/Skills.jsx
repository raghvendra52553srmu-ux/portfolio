import React from 'react';
import { Code, Terminal, FileCode2, Atom, Zap, Layout, Palette, BarChart3, Table, Database, Binary, LineChart, PieChart, GitBranch, Laptop } from 'lucide-react';
import { Github } from './Icons';
import { SKILLS_DATA } from '../data/portfolioData';

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
  Binary,
  LineChart,
  PieChart,
  GitBranch,
  Github,
  Laptop
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Technologies and tools I work with across software and data projects.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Building With / Actively Learning</span>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS_DATA.map((catSection) => (
          <div
            key={catSection.category}
            className="p-5 sm:p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
          >
            <div className="mb-4">
              <h3 className="text-base font-semibold text-white">
                {catSection.category}
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                {catSection.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {catSection.items.map((skill) => {
                const Icon = iconMap[skill.icon] || Code;
                return (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex items-center gap-3"
                  >
                    <div className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-200">
                        {skill.name}
                      </div>
                      <div className="text-[10px] text-zinc-500 font-mono">
                        {skill.level}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
