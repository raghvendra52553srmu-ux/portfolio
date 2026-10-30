import React from "react";
import { motion } from "framer-motion";
import { Trophy, CheckCircle2, ArrowUpRight } from "lucide-react";
import { ACHIEVEMENTS_DATA } from "../data/portfolioData";

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20 border-b border-[#e7e3da]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 gap-4 pb-6 border-b border-[#e7e3da]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#9e472a] block mb-2 font-medium">
            06 / Milestones
          </span>
          <h2
            id="achievements-heading"
            className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight"
          >
            Hackathons &amp; Activities
          </h2>
        </div>
        <p className="text-stone-500 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
          Verified university sprints, techfest competitions, and technical achievements.
        </p>
      </div>

      {/* Editorial Timeline */}
      <div className="space-y-6">
        {ACHIEVEMENTS_DATA.map((item, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-xl bg-white border border-[#e7e3da] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-stone-400/80 transition-colors"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#faf8f5] text-[#9e472a] border border-[#eeebe3]">
                  {item.year}
                </span>
                <span className="font-mono text-xs text-stone-600 bg-stone-100/80 px-2.5 py-0.5 rounded border border-stone-200">
                  Track: {item.track}
                </span>
              </div>
              <span className="font-mono text-xs text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-medium">
                {item.badge}
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-900 tracking-tight mb-2">
              {item.event}
            </h3>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
              {item.action}
            </p>

            <div className="pt-3 border-t border-[#f0ece4] flex items-center gap-2 text-xs text-stone-500 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified university participation &amp; recognition</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
