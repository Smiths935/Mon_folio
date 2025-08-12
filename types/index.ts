export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'all';
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}