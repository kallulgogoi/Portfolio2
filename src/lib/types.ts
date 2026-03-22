export interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  updatedAt: string;
  topics: string[];
  pinned?: boolean;
  status?: "ongoing" | "completed";
  link?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Activity {
  id: number;
  type: string;
  description: string;
  date: string;
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  period: string;
  description: string;
  marks: string;
  status: string;
}
