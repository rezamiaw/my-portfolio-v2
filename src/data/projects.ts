export type Project = {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  technologies: string[];
  type: 'mobile' | 'web';
  repoUrl?: string;
  demoUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Learning App Aksun",
    subtitle: "Learning App Aksun",
    description: "Aksun is an innovative learning platform designed to make it easier for users to learn reading the Sundanese script.",
    images: [
      "/projects/aksun-1.png",
      "/projects/aksun-2.png"
    ],
    technologies: ["Dart", "C++", "Swift", "HTML"],
    type: "mobile",
    repoUrl: "https://github.com/rezamiaw/aplikasi_aksun",
  },
  {
    title: "Jagasehat",
    subtitle: "Jagasehat",
    description: "A modern web application for calculating BMI (Body Mass Index), obtaining AI-based health advice from Groq, and health consultation features.",
    images: [
      "/projects/jagasehat-1.png",
      "/projects/jagasehat-2.png",
      "/projects/jagasehat-3.png"
    ],
    technologies: ["ReactJS", "Hapi.js", "Groq AI", "Javascript", "PostgreSQL"],
    type: "web",
    repoUrl: "https://github.com/CapstoneDi",
    demoUrl: "https://grup-capstonedb6-pg009.vercel.app/"
  },
  {
    title: "Digi Invition",
    subtitle: "Digi Invition",
    description: "Digi Invition is a platform for creating and managing digital invitations for events, parties, and other occasions.",
    images: [
      "/projects/digi-invition.png"
    ],
    technologies: ["Next.js", "Typescript", "TailwindCSS"],
    type: "mobile",
    repoUrl: "https://github.com/rezamiaw/digi-invition",
    demoUrl: "https://digi-invition.vercel.app/"
  }
];
