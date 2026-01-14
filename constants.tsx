import React from 'react';
import { Skill } from './types';
import { 
  Code2, 
  Database, 
  BrainCircuit, 
  Terminal, 
  Server,
  Cpu,
  Globe,
  Layers
} from 'lucide-react';

export const PERSONAL_INFO_STATIC = {
  name: "Pablo Hernandez",
  age: 21,
  // Note: Text content has moved to translations.ts
};

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React / Next.js', category: 'Frontend', icon: <Code2 size={18} /> },
  { name: 'TypeScript / JavaScript', category: 'Frontend', icon: <Code2 size={18} /> },
  { name: 'Three.js / HTML5', category: 'Frontend', icon: <Layers size={18} /> },
  
  // Backend / Engineering
  { name: 'C++ / C (OOP)', category: 'Backend', icon: <Terminal size={18} /> },
  { name: 'Python', category: 'Backend', icon: <Terminal size={18} /> },
  { name: 'Node.js', category: 'Backend', icon: <Server size={18} /> },
  
  // AI
  { name: 'TensorFlow', category: 'AI/ML', icon: <BrainCircuit size={18} /> },
  { name: 'Gemini API', category: 'AI/ML', icon: <BrainCircuit size={18} /> },
  
  // Systems & Tools
  { name: 'Linux / SysAdmin', category: 'Tools', icon: <Terminal size={18} /> },
  { name: 'Network (IPv4/IPv6/Switching)', category: 'Tools', icon: <Globe size={18} /> },
  { name: 'Git / CI/CD', category: 'Tools', icon: <Cpu size={18} /> },
];

// Project metadata (images, tech stack) remains here, text content is in translations.ts
export const PROJECT_METADATA = {
  '1': {
    technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/600/400?random=101',
    link: '#',
    github: '#'
  },
  '2': {
    technologies: ['React', 'Firebase', 'APIs'],
    imageUrl: 'https://picsum.photos/600/400?random=102',
    link: '#',
    github: '#'
  },
  '3': {
    technologies: ['Next.js', 'Recharts', 'Express', 'Yahoo Finance'],
    imageUrl: 'https://picsum.photos/600/400?random=103',
    link: '#',
    github: '#'
  }
};