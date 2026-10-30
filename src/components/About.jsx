import React from "react";
import { GraduationCap, MapPin, Compass, Award } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import profilePhoto from "../assets/profile.jpg";

export default function About() {
  const interestAreas = [
    "Full-Stack Web Development (React & JavaScript)",
    "Data Analytics (Python, Power BI, SQL)",
    "API & Workflow Automation",
    "Triage & Queue Architecture (MediKiosk)",
    "Hackathon Prototyping (SRMU Viveka 5.0)",
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20 border-b border-[#e7e3da]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 gap-4 pb-6 border-b border-[#e7e3da]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#9e472a] block mb-2 font-medium">
            02 / About
          </span>
          <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Background &amp; Philosophy
          </h2>
        </div>
        <p className="text-stone-500 text-xs sm:text-sm max-w-md font-sans leading-relaxed">
          How I approach software engineering, continuous learning, and practical problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Sized Authentic Portrait & Quick Facts */}
        <div className="md:col-span-4 flex flex-col items-start">
          <div className="w-full max-w-[240px] rounded-lg overflow-hidden border border-[#e7e3da] bg-white p-2 shadow-sm mb-4">
            <img
              src={profilePhoto}
              alt="Raghvendra Pandey - BCA Student and Developer"
              className="w-full aspect-[4/5] object-cover object-top rounded"
              loading="lazy"
            />
          </div>

          <div className="w-full max-w-[240px] space-y-1.5 pb-4 border-b border-[#e7e3da]">
            <h3 className="font-serif text-lg font-medium text-stone-900">
              Raghvendra Pandey
            </h3>
            <p className="text-xs text-stone-600 font-sans">
              BCA Student • Developer
            </p>
            <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono">
              <MapPin className="w-3 h-3 text-[#9e472a]" />
              <span>Lucknow, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Quick Ledger Facts */}
          <div className="w-full max-w-[240px] pt-4 space-y-3 text-xs">
            <div>
              <span className="font-mono text-[10px] uppercase text-stone-400 block mb-0.5">
                University
              </span>
              <span className="text-stone-800 font-medium leading-snug block">
                Shri Ramswaroop Memorial University (SRMU)
              </span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-stone-400 block mb-0.5">
                Approach
              </span>
              <span className="text-stone-800 font-medium block">
                Learning by Building Real Projects
              </span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-stone-400 block mb-0.5">
                Certifications
              </span>
              <span className="text-stone-800 font-medium block">
                IITM Pravartak &amp; Skill India (Grade A)
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Narrative */}
        <div className="md:col-span-8 space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            I am currently pursuing my <strong className="text-stone-950 font-semibold">Bachelor of Computer Applications (BCA)</strong> at{" "}
            <strong className="text-stone-950 font-semibold">Shri Ramswaroop Memorial University (SRMU), Lucknow</strong>. 
            From the outset, my focus has been on practical engineering rather than passive coursework — writing code, deploying tools, and testing systems against real user requirements.
          </p>

          <p>
            My core technical focus bridges <strong className="text-stone-950 font-semibold">software &amp; web engineering</strong> with{" "}
            <strong className="text-stone-950 font-semibold">data analytics</strong>. I construct modular web applications with React, modern JavaScript, and Tailwind CSS, while also utilizing Python, SQL, Excel, and Microsoft Power BI to extract actionable patterns from structured datasets.
          </p>

          <p>
            Whether it is architecting an OPD clinical triage kiosk like <strong className="text-stone-950 font-semibold">MediKiosk</strong> to streamline hospital queues, building student productivity platforms, or collaborating under time constraints during 48-hour hackathons, my goal is consistent: engineer dependable digital tools that address genuine everyday operational friction.
          </p>

          {/* Core Focus Areas */}
          <div className="pt-4 border-t border-[#e7e3da]">
            <h4 className="font-mono text-xs uppercase tracking-wider text-stone-500 mb-3 font-semibold">
              Primary Technical Areas &amp; Activity:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {interestAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded bg-white border border-[#e7e3da]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9e472a] shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
