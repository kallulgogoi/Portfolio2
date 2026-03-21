"use client";

import { CONTRIBUTION_DATA } from "@/lib/data";
import { motion } from "framer-motion";

function ContributionGraph() {
  const levels = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];
  return (
    <div className="border border-[#30363d] rounded-md p-4 bg-[#0d1117]">
      <h3 className="text-sm mb-3 text-[#e6edf3]">658 contributions in the last year</h3>
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-[3px] min-w-[720px]">
          {CONTRIBUTION_DATA.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((level, di) => (
                <div
                  key={di}
                  className="w-[11px] h-[11px] rounded-[2px] transition-colors"
                  style={{ backgroundColor: levels[level] }}
                  title={`${level} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1 mt-3 text-[11px] text-[#8b949e] justify-end">
        <span>Less</span>
        {levels.map((c, i) => (
          <div key={i} className="w-[11px] h-[11px] rounded-[2px]" style={{ backgroundColor: c }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

export default function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* README Card — like GitHub profile README */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="border border-[#30363d] rounded-md bg-[#0d1117]"
      >
        {/* README header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d] bg-[#161b22] rounded-t-md">
          <svg className="w-4 h-4 text-[#8b949e]" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z" /></svg>
          <span className="text-sm font-semibold text-[#e6edf3]">kGogoi</span>
          <span className="text-sm text-[#8b949e]">/</span>
          <span className="text-sm font-semibold text-[#e6edf3]">README</span>
          <span className="text-[10px] text-[#8b949e]">.md</span>
        </div>

        {/* README content — styled like rendered markdown */}
        <div className="p-6 md:p-8 text-sm leading-relaxed text-[#e6edf3] space-y-5">
          {/* Heading */}
          <div className="border-b border-[#21262d] pb-3">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              Hi there, I&apos;m Kallul Gogoi 👋
            </h1>
          </div>

          {/* About */}
          <p className="text-[#c9d1d9]">
            A passionate <strong>Computer Science &amp; Engineering</strong> student at <strong>NIT Silchar</strong>, 
            building modern web applications and solving competitive programming challenges.
          </p>

          {/* What I'm working on */}
          <div>
            <h3 className="text-lg font-semibold border-b border-[#21262d] pb-2 mb-3">🔭 What I&apos;m currently working on</h3>
            <ul className="list-disc list-inside space-y-1 text-[#c9d1d9]">
              <li>Building full-stack web apps with <code className="bg-[#161b22] border border-[#30363d] px-1.5 py-0.5 rounded text-[#e6edf3] text-xs">Next.js</code> and <code className="bg-[#161b22] border border-[#30363d] px-1.5 py-0.5 rounded text-[#e6edf3] text-xs">React</code></li>
              <li>Competitive programming on LeetCode &amp; Codeforces</li>
              <li>Contributing to open-source projects</li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold border-b border-[#21262d] pb-2 mb-3">🛠️ Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "React", bg: "#61dafb20", color: "#61dafb" },
                { label: "Next.js", bg: "#ffffff15", color: "#ffffff" },
                { label: "TypeScript", bg: "#3178c620", color: "#3178c6" },
                { label: "Tailwind CSS", bg: "#38bdf820", color: "#38bdf8" },
                { label: "Node.js", bg: "#68a06320", color: "#68a063" },
                { label: "Python", bg: "#3572A520", color: "#3572A5" },
                { label: "MongoDB", bg: "#47a24820", color: "#47a248" },
                { label: "PostgreSQL", bg: "#336791", color: "#ffffff" },
                { label: "Git", bg: "#f0503220", color: "#f05032" },
                { label: "Docker", bg: "#2496ed20", color: "#2496ed" },
                { label: "Framer Motion", bg: "#ff008020", color: "#ff0080" },
                { label: "Figma", bg: "#f24e1e20", color: "#f24e1e" },
              ].map((tech) => (
                <span
                  key={tech.label}
                  className="text-xs font-medium px-3 py-1 rounded-full border border-[#30363d]"
                  style={{ backgroundColor: tech.bg, color: tech.color }}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>

          {/* Learning */}
          <div>
            <h3 className="text-lg font-semibold border-b border-[#21262d] pb-2 mb-3">🌱 Currently Learning</h3>
            <ul className="list-disc list-inside space-y-1 text-[#c9d1d9]">
              <li>Advanced Data Structures &amp; Algorithms</li>
              <li>System Design &amp; Scalability</li>
              <li>Cloud Computing (AWS)</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold border-b border-[#21262d] pb-2 mb-3">📫 How to reach me</h3>
            <ul className="space-y-1 text-[#c9d1d9]">
              <li>📧 <a href="mailto:kallulgogoinits@gmail.com" className="text-[#58a6ff] hover:underline">kallulgogoinits@gmail.com</a></li>
              <li>💼 <a href="https://www.linkedin.com/in/kallul-gogoi-00a5152a0/" target="_blank" className="text-[#58a6ff] hover:underline">LinkedIn</a></li>
              <li>💻 <a href="https://leetcode.com/KALLUL/" target="_blank" className="text-[#58a6ff] hover:underline">LeetCode</a> · <a href="https://codeforces.com/profile/KALLUL" target="_blank" className="text-[#58a6ff] hover:underline">Codeforces</a></li>
            </ul>
          </div>

          {/* Fun Fact */}
          <div>
            <h3 className="text-lg font-semibold border-b border-[#21262d] pb-2 mb-3">⚡ Fun Fact</h3>
            <p className="text-[#c9d1d9]">I love solving algorithmic puzzles and designing pixel-perfect UIs that feel like magic ✨</p>
          </div>
        </div>
      </motion.div>

      {/* Contribution Graph */}
      <ContributionGraph />
    </div>
  );
}
