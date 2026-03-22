"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import ProfileSidebar from "./ProfileSidebar";
import TabSwitcher, { TabId } from "./TabSwitcher";
import OverviewTab from "@/components/tabs/OverviewTab";
import RepositoriesTab from "@/components/tabs/RepositoriesTab";

import ExperienceTab from "@/components/tabs/ExperienceTab";
import EducationTab from "@/components/tabs/EducationTab";
import ContactTab from "@/components/tabs/ContactTab";

const TAB_COMPONENTS: Record<TabId, React.ComponentType> = {
  overview: OverviewTab,
  repositories: RepositoriesTab,
  education: EducationTab,
  experience: ExperienceTab,
  contact: ContactTab,
};

export default function GithubLayout() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ActiveComponent = TAB_COMPONENTS[activeTab];

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      {/* Mobile sidebar drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="fixed top-0 left-0 bottom-0 w-[300px] bg-[#161b22] border-r border-[#30363d] z-[70] md:hidden overflow-y-auto p-5"
            >
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-4 right-4 text-[#848d97] hover:text-white"
              >
                ✕
              </button>
              <div className="mt-10">
                <ProfileSidebar />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sticky Tab Bar */}
      <div className="sticky top-[62px] z-30 bg-[#0d1117] border-b border-[#21262d]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex">
            <div className="hidden md:block w-[296px] shrink-0 mr-8" />
            <div className="flex-1 overflow-x-auto hide-scrollbar">
              <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-[1280px] mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="hidden md:block w-[296px] shrink-0">
            <ProfileSidebar />
          </div>

          {/* Tab content */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.12 }}
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      <footer className="max-w-[1280px] mx-auto px-4 md:px-8 border-t border-[#21262d] mt-16 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-[#848d97]">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 fill-current opacity-60" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
          <span>© 2026 KGogoi · কল্লোল গগৈ</span>
        </div>
        <nav className="flex flex-wrap gap-4">
          {["Blog", "About", "Contact", "Privacy", "Terms"].map(l => (
            <a key={l} href="#" className="text-[#58a6ff] hover:underline">{l}</a>
          ))}
        </nav>
      </footer>
    </div>
  );
}