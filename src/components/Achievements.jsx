import React from "react";
import { motion } from "framer-motion";
import { Trophy, CheckCircle2, Flag, Sparkles, Terminal } from "lucide-react";
import { ACHIEVEMENTS_DATA } from "../data/portfolioData";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-12 border-b border-zinc-800/80 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
          <Trophy className="w-3.5 h-3.5" />
          <span>VERIFIED MILESTONES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Hackathons &amp; Achievements
        </h2>
        <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
          Verified university sprints, techfest competitions, and open-source milestones.
        </p>
      </div>

      {/* Modern Achievement Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-zinc-800/90 space-y-10">
        {ACHIEVEMENTS_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Visual timeline node marker */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-sky-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(56,189,248,0.4)]" />

            {/* Achievement Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-zinc-800 text-sky-400 border border-zinc-700">
                  {item.year}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                    Track: {item.track}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.badge}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors mb-2">
                {item.event}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                {item.action}
              </p>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Activity &amp; Participation</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
