"use client";

import { PROJECTS } from "@/lib/data";
import { ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[#8b949e] text-sm">{PROJECTS.length} projects</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="border border-[#30363d] rounded-lg p-5 bg-[#161b22] hover:border-[#58a6ff]/40 transition-all flex flex-col cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <a href={p.link || `https://github.com/kallulgogoi/${p.name}`} target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] font-semibold group-hover:underline">
                  {p.name}
                </a>
                {p.status && (
                  <span className={`text-[10px] border rounded-full px-2 py-0.5 ${p.status === 'ongoing' ? 'border-[#388bfd] text-[#58a6ff] bg-[#388bfd26]' : 'border-[#2ea043] text-[#2ea043] bg-[#2ea04326]'}`}>
                    {p.status.charAt(0).toUpperCase() + p.status.slice(1)}
                  </span>
                )}
              </div>
              <a href={p.link || `https://github.com/kallulgogoi/${p.name}`} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 text-[#8b949e] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
            <p className="text-[#8b949e] text-sm flex-1 mb-4 leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {p.topics.slice(0, 3).map((t) => (
                <span key={t} className="text-[#58a6ff] bg-[#388bfd26] text-[11px] px-2 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-3 text-xs text-[#8b949e] mt-auto">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: p.languageColor }} />
                {p.language}
              </span>
              <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {p.stars}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
