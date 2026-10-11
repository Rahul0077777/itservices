export interface ServiceItem {
  id: string
  title: string
  tagline: string
  description: string
  deliverables: string[]
  technologies: string[]
  icon: string
  badge?: string
  image?: string
}

export interface ProjectItem {
  id: string
  slug: string
  title: string
  category: string
  summary: string
  problemSolved: string
  keyFeatures: string[]
  technologies: string[]
  projectType: 'Portfolio' | 'Demo Project' | 'Client Project'
  image: string
  liveDemoUrl?: string
  githubUrl?: string
  architectureHighlights: string[]
  metrics?: { label: string; value: string }
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  details?: string
}

export interface TechItem {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
  description: string
  badge: string
}

export interface WhyChooseItem {
  title: string
  description: string
  icon: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface TestimonialItem {
  quote: string
  clientName: string
  role: string
  company: string
  avatar: string
  projectTag: string
  isSample?: boolean
}

export interface ContactFormData {
  fullName: string
  email: string
  phone?: string
  company?: string
  service: string
  budget?: string
  message: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  message: string
  data?: T
  errors?: Record<string, string>
}
