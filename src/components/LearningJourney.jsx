import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, TrendingUp, CheckCircle, Clock } from "lucide-react";
import { LEARNING_AREAS } from "../data/portfolioData";

export default function LearningJourney() {
  return (
    <section id="learning" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-12 border-b border-zinc-800/80 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>ACTIVE GROWTH</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          What I'm Learning
        </h2>
        <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
          A transparent look at skills and technologies I am actively sharpening. Communicating
          genuine continuous progress rather than pretending to have mastered everything.
        </p>
      </div>

      {/* Roadmap / Learning Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LEARNING_AREAS.map((area, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-500/20">
                  Focus {idx + 1}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/20">
                  <Clock className="w-3 h-3" />
                  {area.stage}
                </span>
              </div>

              <h3 className="text-lg font-bold text-zinc-100 mb-2">
                {area.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                {area.description}
              </p>
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2 font-semibold">
                Milestones &amp; Subtopics:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {area.topics.map((topic, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-zinc-950/70 border border-zinc-800 text-xs font-mono text-zinc-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
