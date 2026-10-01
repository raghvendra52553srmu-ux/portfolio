import React from 'react';
import { X, Download, Printer, Mail, MapPin } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO, EDUCATION_DATA, PROJECTS_DATA, SKILLS_DATA } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="w-full max-w-3xl rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl relative my-auto overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-zinc-800 bg-zinc-900">
          <div className="flex items-center gap-3">
            <img
              src={profilePhoto}
              alt="Raghvendra Pandey"
              className="w-10 h-10 rounded-lg object-cover object-top border border-zinc-700"
            />
            <div>
              <h3 className="text-sm font-bold text-white">Raghvendra Pandey — Resume</h3>
              <p className="text-xs text-zinc-400 font-mono">BCA Student • Developer • Data Analytics</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200"
              title="Print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-300 font-sans text-xs sm:text-sm bg-zinc-950">
          
          {/* Header section in resume */}
          <div className="border-b border-zinc-800 pb-5">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-cyan-400 font-medium text-sm mt-0.5">
              BCA Student • Software Developer • Aspiring Data Analyst
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
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-zinc-300 hover:text-white">
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-zinc-300 hover:text-white">
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-2 border-b border-zinc-800 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-white text-sm">{EDUCATION_DATA.institution}</h3>
                <p className="text-zinc-300">{EDUCATION_DATA.degree}</p>
                <p className="text-xs text-zinc-400 mt-0.5">{EDUCATION_DATA.description}</p>
              </div>
              <div className="text-right font-mono text-xs text-cyan-400 whitespace-nowrap ml-4">
                {EDUCATION_DATA.period}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-2 border-b border-zinc-800 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5">
              {SKILLS_DATA.map((cat) => (
                <div key={cat.category} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="text-zinc-200 font-medium min-w-[150px]">{cat.category}:</span>
                  <span className="text-zinc-400 font-mono text-xs">
                    {cat.items.map((i) => i.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-2 border-b border-zinc-800 pb-1">
              Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS_DATA.slice(0, 3).map((p) => (
                <div key={p.id} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div className="flex justify-between items-start mb-0.5">
                    <h3 className="font-semibold text-white text-sm">{p.title}</h3>
                    <span className="text-[11px] font-mono text-zinc-500">{p.category}</span>
                  </div>
                  <p className="text-xs text-zinc-300 mb-1.5">{p.tagline}</p>
                  <p className="text-[11px] font-mono text-zinc-400">
                    Tech: {p.techStack.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-2 border-b border-zinc-800 pb-1">
              Hackathons &amp; Activities
            </h2>
            <ul className="list-disc list-inside space-y-1 text-zinc-300 text-xs">
              <li>Active participant in SRMU VIVEKA Techfest &amp; university hackathon sprints.</li>
              <li>Engineered MediKiosk, an AI-assisted hospital triage flow with Socket.IO and OCR scanning.</li>
              <li>Hands-on exploration in Data Analytics with Python (Pandas/Matplotlib) and Microsoft Power BI.</li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-3.5 border-t border-zinc-800 bg-zinc-900 flex items-center justify-between text-xs text-zinc-400 font-mono">
          <span>Available for Developer &amp; Data Analytics Internships</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
