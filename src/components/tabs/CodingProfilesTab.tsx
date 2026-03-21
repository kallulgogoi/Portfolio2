"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Flame, TrendingUp, TrendingDown, ExternalLink, Code2, Target, Zap, Loader2 } from "lucide-react";

interface LeetCodeData {
  handle: string;
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  contestRating: number | null;
  globalRanking: number | null;
  topPercentage: string | null;
  contestsAttended: number;
  recentSubmissions: { title: string; time: string }[];
}

interface CodeforcesData {
  handle: string;
  rating: number;
  maxRating: number;
  rank: string;
  maxRank: string;
  contribution: number;
  organization: string;
  totalContests: number;
  recentContests: { name: string; rank: number; ratingChange: number }[];
}

function LoadingSkeleton() {
  return (
    <div className="border border-[#21262d] rounded-md bg-[#161b22] p-6 animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-md bg-[#30363d]" />
        <div className="space-y-2"><div className="w-24 h-4 bg-[#30363d] rounded" /><div className="w-16 h-3 bg-[#21262d] rounded" /></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {[1,2,3,4].map(i => <div key={i} className="h-16 bg-[#0d1117] border border-[#21262d] rounded-md" />)}
      </div>
      <div className="space-y-3">{[1,2,3].map(i => <div key={i} className="h-4 bg-[#21262d] rounded w-full" />)}</div>
    </div>
  );
}

function ErrorState({ platform, onRetry }: { platform: string; onRetry: () => void }) {
  return (
    <div className="border border-[#21262d] rounded-md bg-[#161b22] p-6 text-center">
      <p className="text-[#f85149] text-sm mb-2">Failed to load {platform} data</p>
      <button onClick={onRetry} className="text-[#58a6ff] text-sm hover:underline">Retry</button>
    </div>
  );
}

function LeetCodeSection({ data }: { data: LeetCodeData }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="border border-[#21262d] rounded-md bg-[#161b22] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#21262d]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FFA116] rounded-md flex items-center justify-center font-black text-black text-sm">LC</div>
          <div><h3 className="font-semibold text-[#e6edf3] text-sm">LeetCode</h3><p className="text-[11px] text-[#848d97]">@{data.handle}</p></div>
        </div>
        <a href={`https://leetcode.com/u/${data.handle}/`} target="_blank" rel="noopener noreferrer" className="text-[#848d97] hover:text-[#58a6ff] transition-colors"><ExternalLink className="w-4 h-4" /></a>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          <StatBox icon={<Code2 className="w-4 h-4" />} label="Total Solved" value={data.totalSolved.toString()} color="#58a6ff" />
          <StatBox icon={<Trophy className="w-4 h-4" />} label="Contest Rating" value={data.contestRating?.toString() || "N/A"} color="#FFA116" />
          <StatBox icon={<Target className="w-4 h-4" />} label="Top" value={data.topPercentage || "N/A"} color="#2ea043" />
          <StatBox icon={<Flame className="w-4 h-4" />} label="Contests" value={data.contestsAttended.toString()} color="#f78166" />
        </div>

        <div className="space-y-3 mb-5">
          <DiffBar label="Easy" solved={data.easy} total={830} color="#00b8a3" />
          <DiffBar label="Medium" solved={data.medium} total={1740} color="#FFA116" />
          <DiffBar label="Hard" solved={data.hard} total={740} color="#EF4743" />
        </div>

        {data.recentSubmissions.length > 0 && (
          <>
            <h4 className="text-sm font-semibold text-[#e6edf3] mb-2">Recent Accepted</h4>
            <div className="divide-y divide-[#21262d]">
              {data.recentSubmissions.map((sub, i) => (
                <div key={i} className="py-2 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 min-w-0"><Zap className="w-3 h-3 text-[#2ea043] shrink-0" /><span className="text-[#e6edf3] truncate">{sub.title}</span></div>
                  <span className="text-[11px] text-[#848d97] shrink-0 ml-2">{sub.time}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

function CodeforcesSection({ data }: { data: CodeforcesData }) {
  const rankColor = (rank: string) => {
    const colors: Record<string, string> = { "newbie": "#808080", "pupil": "#008000", "specialist": "#03a89e", "expert": "#0000ff", "candidate master": "#aa00aa", "master": "#ff8c00", "international master": "#ff8c00", "grandmaster": "#ff0000" };
    return colors[rank.toLowerCase()] || "#808080";
  };

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="border border-[#21262d] rounded-md bg-[#161b22] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#21262d]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#1890ff] rounded-md flex items-center justify-center font-black text-white text-sm">CF</div>
          <div><h3 className="font-semibold text-[#e6edf3] text-sm">Codeforces</h3><p className="text-[11px] text-[#848d97]">@{data.handle}</p></div>
        </div>
        <a href={`https://codeforces.com/profile/${data.handle}`} target="_blank" rel="noopener noreferrer" className="text-[#848d97] hover:text-[#58a6ff] transition-colors"><ExternalLink className="w-4 h-4" /></a>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          <div className="bg-[#0d1117] border border-[#21262d] rounded-md px-4 py-3 text-center">
            <p className="text-2xl font-bold" style={{ color: rankColor(data.rank) }}>{data.rating}</p>
            <p className="text-[11px] text-[#848d97]">Current Rating</p>
          </div>
          <div className="bg-[#0d1117] border border-[#21262d] rounded-md px-4 py-3 text-center">
            <p className="text-2xl font-bold" style={{ color: rankColor(data.maxRank) }}>{data.maxRating}</p>
            <p className="text-[11px] text-[#848d97]">Max Rating</p>
          </div>
          <div className="bg-[#0d1117] border border-[#21262d] rounded-md px-4 py-3 text-center">
            <p className="text-lg font-bold capitalize" style={{ color: rankColor(data.rank) }}>{data.rank}</p>
            <p className="text-[11px] text-[#848d97]">Rank</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          <StatBox icon={<Code2 className="w-4 h-4" />} label="Organization" value={data.organization || "—"} color="#58a6ff" />
          <StatBox icon={<Trophy className="w-4 h-4" />} label="Contests" value={data.totalContests.toString()} color="#FFA116" />
          <StatBox icon={<TrendingUp className="w-4 h-4" />} label="Contribution" value={data.contribution.toString()} color="#2ea043" />
        </div>

        <h4 className="text-sm font-semibold text-[#e6edf3] mb-2">Recent Contests</h4>
        <div className="divide-y divide-[#21262d]">
          {data.recentContests.map((c, i) => (
            <div key={i} className="py-2.5 flex items-center justify-between text-sm">
              <div className="min-w-0 pr-2">
                <span className="text-[#e6edf3] text-[13px] block truncate">{c.name}</span>
                <span className="text-[#848d97] text-[11px]">Rank: #{c.rank}</span>
              </div>
              <span className={`text-sm font-mono font-semibold shrink-0 flex items-center gap-1 ${c.ratingChange >= 0 ? "text-[#2ea043]" : "text-[#f85149]"}`}>
                {c.ratingChange >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {c.ratingChange >= 0 ? "+" : ""}{c.ratingChange}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function StatBox({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) {
  return (
    <div className="bg-[#0d1117] border border-[#21262d] rounded-md p-3 text-center">
      <div className="flex items-center justify-center gap-1.5 mb-1" style={{ color }}>{icon}<span className="text-lg font-bold">{value}</span></div>
      <p className="text-[11px] text-[#848d97]">{label}</p>
    </div>
  );
}

function DiffBar({ label, solved, total, color }: { label: string; solved: number; total: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs w-14 text-right font-medium" style={{ color }}>{label}</span>
      <div className="flex-1 bg-[#21262d] rounded-full h-[6px] overflow-hidden">
        <div className="h-full rounded-full" style={{ backgroundColor: color, width: `${(solved / total) * 100}%` }} />
      </div>
      <span className="text-xs text-[#848d97] w-16 text-right font-mono">{solved}/{total}</span>
    </div>
  );
}

export default function CodingProfilesTab() {
  const [lcData, setLcData] = useState<LeetCodeData | null>(null);
  const [cfData, setCfData] = useState<CodeforcesData | null>(null);
  const [lcError, setLcError] = useState(false);
  const [cfError, setCfError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchLC = () => {
    setLcError(false);
    fetch("/api/leetcode").then(r => r.json()).then(d => { if (d.error) setLcError(true); else setLcData(d); }).catch(() => setLcError(true));
  };
  const fetchCF = () => {
    setCfError(false);
    fetch("/api/codeforces").then(r => r.json()).then(d => { if (d.error) setCfError(true); else setCfData(d); }).catch(() => setCfError(true));
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch("/api/leetcode").then(r => r.json()).then(d => { if (d.error) setLcError(true); else setLcData(d); }).catch(() => setLcError(true)),
      fetch("/api/codeforces").then(r => r.json()).then(d => { if (d.error) setCfError(true); else setCfData(d); }).catch(() => setCfError(true)),
    ]).finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <p className="text-[#848d97] text-sm flex items-center gap-2">
        Competitive programming profiles — live data from LeetCode & Codeforces.
        {loading && <Loader2 className="w-4 h-4 animate-spin text-[#58a6ff]" />}
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {loading && !lcData ? <LoadingSkeleton /> : lcError ? <ErrorState platform="LeetCode" onRetry={fetchLC} /> : lcData && <LeetCodeSection data={lcData} />}
        {loading && !cfData ? <LoadingSkeleton /> : cfError ? <ErrorState platform="Codeforces" onRetry={fetchCF} /> : cfData && <CodeforcesSection data={cfData} />}
      </div>
    </div>
  );
}
