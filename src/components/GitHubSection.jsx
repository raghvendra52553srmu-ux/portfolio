import React, { useState, useEffect } from "react";
import { FolderGit2, ArrowUpRight, GitBranch, Terminal } from "lucide-react";
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
        // Fallback to verified project repository information
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
    <section id="github" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-zinc-800/80 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>OPEN SOURCE &amp; CODE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Building in Public
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
            My GitHub reflects my learning journey — from small programming experiments to larger real-world projects.
          </p>
        </div>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 text-xs font-mono transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>github.com/raghvendra52553srmu-ux</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
        </a>
      </div>

      {/* Grid of Repository Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.id || repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/70 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2.5 text-zinc-200 group-hover:text-sky-300 transition-colors mb-2">
                <FolderGit2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-sm font-semibold truncate">
                  {repo.name}
                </span>
              </div>
              <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                {repo.description || "Public repository developed by Raghvendra Pandey."}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5 text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                {repo.language || "Code"}
              </span>
              <span className="flex items-center gap-1 group-hover:text-zinc-300 transition-colors">
                <span>View</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
