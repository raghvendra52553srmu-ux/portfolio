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
    <section id="education" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-12 border-b border-zinc-800/80 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>ACADEMIC FOUNDATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Education
        </h2>
        <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
          Formal university degree in computer applications paired with self-directed software engineering.
        </p>
      </div>

      {/* University Card with subtle academic visual styling */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 p-6 sm:p-8 lg:p-10 transition-all relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-zinc-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Currently Pursuing</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100">
              Shri Ramswaroop Memorial University (SRMU)
            </h3>

            <p className="text-base text-sky-400 font-medium mt-1">
              BCA — Bachelor of Computer Applications
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                2025 – Present
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                Lucknow, Uttar Pradesh, India
              </span>
            </div>
          </div>

          <div className="shrink-0 p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hidden sm:flex flex-col items-center justify-center min-w-[130px] text-center">
            <Building2 className="w-6 h-6 text-sky-400 mb-1" />
            <span className="text-xs font-mono font-bold text-zinc-200">SRMU</span>
            <span className="text-[10px] text-zinc-400 font-mono">Estd. 2012</span>
          </div>
        </div>

        <p className="py-6 text-sm text-zinc-300 leading-relaxed max-w-4xl">
          Studying core computer science and applications, including structured programming, relational databases,
          algorithms, and web systems. Supplementing curriculum with hands-on open-source development, competitive hackathons,
          and certified data science training under IITM Pravartak and Skill India.
        </p>

        {/* Coursework */}
        <div className="pt-6 border-t border-zinc-800/80">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3 font-semibold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            Key Academic Coursework &amp; Subject Areas:
          </span>
          <div className="flex flex-wrap gap-2">
            {subjects.map((course, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-zinc-950/60 border border-zinc-800 text-xs text-zinc-300 font-mono"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
