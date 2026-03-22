"use client";

import { PROJECTS } from "@/lib/data";
import { Star, GitFork, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function RepositoriesTab() {
  const [search, setSearch] = useState("");
  const [langFilter, setLangFilter] = useState("All");

  const languages = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.language)))];
  
  const filtered = PROJECTS.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    const matchLang = langFilter === "All" || p.language === langFilter;
    return matchSearch && matchLang;
  });

  return (
    <div className="space-y-4">
      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 flex items-center bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 focus-within:border-[#58a6ff] transition-colors">
          <Search className="w-4 h-4 text-[#8b949e] mr-2 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Find a repository…"
            className="bg-transparent text-[#e6edf3] placeholder-[#8b949e] focus:outline-none w-full text-sm"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLangFilter(lang)}
              className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
                langFilter === lang
                  ? "bg-[#58a6ff] text-white border-[#58a6ff]"
                  : "bg-[#21262d] text-[#e6edf3] border-[#30363d] hover:border-[#8b949e]"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Repo List */}
      <div className="divide-y divide-[#21262d]">
        {filtered.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="py-6 flex flex-col md:flex-row md:items-start gap-4"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <a href={p.link || `https://github.com/kallulgogoi/${p.name}`} target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] font-semibold text-lg hover:underline">
                  {p.name}
                </a>
                <span className="text-[10px] border border-[#30363d] rounded-full px-2 py-0.5 text-[#8b949e]">Public</span>
                {p.status && (
                  <span className={`text-[10px] border rounded-full px-2 py-0.5 ${p.status === 'ongoing' ? 'border-[#388bfd] text-[#58a6ff] bg-[#388bfd26]' : 'border-[#2ea043] text-[#2ea043] bg-[#2ea04326]'}`}>
                    {p.status.charAt(0).toUpperCase() + p.status.slice(1)}
                  </span>
                )}
              </div>
              <p className="text-[#8b949e] text-sm mb-3 max-w-2xl">{p.description}</p>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {p.topics.map((t) => (
                  <span key={t} className="text-[#58a6ff] bg-[#388bfd26] text-xs px-2.5 py-0.5 rounded-full font-medium hover:bg-[#58a6ff]/20 cursor-pointer transition-colors">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-xs text-[#8b949e]">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: p.languageColor }} />
                  {p.language}
                </span>
                <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {p.stars}</span>
                <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {p.forks}</span>
                <span>Updated {p.updatedAt}</span>
              </div>
            </div>
            <button className="shrink-0 flex items-center gap-1 text-xs border border-[#30363d] rounded-md px-3 py-1 bg-[#21262d] hover:bg-[#30363d] text-[#e6edf3] transition-colors">
              <Star className="w-3 h-3" /> Star
            </button>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-[#8b949e]">
          <p className="text-lg">No repositories match your search.</p>
        </div>
      )}
    </div>
  );
}
