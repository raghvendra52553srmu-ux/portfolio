import React from 'react';
import { GraduationCap, Target, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const profileCards = [
    {
      title: "Education",
      primary: "BCA (Bachelor of Computer Applications)",
      secondary: "Shri Ramswaroop Memorial University (SRMU), Lucknow",
      badge: "2025–2027",
      icon: GraduationCap,
    },
    {
      title: "Current Focus",
      primary: "Web Development & Data Analytics",
      secondary: "React, Python, Power BI, SQL, and Excel",
      badge: "Active",
      icon: Target,
    },
    {
      title: "Location",
      primary: "Lucknow, Uttar Pradesh",
      secondary: "Open to internships in Lucknow & remote opportunities",
      badge: "India",
      icon: MapPin,
    },
    {
      title: "Interests",
      primary: "Hackathons & Building Tools",
      secondary: "Turning theoretical concepts into working prototypes",
      badge: "Builder",
      icon: Sparkles,
    }
  ];

  const developingSkills = [
    "Python",
    "Power BI",
    "Excel",
    "SQL",
    "JavaScript",
    "React",
    "HTML/CSS",
    "Data Analytics"
  ];

  return (
    <section id="about" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          About Me
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          A quick background on who I am and what I work on.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Narrative text */}
        <div className="lg:col-span-6 space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p>
            I'm <strong className="text-white font-semibold">Raghvendra Pandey</strong>, currently pursuing my BCA at{' '}
            <strong className="text-white font-semibold">Shri Ramswaroop Memorial University, Lucknow</strong>.
          </p>
          <p className="text-zinc-400">
            Rather than sticking strictly to classroom theory, I learn best by building real software. 
            My interests revolve around software development, frontend engineering with React, and data analytics 
            using tools like Python, Power BI, and Excel.
          </p>
          <p className="text-zinc-400">
            I regularly take part in university hackathons and tech events like SRMU VIVEKA. 
            Collaborating with peers and building practical solutions under time limits has been one of the fastest ways 
            I've improved my programming fundamentals and Git workflows.
          </p>

          {/* Currently Learning Chips */}
          <div className="pt-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2 font-medium">
              Technologies I'm actively using &amp; learning:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {developingSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: 4 Clean Profile Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {profileCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm font-semibold text-white leading-snug">
                    {card.primary}
                  </p>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mt-2 pt-2 border-t border-zinc-800/80">
                  {card.secondary}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
