"use client";

import { BookOpen, FolderGit2, Briefcase, Mail, GraduationCap } from "lucide-react";

export type TabId = "overview" | "repositories" | "experience" | "education" | "contact";

const TABS: { id: TabId; label: string; icon: any; count?: number }[] = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "repositories", label: "Repositories", icon: FolderGit2, count: 15 },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function TabSwitcher({ activeTab, setActiveTab }: { activeTab: TabId; setActiveTab: (id: TabId) => void }) {
  return (
    <nav className="flex gap-1 overflow-x-auto hide-scrollbar" role="tablist">
      {TABS.map((tab) => {
        const active = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            suppressHydrationWarning 
            className={`flex items-center gap-2 px-3 py-[12px] text-sm whitespace-nowrap border-b-2 transition-all relative ${
              active
                ? "border-[#f78166] text-[#e6edf3] font-semibold"
                : "border-transparent text-[#848d97] hover:text-[#e6edf3] hover:border-[#8b949e]"
            }`}
          >
            <tab.icon className={`w-[16px] h-[16px] ${active ? "text-[#e6edf3]" : "text-[#848d97]"}`} />
            {tab.label}
            {tab.count !== undefined && (
              <span className={`text-[12px] px-1.5 py-0.5 rounded-full ${active ? "bg-[#30363d] text-[#e6edf3]" : "bg-[#21262d] text-[#848d97]"}`}>
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}