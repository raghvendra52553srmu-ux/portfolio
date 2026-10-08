import React from "react";
import { X, Download, Printer, Mail, MapPin, Award, Briefcase, GraduationCap } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import {
  PERSONAL_INFO,
  PROJECTS_DATA,
  SKILLS_CATEGORIES,
  CERTIFICATES_DATA,
  EXPERIENCE_DATA
} from "../data/portfolioData";
import profilePhoto from "../assets/profile.jpg";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-3xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl relative my-auto overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-zinc-800 bg-zinc-900/80">
          <div className="flex items-center gap-3">
            <img
              src={profilePhoto}
              alt="Raghvendra Pandey"
              className="w-10 h-10 rounded-lg object-cover object-top border border-zinc-700"
            />
            <div>
              <h3 className="text-sm font-bold text-white">Raghvendra Pandey — Resume</h3>
              <p className="text-xs text-zinc-400 font-mono">BCA Student • Developer • Data Analytics Enthusiast</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 ml-1 transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-300 font-sans text-xs sm:text-sm bg-zinc-950">
          {/* Header section in resume */}
          <div className="border-b border-zinc-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sky-400 font-medium text-sm mt-0.5">
              BCA Student • Developer • Data Analytics Enthusiast
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                {PERSONAL_INFO.email}
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-zinc-300 hover:text-white"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-zinc-300 hover:text-white"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-2 border-b border-zinc-800 pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-white text-sm">
                  Shri Ramswaroop Memorial University (SRMU), Lucknow
                </h3>
                <p className="text-zinc-300 text-xs">
                  BCA — Bachelor of Computer Applications
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Focus: Software Development, Data Structures, Relational Databases &amp; Analytics
                </p>
              </div>
              <div className="text-right font-mono text-xs text-sky-400 whitespace-nowrap ml-4">
                2025 – Present
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-2 border-b border-zinc-800 pb-1 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-sky-400" />
              Experience &amp; Practical Work
            </h2>
            <div className="space-y-3">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="flex justify-between items-start mb-0.5">
                    <h3 className="font-semibold text-white text-xs sm:text-sm">
                      {exp.role}
                    </h3>
                    <span className="text-[11px] font-mono text-sky-400 ml-2 shrink-0">
                      {exp.year}
                    </span>
                  </div>
                  <div className="text-xs text-zinc-400 font-medium mb-1">
                    {exp.organization} • {exp.type}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-2">
                    {exp.description}
                  </p>
                  {(exp.points || exp.highlights) && (
                    <ul className="list-disc list-inside space-y-0.5 text-zinc-300 text-[11px]">
                      {(exp.points || exp.highlights).map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-2 border-b border-zinc-800 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5">
              {SKILLS_CATEGORIES.map((cat) => (
                <div key={cat.category} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-zinc-200 font-medium min-w-[170px] text-xs">
                    {cat.category}:
                  </span>
                  <span className="text-zinc-400 font-mono text-xs">
                    {cat.skills.map((s) => s.name).join(" • ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-2 border-b border-zinc-800 pb-1">
              Engineered Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS_DATA.slice(0, 3).map((p) => (
                <div key={p.id} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <div className="flex justify-between items-start mb-0.5">
                    <h3 className="font-semibold text-white text-xs sm:text-sm">
                      {p.number} — {p.title}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400">{p.category}</span>
                  </div>
                  <p className="text-xs text-zinc-300 mb-1.5">{p.shortDesc}</p>
                  <p className="text-[11px] font-mono text-zinc-400">
                    Stack: {p.techStack.join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-2 border-b border-zinc-800 pb-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-sky-400" />
              Verified Certifications
            </h2>
            <div className="space-y-2">
              {CERTIFICATES_DATA.map((c) => (
                <div key={c.id} className="text-xs text-zinc-300 flex items-start justify-between gap-3">
                  <div>
                    <span className="font-semibold text-zinc-100">{c.title}</span>
                    <span className="text-zinc-400"> — {c.issuer}</span>
                    {c.credentialId && (
                      <span className="text-[11px] font-mono text-zinc-500 ml-1.5">
                        (ID: {c.credentialId})
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-zinc-400 shrink-0 text-[11px]">{c.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 border-t border-zinc-800 bg-zinc-900/80 flex items-center justify-between text-xs text-zinc-400 font-mono">
          <span>Open to Developer &amp; Data Analytics Internships</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
