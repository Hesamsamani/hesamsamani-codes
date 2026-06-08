export type ProjectCategory = 'Desktop' | 'AI' | 'Education';

export interface Project {
  name: string;
  description: string;
  longDescription: string;
  url: string;
  version?: string;
  tags: string[];
  category: ProjectCategory[];
  image: string;
  imageAlt: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: 'Distilmark',
    description: '8-engine PDF → Markdown converter with local AI',
    longDescription:
      'Desktop app that transforms PDFs into clean Markdown using eight specialized extraction engines, PyQt6 UI, and optional Ollama-powered enrichment — all running locally.',
    url: 'https://github.com/Hesamsamani/Distilmark',
    version: 'v1.5.0',
    tags: ['Python', 'PyQt6', 'PyMuPDF', 'Ollama', 'Desktop'],
    category: ['Desktop', 'AI'],
    image: '/images/distilmark.png',
    imageAlt:
      'Distilmark Convert page screenshot with sidebar navigation, PDF drop zone, Native PyMuPDF engine selected, and conversion options in dark mode',
    featured: true,
  },
  {
    name: 'CourseraGrab',
    description: 'Offline Coursera course downloader — 17 GitHub topics',
    longDescription:
      'Privacy-first desktop tool for downloading Coursera courses for offline study. Built with PyQt5 and tagged across 17 GitHub topics for learners who want their materials available without a connection.',
    url: 'https://github.com/Hesamsamani/CourseraGrab',
    tags: ['Python', 'PyQt5', 'Desktop', 'Offline'],
    category: ['Desktop', 'Education'],
    image: '/images/courseragrab.png',
    imageAlt:
      'CourseraGrab PyQt5 desktop app screenshot with Download settings panel, My courses library, browser login, video quality and subtitle options, and dark theme',
    featured: true,
  },
];