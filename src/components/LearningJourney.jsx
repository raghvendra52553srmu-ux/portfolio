import React from "react";
import { Clock } from "lucide-react";
import { LEARNING_AREAS } from "../data/portfolioData";

export default function LearningJourney() {
  return (
    <section
      id="learning"
      aria-labelledby="learning-heading"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20 border-b border-[#e7e3da]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 gap-4 pb-6 border-b border-[#e7e3da]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#9e472a] block mb-2 font-medium">
            Active Study
          </span>
          <h2
            id="learning-heading"
            className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight"
          >
            What I'm Learning
          </h2>
        </div>
        <p className="text-stone-500 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
          A transparent look at tools and methodologies I am currently deepening — focusing on continuous learning over claiming false mastery.
        </p>
      </div>

      {/* Learning Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LEARNING_AREAS.map((area, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-xl bg-white border border-[#e7e3da] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#9e472a] bg-[#faf8f5] px-2.5 py-0.5 rounded border border-[#eeebe3]">
                  Focus {idx + 1}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded border border-stone-200">
                  <Clock className="w-3 h-3 text-[#9e472a]" />
                  {area.stage}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-normal tracking-tight mb-2">
                {area.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5 font-sans">
                {area.description}
              </p>
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-2 font-semibold">
                Milestones &amp; Subtopics:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {area.topics.map((topic, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-[#faf8f5] text-stone-700 border border-[#eeebe3]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
