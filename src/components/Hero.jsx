import React from "react";
import { ArrowDown, MessageCircle, FileText } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Hero({ onOpenResume }) {
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(
    PERSONAL_INFO.whatsappPrefilledMessage
  )}`;

  return (
    <section
      id="home"
      aria-label="Introduction and overview"
      className="pt-28 pb-14 md:pt-36 md:pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#e7e3da]"
    >
      <div className="max-w-4xl">
        {/* Quiet metadata kicker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-wider text-[#9e472a] font-medium">
            Personal Portfolio &amp; Index
          </span>
          <span className="text-stone-300" aria-hidden="true">•</span>
          <span className="text-xs text-stone-500 font-mono">
            Raghvendra Pandey — Lucknow, India
          </span>
        </div>

        {/* Confident Editorial Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-tight text-stone-900 leading-[1.18] mb-6">
          Designing and engineering practical software, web systems, and data workflows through real projects.
        </h1>

        {/* Clear Restrained Context */}
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans max-w-2xl mb-8">
          I'm a BCA student at <strong className="text-stone-900 font-semibold">Shri Ramswaroop Memorial University (SRMU), Lucknow</strong>. Rather than treating computer science purely as theoretical coursework, I focus on practical execution — building tools, writing code, and analyzing datasets.
        </p>

        {/* Primary Actions: Viewing Work & WhatsApp / Contact */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#9e472a] hover:bg-[#853a21] text-white text-xs font-semibold tracking-wide transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9e472a] focus-visible:ring-offset-2"
          >
            <span>View Selected Work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#ffffff] hover:bg-stone-50 border border-[#e7e3da] text-stone-800 hover:text-[#9e472a] text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9e472a]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-stone-600 hover:text-stone-900 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9e472a] rounded"
          >
            <FileText className="w-3.5 h-3.5 text-stone-400" />
            <span>Resume (PDF)</span>
          </button>

          <div className="flex items-center gap-3 ml-auto text-xs font-mono text-stone-500">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors"
            >
              GitHub ↗
            </a>
            <span className="text-stone-300">/</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Factual Ledger Strip: Opening screen summary */}
        <div className="pt-6 border-t border-[#e7e3da] grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div>
            <div className="font-mono text-[10px] uppercase text-stone-400 mb-1">Status</div>
            <div className="font-medium text-stone-800">BCA (2025 – Present)</div>
            <div className="text-stone-500 text-[11px]">SRMU Lucknow</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase text-stone-400 mb-1">Focus</div>
            <div className="font-medium text-stone-800">Full-Stack &amp; Analytics</div>
            <div className="text-stone-500 text-[11px]">React, Python, SQL, Power BI</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase text-stone-400 mb-1">Built Works</div>
            <div className="font-medium text-stone-800">5 Active Repositories</div>
            <div className="text-stone-500 text-[11px]">MediKiosk, Gurukul, Tools</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase text-stone-400 mb-1">Certification</div>
            <div className="font-medium text-stone-800">Data Science with AI</div>
            <div className="text-stone-500 text-[11px]">IITM Pravartak • Grade A</div>
          </div>
        </div>
      </div>
    </section>
  );
}
