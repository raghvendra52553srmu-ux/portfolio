import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Education
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Academic foundation in computer applications and software concepts.
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-zinc-800">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-mono mb-2">
              {EDUCATION_DATA.status}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {EDUCATION_DATA.institution}
            </h3>

            <p className="text-base text-cyan-400 font-medium mt-1">
              {EDUCATION_DATA.degree}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                {EDUCATION_DATA.period}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                {EDUCATION_DATA.location}
              </span>
            </div>
          </div>
        </div>

        <p className="py-5 text-sm text-zinc-300 leading-relaxed max-w-3xl">
          {EDUCATION_DATA.description}
        </p>

        {/* Coursework */}
        <div className="pt-4 border-t border-zinc-800">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3 font-semibold">
            Key Coursework &amp; Subjects:
          </span>
          <div className="flex flex-wrap gap-2">
            {EDUCATION_DATA.keyCourses.map((course, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-xs text-zinc-200"
              >
                {course}
              </span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
