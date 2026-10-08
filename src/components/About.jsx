import React from "react";
import { GraduationCap, Target, MapPin, Compass, Sparkles, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function About() {
  const profileCards = [
    {
      title: "Education",
      value: "BCA — SRMU",
      subtitle: "Shri Ramswaroop Memorial University",
      icon: GraduationCap,
    },
    {
      title: "Focus",
      value: "Development + Data Analytics",
      subtitle: "Full-Stack Web & Analytical Workflows",
      icon: Target,
    },
    {
      title: "Based in",
      value: "Lucknow, India",
      subtitle: "Open to Local & Remote Opportunities",
      icon: MapPin,
    },
    {
      title: "Learning Approach",
      value: "Learning by building",
      subtitle: "Practical Repositories & Real Problem Solving",
      icon: Compass,
    },
  ];

  const interestTags = [
    "Programming",
    "Web Development",
    "Data Analytics",
    "Power BI",
    "Python",
    "SQL",
    "Problem Solving",
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-12 border-b border-zinc-800/80 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
          <Code2 className="w-3.5 h-3.5" />
          <span>BACKGROUND &amp; PHILOSOPHY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          More than a student. A builder.
        </h2>
        <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
          Turning computer science concepts into tested software, interactive dashboards, and practical tools.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Natural narrative */}
        <div className="lg:col-span-7 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p>
            I am pursuing my <strong className="text-zinc-100 font-semibold">Bachelor of Computer Applications (BCA)</strong> at{" "}
            <strong className="text-zinc-100 font-semibold">Shri Ramswaroop Memorial University (SRMU), Lucknow</strong>. 
            From the very start, I decided not to treat coding as purely theoretical homework. Instead, I choose to learn through practical, hands-on project building.
          </p>

          <p className="text-zinc-400">
            My primary technical interests lie in <strong className="text-zinc-200">software &amp; web development</strong> and{" "}
            <strong className="text-zinc-200">data analytics</strong>. I love constructing responsive web applications with React and JavaScript, 
            while also digging into datasets with Python, SQL, Excel, and Microsoft Power BI to extract meaningful patterns and build actionable dashboards.
          </p>

          <p className="text-zinc-400">
            Whether it is developing an OPD triage kiosk like <strong className="text-zinc-200">MediKiosk</strong> for hospital queues, 
            prototyping student utility systems during university hackathons, or earning Grade A in Data Science with AI under Skill India &amp; IITM Pravartak, 
            my goal remains consistent: build things that genuinely help people solve everyday operational problems.
          </p>

          {/* Interests row */}
          <div className="pt-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2.5 font-medium">
              Core Technical Interests:
            </span>
            <div className="flex flex-wrap gap-2">
              {interestTags.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Profile Information Panel */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
          {profileCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-zinc-800 text-sky-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {card.title}
                  </span>
                </div>
                <div className="text-sm font-semibold text-zinc-100 pl-11">
                  {card.value}
                </div>
                <div className="text-xs text-zinc-400 pl-11 mt-0.5">
                  {card.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
