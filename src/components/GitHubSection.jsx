import React, { useState, useEffect } from "react";
import { FolderGit2, ArrowUpRight, GitBranch } from "lucide-react";
import { Github } from "./Icons";
import { PERSONAL_INFO, PROJECTS_DATA } from "../data/portfolioData";

export default function GitHubSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/raghvendra52553srmu-ux/repos?sort=updated&per_page=6"
        );
        if (!res.ok) throw new Error("API limit or network error");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
        } else {
          throw new Error("Fallback to verified list");
        }
      } catch (err) {
        setRepos(
          PROJECTS_DATA.map((p) => ({
            id: p.id,
            name: p.title,
            description: p.shortDesc,
            html_url: p.github,
            language: p.techStack[0] || "JavaScript",
            updated_at: "2026",
          }))
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20 border-b border-[#e7e3da]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 gap-4 pb-6 border-b border-[#e7e3da]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#9e472a] block mb-2 font-medium">
            07 / Open Source
          </span>
          <h2
            id="github-heading"
            className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight"
          >
            Building in Public
          </h2>
        </div>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-stone-100 text-stone-800 border border-[#e7e3da] text-xs font-mono transition-colors shadow-sm self-start md:self-auto"
        >
          <Github className="w-3.5 h-3.5" />
          <span>github.com/raghvendra52553srmu-ux</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
        </a>
      </div>

      {/* Grid of Repository Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {repos.map((repo) => (
          <a
            key={repo.id || repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-white border border-[#e7e3da] hover:border-stone-400/80 transition-all flex flex-col justify-between group shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          >
            <div>
              <div className="flex items-center gap-2 text-stone-900 group-hover:text-[#9e472a] transition-colors mb-2">
                <FolderGit2 className="w-4 h-4 text-[#9e472a] shrink-0" />
                <span className="text-sm font-semibold truncate font-mono">
                  {repo.name}
                </span>
              </div>
              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4 font-sans">
                {repo.description || "Public repository developed by Raghvendra Pandey."}
              </p>
            </div>

            <div className="pt-3 border-t border-[#f0ece4] flex items-center justify-between text-xs font-mono text-stone-500">
              <span className="flex items-center gap-1.5 text-stone-600">
                <span className="w-2 h-2 rounded-full bg-[#9e472a]" />
                {repo.language || "Code"}
              </span>
              <span className="flex items-center gap-1 group-hover:text-stone-900 transition-colors">
                <span>View Repo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
