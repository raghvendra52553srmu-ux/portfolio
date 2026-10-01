import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function LinkedInSection() {
  return (
    <section className="py-16 relative bg-[#07090e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-blue-500/30 p-8 sm:p-12 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-mono text-blue-300 mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>PROFESSIONAL NETWORK</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Let's Connect
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              I'm always open to learning, collaborating, building projects, and connecting with people in technology.
            </p>

            <p className="text-xs font-mono text-cyan-400 mt-2">
              Interested in internship roles, hackathon collaborations, and tech discussions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>View GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
