import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, AlertCircle, CheckCircle2, Layers, Info } from "lucide-react";
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
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-zinc-800/80 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERED SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Featured Projects
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
            Practical digital tools built to solve genuine workflow problems in healthcare,
            higher education, and student productivity.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-500">
          Showing 5 Verified Repositories
        </div>
      </div>

      {/* 01 — FEATURED PROJECT: MEDIKIOSK */}
      {heroProject && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700/80 transition-all p-6 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          {/* Subtle accent glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="font-mono text-sm font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-md border border-sky-500/20">
              {heroProject.number}
            </span>
            <span className="px-3 py-1 rounded-md bg-zinc-800/80 text-zinc-200 border border-zinc-700/60 text-xs font-semibold">
              Featured Project
            </span>
            <span className="text-xs font-mono text-zinc-400">
              Healthcare OPD Triage &amp; Queue Management
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-100 tracking-tight mb-3">
            {heroProject.title}
          </h3>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-4xl mb-6">
            {heroProject.shortDesc}
          </p>

          {/* Problem & Solution banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 mb-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                PROBLEM SOLVED
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {heroProject.problemSolved}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 mb-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                ENGINEERED SOLUTION
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {heroProject.solution}
              </p>
            </div>
          </div>

          {/* Relevant Features List */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 font-semibold flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              Core System Features:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {heroProject.features.map((feat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-zinc-950/50 border border-zinc-800/70 text-xs"
                >
                  <div className="font-semibold text-zinc-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    {feat.title}
                  </div>
                  <div className="text-zinc-400 text-[11px] mt-1 leading-relaxed">
                    {feat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5 font-semibold">
              Technologies Used:
            </div>
            <div className="flex flex-wrap gap-2">
              {heroProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-zinc-500 font-mono">
              Repository: raghvendra52553srmu-ux/Medikiosk
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedProject(heroProject)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-700 transition-colors"
              >
                <Info className="w-4 h-4 text-sky-400" />
                <span>Full Project Experience</span>
              </button>

              <a
                href={heroProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>View MediKiosk on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
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
