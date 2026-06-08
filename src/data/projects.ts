export interface Project {
  name: string;
  description: string;
  longDescription: string;
  url: string;
  version?: string;
  tags: string[];
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
    image: '/images/distilmark.png',
    imageAlt: 'Distilmark PDF to Markdown converter dark mode screenshot',
    featured: true,
  },
  {
    name: 'CourseraGrab',
    description: 'Offline Coursera course downloader',
    longDescription:
      'Privacy-first desktop tool for downloading Coursera courses for offline study. Built with PyQt5 and designed for learners who want their materials available without a connection.',
    url: 'https://github.com/Hesamsamani/CourseraGrab',
    tags: ['Python', 'PyQt5', 'Desktop', 'Offline'],
    image: '/images/courseragrab.svg',
    imageAlt: 'CourseraGrab project placeholder',
    featured: true,
  },
];