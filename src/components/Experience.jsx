import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { EXPERIENCE_DATA } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-12 border-b border-zinc-800/80 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>PROFESSIONAL TIMELINE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Experience &amp; Practical Work
        </h2>
        <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
          Verified internship and application engineering history without exaggerated titles.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.1 }}
            className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-zinc-800 text-sky-400 border border-zinc-700">
                  {exp.year}
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                  {exp.type}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{exp.location}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-zinc-100 mb-1">
              {exp.role}
            </h3>

            <div className="text-sm font-semibold text-zinc-300 mb-3">
              {exp.organization}
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5 max-w-3xl">
              {exp.description}
            </p>

            {/* Bullets */}
            {(exp.points || exp.highlights) && (
              <div className="space-y-2 pt-4 border-t border-zinc-800/80">
                {(exp.points || exp.highlights).map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
