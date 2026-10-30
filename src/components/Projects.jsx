import React, { useState } from "react";
import { ArrowUpRight, AlertCircle, CheckCircle2, Layers, Info, ExternalLink } from "lucide-react";
import { Github } from "./Icons";
import { PROJECTS_DATA } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import QuizDemoModal from "./QuizDemoModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [quizModalOpen, setQuizModalOpen] = useState(false);

  const heroProject = PROJECTS_DATA.find((p) => p.isFeatured);
  const otherProjects = PROJECTS_DATA.filter((p) => !p.isFeatured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20 border-b border-[#e7e3da]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 gap-4 pb-6 border-b border-[#e7e3da]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#9e472a] block mb-2 font-medium">
            01 / Selected Work
          </span>
          <h2 id="projects-heading" className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Featured Projects &amp; Systems
          </h2>
        </div>
        <p className="text-stone-500 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
          Five verified public repositories designed to address real operational friction in healthcare triage, academic resources, and software tools.
        </p>
      </div>

      {/* 01 — FEATURED CASE STUDY: MEDIKIOSK */}
      {heroProject && (
        <article className="mb-14 rounded-xl bg-white border border-[#e7e3da] p-6 sm:p-9 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          {/* Top category rule */}
          <div className="flex flex-wrap items-baseline justify-between gap-3 pb-4 mb-6 border-b border-[#f0ece4]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-[#9e472a] bg-[#fbf4f0] px-2.5 py-0.5 rounded border border-[#f0ded5]">
                Case Study {heroProject.number}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
                {heroProject.category}
              </span>
            </div>
            <span className="text-xs font-mono text-stone-400">
              Healthcare OPD Triage &amp; Queue Management
            </span>
          </div>

          {/* Title & Headline */}
          <div className="max-w-3xl mb-6">
            <h3 className="font-serif text-2xl sm:text-4xl font-normal text-stone-900 tracking-tight mb-3">
              {heroProject.title}
            </h3>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
              {heroProject.shortDesc}
            </p>
          </div>

          {/* Context & Contribution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-lg bg-[#faf8f5] border border-[#eeebe3]">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-stone-700 mb-2">
                <AlertCircle className="w-3.5 h-3.5 text-[#9e472a]" />
                <span>CONTEXT &amp; OPERATIONAL PROBLEM</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {heroProject.context || heroProject.problemSolved}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#fbf9f6] border border-[#eeebe3]">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#9e472a] mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>MY ROLE &amp; ARCHITECTURAL CONTRIBUTION</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {heroProject.myContribution || heroProject.solution}
              </p>
            </div>
          </div>

          {/* Core System Features */}
          <div className="mb-8">
            <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500 mb-3 font-semibold flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#9e472a]" />
              <span>Core Kiosk Modules Built:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {heroProject.features.map((feat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-[#faf8f5] border border-[#eeebe3] text-xs"
                >
                  <div className="font-semibold text-stone-800 mb-0.5">
                    {feat.title}
                  </div>
                  <div className="text-stone-500 text-[11px] leading-relaxed">
                    {feat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500 mb-2.5 font-semibold">
              Tools &amp; Infrastructure:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {heroProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#f5f2eb] border border-[#e7e3da] text-xs font-mono text-stone-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-5 border-t border-[#f0ece4] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-stone-500">
              Repository: raghvendra52553srmu-ux/Medikiosk
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedProject(heroProject)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-medium text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/70 border border-stone-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9e472a]"
              >
                <Info className="w-3.5 h-3.5 text-[#9e472a]" />
                <span>Full Case Narrative</span>
              </button>

              <a
                href={heroProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9e472a]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-300" />
              </a>
            </div>
          </div>
        </article>
      )}

      {/* Grid of Other Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDetails={setSelectedProject}
            onOpenQuizDemo={() => setQuizModalOpen(true)}
          />
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenQuiz={() => setQuizModalOpen(true)}
        />
      )}

      {/* Interactive Quiz Mini Demo */}
      {quizModalOpen && (
        <QuizDemoModal
          isOpen={quizModalOpen}
          onClose={() => setQuizModalOpen(false)}
        />
      )}
    </section>
  );
}
