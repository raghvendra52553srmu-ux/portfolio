import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Experience &amp; Activity
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Factual timeline of project development, learning, and hackathon participation.
        </p>
      </div>

      <div className="space-y-6">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-800 text-cyan-400 border border-zinc-700">
                {exp.year} • {exp.type}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                <MapPin className="w-3.5 h-3.5" />
                <span>{exp.location}</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mb-1">
              {exp.role}
            </h3>

            <div className="text-xs font-semibold text-zinc-400 mb-3">
              {exp.organization}
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
              {exp.description}
            </p>

            <div className="space-y-1.5 pt-3 border-t border-zinc-800/80">
              {exp.highlights.map((item, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
