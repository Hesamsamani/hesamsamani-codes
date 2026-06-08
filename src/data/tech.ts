export interface TechItem {
  name: string;
  category: string;
}

export const techStack: TechItem[] = [
  { name: 'Python', category: 'Language' },
  { name: 'PyQt6', category: 'Desktop UI' },
  { name: 'PyMuPDF', category: 'PDF Processing' },
  { name: 'Ollama', category: 'Local AI' },
  { name: 'OpenAI', category: 'AI APIs' },
  { name: 'Anthropic', category: 'AI APIs' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Docker', category: 'Containers' },
  { name: 'GitHub Actions', category: 'CI/CD' },
];