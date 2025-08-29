// Global types for the portfolio website

export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Freelance' | 'Contract'
  description: string[]
  color: string
}

export interface Skill {
  name: string
  level: number
  color: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface ContactInfo {
  icon: any // Lucide icon component
  label: string
  value: string
  href: string
}

export interface SocialLink {
  icon: any // Lucide icon component
  label: string
  href: string
  color: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

// Component props interfaces
export interface LoadingProps {
  isLoading: boolean
}

export interface NavigationProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

// Theme types
export type Theme = 'light' | 'dark'

// Animation variants for Framer Motion
export interface AnimationVariants {
  initial: object
  animate: object
  exit?: object
  transition?: object
}

// Playground types
export interface PlaygroundState {
  code: string
  isRunning: boolean
  output: string
}

export interface PlaygroundProps extends LoadingProps {
  initialCode?: string
}

// Utility types
export type ComponentWithLoading<T = {}> = T & LoadingProps

// Configuration types
export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    github: string
    linkedin: string
    twitter?: string
    email: string
  }
}