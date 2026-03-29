"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => <div className="h-[150px] w-full animate-pulse bg-[#161b22] rounded-md" />
  }
);

const TechBadge = ({ label, slug, color }: { label: string; slug: string; color?: string }) => (
  <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border border-[#30363d] bg-[#161b22] text-[#e6edf3] hover:border-[#8b949e] transition-colors">
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color || 'e6edf3'}`}
      alt=""
      className="w-3.5 h-3.5 object-contain"
      onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
    />
    {label}
  </span>
);

const SectionHeader = ({ icon, title }: { icon: string; title: string }) => (
  <h3 className="text-sm font-medium mb-4 flex items-center gap-2 text-[#8b949e]">
    <img
      src={`https://cdn.simpleicons.org/${icon}/8b949e`}
      className="w-4 h-4 object-contain"
      alt=""
    />
    {title}
  </h3>
);

export default function OverviewTab() {
  const handles = {
    github: "kallulgogoi",
    leetcode: "KALLUL",
    codeforces: "KALLUL"
  };

  return (
    <div className="space-y-10 pb-10">
      {/* README Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d] bg-[#161b22]">
          <svg className="w-4 h-4 text-[#8b949e]" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z" /></svg>
          <span className="text-sm font-semibold text-[#e6edf3]">{handles.github}</span>
          <span className="text-sm text-[#8b949e]">/</span>
          <span className="text-sm font-semibold text-[#e6edf3]">README</span>
          <span className="text-[10px] text-[#8b949e]">.md</span>
        </div>

        <div className="p-6 md:p-8 text-sm leading-relaxed text-[#e6edf3] space-y-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">Hi there, I&apos;m Kallul Gogoi 👋</h1>
            <p className="text-[#8b949e]">
              2nd Year Computer Science student at <strong>NIT Silchar</strong>. I build full-stack applications and solve competitive programming challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section>
              <h4 className="text-xs font-bold text-[#8b949e] uppercase mb-3 tracking-widest">Core & Languages</h4>
              <div className="flex flex-wrap gap-2">
                <TechBadge label="C" slug="c" color="A8B9CC" />
                <TechBadge label="C++" slug="cplusplus" color="00599C" />
                <TechBadge label="JavaScript" slug="javascript" color="F7DF1E" />
                <TechBadge label="TypeScript" slug="typescript" color="3178C6" />
                <TechBadge label="SQL" slug="sqlite" color="4479A1" />
                <TechBadge label="HTML5" slug="html5" color="E34F26" />
                <TechBadge label="CSS" slug="css" color="1572B6" />
                <TechBadge label="Python" slug="python" color="3776AB" />
              </div>
            </section>

            <section>
              <h4 className="text-xs font-bold text-[#8b949e] uppercase mb-3 tracking-widest">Frameworks & Libs</h4>
              <div className="flex flex-wrap gap-2">
                <TechBadge label="React" slug="react" color="61DAFB" />
                <TechBadge label="Next.js" slug="nextdotjs" color="ffffff" />
                <TechBadge label="React Native" slug="react" color="61DAFB" />
                <TechBadge label="NumPy" slug="numpy" color="013243" />
                <TechBadge label="Node.js" slug="nodedotjs" color="339933" />
                <TechBadge label="Express" slug="express" color="ffffff" />
                <TechBadge label="Tailwind" slug="tailwindcss" color="06B6D4" />
                <TechBadge label="Bootstrap" slug="bootstrap" color="7952B3" />
                <TechBadge label="Framer Motion" slug="framer" color="0055FF" />
              </div>
            </section>

            <section>
              <h4 className="text-xs font-bold text-[#8b949e] uppercase mb-3 tracking-widest">Infrastructure & Tools</h4>
              <div className="flex flex-wrap gap-2">
                <TechBadge label="Git" slug="git" color="F05032" />
                <TechBadge label="GitHub" slug="github" color="ffffff" />
                <TechBadge label="MongoDB" slug="mongodb" color="47A248" />
                <TechBadge label="MySQL" slug="mysql" color="4479A1" />
                <TechBadge label="Supabase" slug="supabase" color="3ECF8E" />
                <TechBadge label="Firebase" slug="firebase" color="FFCA28" />
                <TechBadge label="Vercel" slug="vercel" color="ffffff" />
                <TechBadge label="Netlify" slug="netlify" color="00C7B7" />
                <TechBadge label="Render" slug="render" color="ffffff" />
              </div>
            </section>

            <section>
              <h4 className="text-xs font-bold text-[#8b949e] uppercase mb-3 tracking-widest">Design & Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                <TechBadge label="Figma" slug="figma" color="F24E1E" />
                <TechBadge label="Canva" slug="canva" color="00C7B7" />
                <span className="px-2 py-1 border border-[#30363d] rounded text-[11px] text-[#c9d1d9] bg-[#161b22]">Leadership</span>
                <span className="px-2 py-1 border border-[#30363d] rounded text-[11px] text-[#c9d1d9] bg-[#161b22]">Time Management</span>
              </div>
            </section>
          </div>
        </div>
      </motion.div>

      {/* Activity Graphs */}
      <div className="space-y-6">
        <div className="p-5 border border-[#30363d] rounded-md bg-[#0d1117]">
          <SectionHeader icon="github" title="GitHub Activity" />

          {/* Contribution Calendar*/}
          <div className="flex justify-center overflow-x-auto py-2">
            <GitHubCalendar
              username={handles.github}
              colorScheme="dark"
              fontSize={12}
              blockSize={11}
              blockMargin={4}
            />
          </div>

          {/* Real Activity Graph */}
          <div className="mt-6">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${handles.github}&theme=github-dark&hide_border=true`}
              alt="GitHub Activity Graph"
              className="w-full rounded-md"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* LeetCode Card */}
            <div className="p-6 border border-white rounded-md bg-[#0d1117] hover:bg-[#161b22] transition-all duration-200">

              <h2 className="text-base font-semibold text-[#c9d1d9]">
                LeetCode
              </h2>
              <p className="text-sm text-[#8b949e] mt-1">
                View leetcode activity
              </p>

              <a
                href={`https://leetcode.com/u/${handles.leetcode}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <button suppressHydrationWarning className="px-3 py-1.5 text-sm font-medium rounded-md border border-[#30363d] bg-[#21262d] text-[#c9d1d9] hover:bg-yellow-400 hover:text-black transition">
                  View profile
                </button>
              </a>

            </div>

            {/* Codeforces Card */}
            <div className="p-6 border border-white rounded-md bg-[#0d1117] hover:bg-[#161b22] transition-all duration-200">

              <h2 className="text-base font-semibold text-[#c9d1d9]">
                Codeforces
              </h2>
              <p className="text-sm text-[#8b949e] mt-1">
                View codeforces activity
              </p>

              <a
                href={`https://codeforces.com/profile/${handles.codeforces}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <button suppressHydrationWarning className="px-3 py-1.5 text-sm font-medium rounded-md border border-[#30363d] bg-[#21262d] text-[#c9d1d9] hover:bg-white hover:text-black  transition">
                  View profile
                </button>
              </a>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
