import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, GraduationCap, Sparkles } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";
import profilePhoto from "../assets/profile.jpg";

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Brand Motto Banner */}
      <div className="mb-6 flex items-center justify-start">
        <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 bg-zinc-900/60 px-3 py-1 rounded-full border border-zinc-800">
          {PERSONAL_INFO.brandMotto}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* LEFT COLUMN: Clean Personal Pitch */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to Internships • Projects • Collaboration</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-100 tracking-tight leading-[1.15] mb-4">
            Hi, I'm <span className="text-white">Raghvendra Pandey</span>.
          </h1>

          {/* Role Presentation */}
          <p className="text-base sm:text-lg text-sky-400 font-medium mb-4">
            BCA Student • Developer • Data Analytics Enthusiast
          </p>

          {/* Short Introduction */}
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mb-8">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
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
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Download Resume</span>
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
              SRMU Lucknow (2025 – Present)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              Lucknow, India
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Authentic Professional Photo Frame */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-64 sm:w-72 md:w-80 aspect-square">
            {/* Subtle border & soft shadow frame */}
            <div className="relative w-full h-full rounded-2xl bg-zinc-900/90 border border-zinc-700/60 p-2.5 shadow-2xl overflow-hidden group">
              <div className="w-full h-full rounded-xl overflow-hidden bg-zinc-950">
                <img
                  src={profilePhoto}
                  alt="Raghvendra Pandey - BCA Student & Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* University & City badge */}
            <div className="absolute -bottom-3 right-4 px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-700 text-[11px] font-mono text-zinc-300 shadow-lg">
              SRMU • Lucknow
            </div>
          </div>
        </div>
      </div>

      {/* Factual Highlights (No invented numbers) */}
      <div className="mt-14 pt-8 border-t border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-4">
        {PERSONAL_INFO.highlights?.map((hl, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80"
          >
            <div className="text-sm font-semibold text-zinc-200 font-mono">
              {hl.title}
            </div>
            <div className="text-xs text-zinc-400 mt-1">
              {hl.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
