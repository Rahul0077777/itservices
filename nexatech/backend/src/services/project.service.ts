import { ProjectModel, type IProject } from '../models/project.model.js'
import { isDbConnected } from '../config/database.js'

export const initialProjects = [
  {
    id: '1',
    slug: 'zaya-travels',
    title: 'Zaya Travels',
    category: 'Travel Booking Platform',
    summary:
      'A modern travel booking and tour discovery platform featuring interactive itinerary builders, package selection, and real-time inquiry management.',
    problemSolved:
      'Travel agencies needed a seamless way to showcase curated regional packages, capture customized tour inquiries, and manage traveler bookings in one place.',
    keyFeatures: [
      'Interactive destination tour explorer with dynamic filters',
      'Instant quote calculator with custom traveler options',
      'Automated WhatsApp and email booking confirmation notifications',
      'Admin portal for updating itineraries, pricing, and season specials',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    projectType: 'Portfolio' as const,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80',
    liveDemoUrl: 'https://github.com/nexatech-solutions/zaya-travels',
    githubUrl: 'https://github.com/nexatech-solutions/zaya-travels',
    architectureHighlights: [
      'Modular React frontend with Tailwind responsive layouts',
      'MongoDB schemas optimized for dynamic itinerary pricing',
      'Node.js RESTful API endpoints with structured validation',
    ],
    metrics: { label: 'Platform Type', value: 'Tour Discovery' },
  },
  {
    id: '2',
    slug: 'crm-platform',
    title: 'CRM Platform',
    category: 'Customer Relationship Management',
    summary:
      'A custom business CRM suite designed for growing sales teams to track lead stages, log client communication, and visualize deal conversions.',
    problemSolved:
      'Small and mid-sized businesses were losing client leads across fragmented WhatsApp chats and disorganized spreadsheets.',
    keyFeatures: [
      'Visual drag-and-drop deal pipeline with status stages',
      'Customer communication timeline and scheduled follow-up reminders',
      'Custom role-based permissions for sales reps and managers',
      'Executive revenue projection dashboards and weekly activity summaries',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    projectType: 'Demo Project' as const,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    liveDemoUrl: 'https://github.com/nexatech-solutions/crm-platform',
    githubUrl: 'https://github.com/nexatech-solutions/crm-platform',
    architectureHighlights: [
      'State-managed React Kanban boards with optimistic updates',
      'Express middleware for role-based access control (RBAC)',
      'Aggregated MongoDB reporting queries for pipeline metrics',
    ],
    metrics: { label: 'Team Capacity', value: 'Multi-User RBAC' },
  },
  {
    id: '3',
    slug: 'goyafly-travel',
    title: 'GoyaFly – Travel Website',
    category: 'Flight, Hotel, Visa & More',
    summary:
      'A comprehensive travel portal facilitating international flight inquiries, hotel stays, visa assistance services, and holiday packages.',
    problemSolved:
      'Travelers required a one-stop portal to bundle visa documentation requirements alongside flight and hotel bookings without switching sites.',
    keyFeatures: [
      'Multi-service booking forms for flights, hotels, and tourist visas',
      'Automated document checklist generator based on destination country',
      'Integrated payment gateway for service fees and deposits',
      'Customer support chat widget with direct WhatsApp escalation',
    ],
    technologies: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    projectType: 'Portfolio' as const,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80',
    liveDemoUrl: 'https://github.com/nexatech-solutions/goyafly-travel',
    githubUrl: 'https://github.com/nexatech-solutions/goyafly-travel',
    architectureHighlights: [
      'Fast responsive search filters with debounced API queries',
      'Secure document upload integration with S3 cloud storage',
      'Reusable UI component library built on Tailwind CSS',
    ],
    metrics: { label: 'Service Scope', value: 'Flights & Visas' },
  },
  {
    id: '4',
    slug: 'taskflow-mobile',
    title: 'TaskFlow',
    category: 'Productivity Mobile App',
    summary:
      'A high-speed task management and team sprint application engineered for mobile devices with offline-first synchronization.',
    problemSolved:
      'Remote teams needed a frictionless, fast mobile task tool that keeps working without an active internet connection.',
    keyFeatures: [
      'Offline-first task creation with background queue syncing',
      'Custom project tags, priority flags, and reminder push alerts',
      'Daily sprint progress overview and completion streaks',
      'Biometric authentication (FaceID/Fingerprint) support',
    ],
    technologies: ['React Native', 'Expo', 'Firebase'],
    projectType: 'Demo Project' as const,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
    liveDemoUrl: 'https://github.com/nexatech-solutions/taskflow-mobile',
    githubUrl: 'https://github.com/nexatech-solutions/taskflow-mobile',
    architectureHighlights: [
      'React Native / Expo unified build for iOS and Android',
      'Firebase Firestore realtime listeners with offline cache',
      'Optimized re-rendering with lightweight global state',
    ],
    metrics: { label: 'Mobile Architecture', value: 'Offline-First' },
  },
]

export const projectService = {
  async getAllProjects() {
    if (isDbConnected()) {
      try {
        const count = await ProjectModel.countDocuments()
        if (count === 0) {
          // Seed initial projects
          await ProjectModel.insertMany(initialProjects)
        }
        return await ProjectModel.find().lean()
      } catch {
        return initialProjects
      }
    }
    return initialProjects
  },

  async getProjectBySlug(slug: string) {
    if (isDbConnected()) {
      try {
        const project = await ProjectModel.findOne({ slug }).lean()
        if (project) return project
      } catch {
        // Fallback to static
      }
    }
    return initialProjects.find((p) => p.slug === slug) || null
  },
}
