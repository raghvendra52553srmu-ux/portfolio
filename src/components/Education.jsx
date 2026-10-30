import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen, Building2 } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Education() {
  const subjects = [
    "Programming in C / C++",
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming with Python",
    "Computer Networks & OS",
    "Web Development Fundamentals"
  ];

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20 border-b border-[#e7e3da]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 gap-4 pb-6 border-b border-[#e7e3da]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#9e472a] block mb-2 font-medium">
            Academic Foundation
          </span>
          <h2 id="education-heading" className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Formal Education
          </h2>
        </div>
        <p className="text-stone-500 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
          University degree in computer applications paired with self-directed software building.
        </p>
      </div>

      {/* University Card */}
      <div className="rounded-xl bg-white border border-[#e7e3da] p-6 sm:p-9 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#f0ece4]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#f0fdf4] text-emerald-800 border border-[#bbf7d0] text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Currently Pursuing</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
              Shri Ramswaroop Memorial University (SRMU)
            </h3>

            <p className="text-sm sm:text-base text-[#9e472a] font-medium mt-1">
              BCA — Bachelor of Computer Applications
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-mono text-stone-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#9e472a]" />
                2025 – Present
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#9e472a]" />
                Lucknow, Uttar Pradesh, India
              </span>
            </div>
          </div>

          <div className="shrink-0 p-3.5 rounded-lg bg-[#faf8f5] border border-[#eeebe3] hidden sm:flex flex-col items-center justify-center min-w-[120px] text-center">
            <Building2 className="w-5 h-5 text-[#9e472a] mb-1" />
            <span className="text-xs font-mono font-bold text-stone-800">SRMU</span>
            <span className="text-[10px] text-stone-400 font-mono">Lucknow</span>
          </div>
        </div>

        <p className="py-6 text-sm text-stone-600 leading-relaxed max-w-4xl font-sans">
          Studying core computer science principles, relational database management, structured programming, and web architectures. Actively supplementing university curriculum with open-source engineering, hackathons, and certified data science training under IITM Pravartak and Skill India.
        </p>

        {/* Coursework */}
        <div className="pt-6 border-t border-[#f0ece4]">
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block mb-3 font-semibold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#9e472a]" />
            Key Academic Coursework &amp; Subject Areas:
          </span>
          <div className="flex flex-wrap gap-2">
            {subjects.map((course, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded bg-[#f5f2eb] border border-[#e7e3da] text-xs text-stone-700 font-mono"
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
