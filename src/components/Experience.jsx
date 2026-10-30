import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { EXPERIENCE_DATA } from "../data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20 border-b border-[#e7e3da]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 gap-4 pb-6 border-b border-[#e7e3da]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#9e472a] block mb-2 font-medium">
            04 / Timeline
          </span>
          <h2 id="experience-heading" className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Experience &amp; Engineering Work
          </h2>
        </div>
        <p className="text-stone-500 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
          Verified internship and practical development history without exaggerated claims.
        </p>
      </div>

      {/* Timeline entries */}
      <div className="space-y-6">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <article
            key={idx}
            className="p-6 sm:p-8 rounded-xl bg-white border border-[#e7e3da] shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-[#fbf4f0] text-[#9e472a] border border-[#f0ded5]">
                  {exp.year}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
                  {exp.type}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#9e472a]" />
                <span>{exp.location}</span>
              </div>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-900 mb-1">
              {exp.role}
            </h3>

            <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-4 font-semibold">
              {exp.organization}
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-5 max-w-3xl">
              {exp.description}
            </p>

            {/* Bullets */}
            {(exp.points || exp.highlights) && (
              <div className="space-y-2 pt-4 border-t border-[#f0ece4]">
                {(exp.points || exp.highlights).map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#9e472a] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
