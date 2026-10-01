import React, { useState, useEffect } from 'react';
import { FolderGit2, Star, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { PERSONAL_INFO, PROJECTS_DATA } from '../data/portfolioData';

export default function GitHubSection() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/raghvendra52553srmu-ux/repos?sort=updated&per_page=6');
        if (!res.ok) throw new Error('API error');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
        } else {
          throw new Error('Fallback needed');
        }
      } catch (err) {
        setRepos(
          PROJECTS_DATA.map((p) => ({
            id: p.id,
            name: p.title,
            description: p.tagline,
            html_url: p.github,
            language: p.techStack[0] || 'JavaScript',
            stargazers_count: 0,
          }))
        );
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            GitHub Activity
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Repositories and open-source projects hosted on GitHub.
          </p>
        </div>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
        >
          <span>github.com/raghvendra52553srmu-ux</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.id || repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 text-zinc-300 group-hover:text-cyan-400 transition-colors mb-2">
                <FolderGit2 className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold truncate">
                  {repo.name}
                </span>
              </div>
              <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                {repo.description || "Public repository developed by Raghvendra Pandey."}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>{repo.language || 'Code'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
