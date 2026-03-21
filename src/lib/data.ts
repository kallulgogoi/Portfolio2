import { Project, Experience, Activity } from "./types";

export const PROJECTS: Project[] = [
  {
    id: 1, name: "e-commerce-platform", description: "A full-featured e-commerce platform built with Next.js, Stripe, and Tailwind CSS with dark mode and seamless checkout.",
    language: "TypeScript", languageColor: "#3178c6", stars: 128, forks: 34, updatedAt: "3 days ago",
    topics: ["nextjs", "react", "stripe", "tailwindcss"], pinned: true,
  },
  {
    id: 2, name: "ai-chat-interface", description: "A conversational AI chatbot UI with buttery smooth animations and real-time streaming responses.",
    language: "TypeScript", languageColor: "#3178c6", stars: 256, forks: 67, updatedAt: "1 week ago",
    topics: ["react", "framer-motion", "ai", "openai"], pinned: true,
  },
  {
    id: 3, name: "realtime-task-manager", description: "Collaborative task management tool with drag-and-drop kanban boards and WebSocket-based real-time updates.",
    language: "JavaScript", languageColor: "#f1e05a", stars: 89, forks: 21, updatedAt: "2 weeks ago",
    topics: ["nodejs", "socketio", "react", "mongodb"], pinned: true,
  },
  {
    id: 4, name: "finance-dashboard", description: "Financial data visualization dashboard with interactive charts, analytics panels, and responsive layout.",
    language: "Vue", languageColor: "#41b883", stars: 45, forks: 12, updatedAt: "1 month ago",
    topics: ["vuejs", "chartjs", "scss", "dashboard"], pinned: true,
  },
  {
    id: 5, name: "portfolio-os", description: "This portfolio website — a GitHub-styled personal site built with Next.js and Tailwind CSS.",
    language: "TypeScript", languageColor: "#3178c6", stars: 312, forks: 89, updatedAt: "today",
    topics: ["nextjs", "portfolio", "tailwindcss", "framer-motion"], pinned: true,
  },
  {
    id: 6, name: "weather-cli", description: "A beautiful command-line weather app with ASCII art and color-coded forecasts.",
    language: "Python", languageColor: "#3572A5", stars: 67, forks: 15, updatedAt: "3 weeks ago",
    topics: ["python", "cli", "weather-api"], pinned: true,
  },
  {
    id: 7, name: "markdown-editor", description: "A live markdown editor with split-pane preview and syntax highlighting.",
    language: "TypeScript", languageColor: "#3178c6", stars: 73, forks: 18, updatedAt: "5 days ago",
    topics: ["react", "markdown", "codemirror"],
  },
  {
    id: 8, name: "blog-engine", description: "A static blog engine with MDX support, RSS, and automatic OG image generation.",
    language: "TypeScript", languageColor: "#3178c6", stars: 34, forks: 9, updatedAt: "2 months ago",
    topics: ["nextjs", "mdx", "blog"],
  },
];



export const ACTIVITIES: Activity[] = [
  { id: 1, type: "commit", description: "Pushed 4 commits to portfolio-os", date: "today" },
  { id: 2, type: "star", description: "Starred vercel/next.js", date: "yesterday" },
  { id: 3, type: "pr", description: "Opened PR #42 in ai-chat-interface", date: "2 days ago" },
  { id: 4, type: "issue", description: "Opened issue on markdown-editor", date: "3 days ago" },
  { id: 5, type: "commit", description: "Pushed 12 commits to e-commerce-platform", date: "1 week ago" },
  { id: 6, type: "fork", description: "Forked tailwindlabs/tailwindcss", date: "1 week ago" },
];

// Seeded pseudo-random to avoid hydration mismatch (Math.random differs server vs client)
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export const CONTRIBUTION_DATA: number[][] = Array.from({ length: 52 }, (_, wi) =>
  Array.from({ length: 7 }, (_, di) => {
    const r = seededRandom(wi * 7 + di + 1);
    return r > 0.3 ? Math.floor(seededRandom(wi * 7 + di + 100) * 4) + 1 : 0;
  })
);

export const SKILLS = {
  frontend: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "Python", "FastAPI", "GraphQL"],
  database: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "Linux"],
};

export const EXPERIENCES = [
  {
    id: 1,
    role: "Junior Moderator",
    company: "Coding Club, NIT Silchar",
    period: "2025 Aug - Present",
    description: "Contributing as a junior moderator, managing events, coding sessions, and helping peers enhance their coding skills.",
  },
  {
    id: 2,
    role: "Junior UI/UX Developer",
    company: "Google Developer Groups Club, NIT Silchar",
    period: "2025 Aug - Present",
    description: "Designing and prototyping modern UI/UX solutions, collaborating with developers to build impactful projects.",
  },
  {
    id: 3,
    role: "Web Wing Member",
    company: "Computer Science Society, NIT Silchar",
    period: "2025 Aug - Present",
    description: "Developing web-based solutions and contributing to society-led projects, enhancing technical exposure and collaboration.",
  },
];