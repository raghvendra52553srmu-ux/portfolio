import React from 'react';
import { Trophy, CheckCircle2, Star } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Hackathons &amp; Activities
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          University hackathon involvement and technical milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {ACHIEVEMENTS_DATA.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                  {item.badge}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  {item.period}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-1">
                {item.title}
              </h3>

              <div className="text-xs text-cyan-400 font-mono mb-2.5">
                {item.institution}
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Activity</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
