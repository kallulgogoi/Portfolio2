"use client";

import { EDUCATIONS } from "@/lib/data";
import { motion } from "framer-motion";

export default function EducationTab() {
  return (
    <div className="space-y-0 relative">
      {/* Vertical timeline line */}
      <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-[#30363d] hidden md:block" />
      
      {EDUCATIONS.map((edu, i) => (
        <motion.div
          key={edu.id}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="flex gap-4 md:gap-6 py-6 relative"
        >
          {/* Timeline dot */}
          <div className="hidden md:flex flex-col items-center shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#161b22] border-2 border-[#30363d] flex items-center justify-center z-10">
              <div className="w-3 h-3 rounded-full bg-[#2ea043]" />
            </div>
          </div>

          {/* Content Card */}
          <div className="flex-1 border border-[#30363d] rounded-md bg-[#161b22] p-5 hover:border-[#8b949e]/40 transition-colors shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-1">
              <h3 className="text-lg font-semibold text-[#e6edf3]">
                {edu.degree}
              </h3>
              <span className="text-xs text-[#8b949e] font-mono bg-[#21262d] px-2 py-1 rounded-full border border-[#30363d]">
                {edu.period}
              </span>
            </div>
            <p className="text-[#58a6ff] text-sm font-medium mb-3">
              {edu.school}
            </p>
            <p className="text-[#8b949e] text-sm leading-relaxed mb-4">
              {edu.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-[#2ea043] bg-[#2ea043]/10 px-2.5 py-1 rounded-md border border-[#2ea043]/20">
                {edu.marks}
              </span>
              <span className="text-xs font-medium text-[#c9d1d9] bg-[#21262d] px-2.5 py-1 rounded-md border border-[#30363d]">
                {edu.status}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
