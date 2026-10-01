import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, MapPin, GraduationCap } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Clean Personal Pitch */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to Internships &amp; Collaborations</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            Hi, I'm <span className="text-zinc-100">Raghvendra Pandey</span>.
          </h1>

          {/* Role & University */}
          <p className="text-base sm:text-lg text-cyan-400 font-medium mb-4">
            BCA Student at SRMU, Lucknow • Developer • Data Analytics
          </p>

          {/* Authentic Description */}
          <p className="text-base text-zinc-400 leading-relaxed max-w-xl mb-8">
            I build practical web applications, analyze data, and learn by shipping real projects. 
            Currently pursuing my Bachelor of Computer Applications at Shri Ramswaroop Memorial University, Lucknow.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors shadow-sm"
            >
              <span>View My Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-medium transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Resume</span>
            </button>

            <div className="flex items-center gap-2 ml-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Understated Info Strip */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-4 border-t border-zinc-800/80">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
              SRMU Lucknow (2025–2027)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              Lucknow, India
            </span>
          </div>

        </div>

        {/* RIGHT COLUMN: Clean, Grounded Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-64 sm:w-72 md:w-80 aspect-square">
            
            {/* Subtle glow border */}
            <div className="relative w-full h-full rounded-2xl bg-zinc-900 border border-zinc-700/60 p-2 shadow-xl overflow-hidden">
              <div className="w-full h-full rounded-xl overflow-hidden bg-zinc-950">
                <img
                  src={profilePhoto}
                  alt="Raghvendra Pandey - BCA Student & Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Simple clean badge in corner */}
            <div className="absolute -bottom-3 right-4 px-3 py-1 rounded-lg bg-zinc-900/95 border border-zinc-700 text-[11px] font-mono text-zinc-300 shadow-md">
              SRMU • Lucknow
            </div>

          </div>
        </div>

      </div>

      {/* Honest Stats Grid */}
      <div className="mt-14 pt-8 border-t border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-4">
        {PERSONAL_INFO.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80"
          >
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">
              {stat.value}
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
