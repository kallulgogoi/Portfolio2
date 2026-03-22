"use client";

import { Search, Bell, Plus, Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#010409] px-4 lg:px-6 h-[62px] flex items-center">
      {/* Hamburger */}
      <button 
        onClick={onMenuClick} 
        suppressHydrationWarning
        className="md:hidden text-white mr-3 p-1"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Logo */}
      <a href="#" className="mr-4 text-white hover:text-[#ffffffb3] transition-colors shrink-0">
        <svg height="32" viewBox="0 0 16 16" width="32" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>

      {/* Username */}
      <span className="text-sm font-semibold text-white mr-4 hidden sm:inline">KALLUL</span>

      {/* Search */}
      <div className="flex-1 max-w-[272px] lg:max-w-[400px] hidden md:flex mr-2">
        <div className="w-full border border-[#3d444d] rounded-md flex items-center px-2 py-[5px] text-sm focus-within:border-[#58a6ff] focus-within:bg-[#0d1117] transition-all">
          <Search className="w-[14px] h-[14px] text-[#848d97] mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="Type / to search" 
            suppressHydrationWarning 
            className="bg-transparent text-[#e6edf3] placeholder-[#848d97] focus:outline-none w-full text-[13px]" 
          />
          <kbd className="ml-1 border border-[#3d444d] rounded px-[6px] py-[1px] text-[11px] text-[#848d97] font-mono shrink-0 leading-none">/</kbd>
        </div>
      </div>

      <div className="flex-1" />

      {/* Right icons */}
      <div className="flex items-center gap-1">
        <button suppressHydrationWarning className="text-white hover:text-[#ffffffb3] p-2 hidden md:flex items-center">
          <Plus className="w-[16px] h-[16px]" />
          <svg className="w-[12px] h-[12px] ml-[1px] text-[#848d97]" viewBox="0 0 16 16" fill="currentColor"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z" /></svg>
        </button>
        <button suppressHydrationWarning className="text-white hover:text-[#ffffffb3] p-2 hidden lg:block">
          <svg className="w-[16px] h-[16px]" viewBox="0 0 16 16" fill="currentColor"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" /><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z" /></svg>
        </button>
        <button suppressHydrationWarning className="text-white hover:text-[#ffffffb3] p-2 hidden lg:block">
          <svg className="w-[16px] h-[16px]" viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" /></svg>
        </button>
        <button suppressHydrationWarning className="text-white hover:text-[#ffffffb3] p-2 relative hidden md:block">
          <Bell className="w-4 h-4" />
          <span className="absolute top-[6px] right-[6px] w-[8px] h-[8px] bg-[#1f6feb] rounded-full border-2 border-[#010409]" />
        </button>
        <img src="/images/kallul.jpg" alt="Profile" className="w-[28px] h-[28px] rounded-full ml-1 cursor-pointer object-cover" />
      </div>
    </header>
  );
}