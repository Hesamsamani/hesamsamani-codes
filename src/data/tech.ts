export type TechIcon =
  | 'python'
  | 'pyqt'
  | 'pymupdf'
  | 'ollama'
  | 'openai'
  | 'anthropic'
  | 'fastapi'
  | 'docker'
  | 'github-actions';

export interface TechItem {
  name: string;
  category: string;
  icon?: TechIcon;
}

export const techStack: TechItem[] = [
  { name: 'Python', category: 'Language', icon: 'python' },
  { name: 'PyQt6', category: 'Desktop UI', icon: 'pyqt' },
  { name: 'PyMuPDF', category: 'PDF Processing', icon: 'pymupdf' },
  { name: 'Ollama', category: 'Local AI', icon: 'ollama' },
  { name: 'OpenAI', category: 'AI APIs', icon: 'openai' },
  { name: 'Anthropic', category: 'AI APIs', icon: 'anthropic' },
  { name: 'FastAPI', category: 'Backend', icon: 'fastapi' },
  { name: 'Docker', category: 'Containers', icon: 'docker' },
  { name: 'GitHub Actions', category: 'CI/CD', icon: 'github-actions' },
];