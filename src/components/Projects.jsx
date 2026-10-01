import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Github } from './Icons';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import QuizDemoModal from './QuizDemoModal';

export default function Projects() {
  const [quizModalOpen, setQuizModalOpen] = useState(false);

  const heroProject = PROJECTS_DATA.find((p) => p.isFeatured);
  const otherProjects = PROJECTS_DATA.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Featured Projects
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Practical software solutions built for healthcare, education, and learning workflows.
        </p>
      </div>

      {/* HERO PROJECT: MediKiosk */}
      {heroProject && (
        <div className="mb-14 rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6 sm:p-8">
          
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-mono font-medium">
              Featured Project
            </span>
            <span className="text-xs font-mono text-zinc-400">
              Healthcare OPD Triage &amp; Queue Management
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {heroProject.title}
          </h3>

          <p className="text-sm sm:text-base text-cyan-300/90 font-medium mb-3">
            {heroProject.tagline}
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl mb-6">
            {heroProject.description}
          </p>

          {/* Features Grid */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 font-semibold">
              System Capabilities &amp; Architecture:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {heroProject.features.map((feat) => (
                <div
                  key={feat.title}
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800/80 text-xs"
                >
                  <div className="font-semibold text-zinc-200">{feat.title}</div>
                  <div className="text-zinc-400 text-[11px] mt-0.5 leading-snug">{feat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
              Technologies:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {heroProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700/60 text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
            <a
              href={heroProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View MediKiosk on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      )}

      {/* Other Projects Grid */}
      <div className="mb-12">
        <h3 className="text-lg font-bold text-white mb-6">
          Other Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenQuizDemo={() => setQuizModalOpen(true)}
            />
          ))}
        </div>
      </div>

      {/* GitHub CTA */}
      <div className="text-center pt-4">
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-200 transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>View all repositories on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
        </a>
      </div>

      {/* Quiz Game Interactive Demo */}
      <QuizDemoModal
        isOpen={quizModalOpen}
        onClose={() => setQuizModalOpen(false)}
      />
    </section>
  );
}
