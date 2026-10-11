import type {
  ServiceItem,
  ProjectItem,
  ProcessStep,
  TechItem,
  WhyChooseItem,
  FaqItem,
  TestimonialItem,
} from '../types'

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    tagline: 'Modern, responsive and high-performance websites tailored to your brand.',
    description:
      'High-speed business websites, corporate portals, and landing pages built with clean semantic code, Lighthouse 95+ performance, and mobile-first responsiveness.',
    deliverables: [
      'Responsive, high-converting web applications',
      'SEO-optimized architecture & fast initial load',
      'Modern React & Tailwind CSS design system',
      'Cross-browser and mobile device compatibility',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'],
    icon: 'Monitor',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mern-stack',
    title: 'MERN Stack Applications',
    tagline: 'Full-stack web applications using React, Node.js, Express & MongoDB.',
    description:
      'End-to-end full-stack architectures engineered for high concurrency, real-time sync, secure authentication, and resilient database design.',
    deliverables: [
      'Structured MVC and RESTful API backend',
      'Secure JWT authentication & role-based access',
      'Optimized MongoDB schemas and indexes',
      'Interactive frontend with TypeScript state flow',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
    icon: 'Layers',
    badge: 'Core Specialty',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    tagline: 'Integrate AI tools and automate repetitive workflows to save time.',
    description:
      'Custom AI pipelines, document parsing, intelligent LLM support bots, and automated business workflows that reduce operational overhead.',
    deliverables: [
      'OpenAI & Claude API integrations',
      'Intelligent document and PDF data extraction',
      'Automated background webhook workflows',
      'Domain-specific knowledge assistants (RAG)',
    ],
    technologies: ['OpenAI API', 'LangChain', 'Python', 'Node.js', 'Webhooks'],
    icon: 'Brain',
    badge: 'High Impact',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'iOS & Android apps with smooth performance and great UX.',
    description:
      'Native-feel mobile apps engineered using React Native and Expo. Clean navigation, offline caching, push notifications, and app store deployment readiness.',
    deliverables: [
      'Cross-platform iOS & Android from unified code',
      'Offline-first data sync & secure local storage',
      'Push notification alerts and background sync',
      'Smooth 60fps animations and gesture handling',
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'REST APIs'],
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'saas-crm-development',
    title: 'SaaS / CRM Development',
    tagline: 'Custom platforms, dashboards and customer management systems.',
    description:
      'Custom multi-tenant SaaS software and tailored CRM platforms designed to track leads, automate pipelines, manage subscriptions, and generate executive reports.',
    deliverables: [
      'Custom lead pipelines & customer interaction tracking',
      'Subscription billing and invoice management',
      'Interactive analytics dashboards with CSV/PDF exports',
      'Multi-tenant workspace isolation & team permissions',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Stripe/Razorpay'],
    icon: 'Building2',
    badge: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'User-centered designs that create better digital experiences.',
    description:
      'Wireframing, interactive Figma prototypes, cohesive brand design systems, and conversion-focused interface architecture engineered for ease of use.',
    deliverables: [
      'User journey mapping & information architecture',
      'High-fidelity interactive Figma prototypes',
      'Design systems with reusable component tokens',
      'WCAG AA accessible contrast and usability testing',
    ],
    technologies: ['Figma', 'Prototyping', 'Design Systems', 'User Research'],
    icon: 'Palette',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    tagline: 'Connect third-party services, payment gateways and more.',
    description:
      'Seamlessly connect your digital systems with Razorpay, Stripe, PayPal, CRMs, WhatsApp Business APIs, shipping partners, and custom webhooks.',
    deliverables: [
      'Payment gateways (Razorpay, Stripe, PayPal)',
      'WhatsApp Business API & automated notifications',
      'CRM & ERP data synchronization',
      'Idempotent webhooks with signature verification',
    ],
    technologies: ['REST APIs', 'GraphQL', 'Webhooks', 'OAuth 2.0', 'Swagger'],
    icon: 'Link2',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
]

export const projectsData: ProjectItem[] = [
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
    projectType: 'Portfolio',
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
    projectType: 'Demo Project',
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
    projectType: 'Portfolio',
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
    projectType: 'Demo Project',
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

export const processStepsData: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your goals, requirements and target audience.',
    details: 'Initial discovery session to map technical feasibility, business requirements, and MVP scope.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Define scope, features, tech stack and timeline.',
    details: 'Database schema modeling, Figma wireframes, API contracts, and sprint roadmap alignment.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop and test the solution with clean code.',
    details: 'Iterative sprint development with modular TypeScript, weekly demos, and staging environment access.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deploy and provide ongoing support.',
    details: 'Zero-downtime production deployment, 100% code handover, documentation, and warranty support.',
  },
]

export const whyChooseData: WhyChooseItem[] = [
  {
    title: 'Clean & Maintainable Code',
    description: 'Built for long-term growth with strict TypeScript types, linting, and scalable folder structures.',
    icon: 'Code2',
  },
  {
    title: 'Transparent Communication',
    description: 'Regular updates and clear timelines. You communicate directly with the engineers building your product.',
    icon: 'MessageSquare',
  },
  {
    title: 'On-Time Delivery',
    description: 'We respect your time and deadlines with upfront milestone scoping and sprint-based progress.',
    icon: 'Clock',
  },
  {
    title: 'Client Satisfaction',
    description: 'Your success drives us. We stand behind our work with full code ownership and dedicated launch support.',
    icon: 'ThumbsUp',
  },
]

export const techStackData: TechItem[] = [
  { name: 'React', category: 'frontend', description: 'Component-driven frontend library', badge: 'Frontend' },
  { name: 'Node.js', category: 'backend', description: 'High-performance event-driven runtime', badge: 'Backend' },
  { name: 'Express', category: 'backend', description: 'Fast, minimalist web framework for Node', badge: 'Backend' },
  { name: 'MongoDB', category: 'database', description: 'Flexible NoSQL document database', badge: 'Database' },
  { name: 'TypeScript', category: 'frontend', description: 'Strict typing for enterprise reliability', badge: 'Language' },
  { name: 'Tailwind CSS', category: 'frontend', description: 'Modern utility-first styling', badge: 'Styling' },
  { name: 'Redux', category: 'frontend', description: 'Predictable state management container', badge: 'State' },
  { name: 'Firebase', category: 'backend', description: 'Cloud database, auth & mobile push', badge: 'Cloud' },
  { name: 'PostgreSQL', category: 'database', description: 'Robust relational database with ACID safety', badge: 'Database' },
  { name: 'Git', category: 'tools', description: 'Distributed version control & CI/CD workflow', badge: 'DevOps' },
]

export const testimonialsData: TestimonialItem[] = [
  {
    quote:
      'NexaTech built our online e-commerce store and inventory portal. The Lighthouse 95+ speed and mobile UX are top-notch, and our sales grew by 40% within 60 days. Direct WhatsApp communication on +91 7870391245 made execution completely friction-free!',
    clientName: 'Priya Sharma',
    role: 'Founder & Director',
    company: 'FabVogue Retail, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    projectTag: 'FabVogue E-Commerce',
  },
  {
    quote:
      'We needed a custom logistics dispatch dashboard and field team mobile tracker. NexaTech delivered clean, modular MERN stack code on schedule with zero technical debt. Truly senior Indian engineers who care about architecture.',
    clientName: 'Rajesh Verma',
    role: 'Head of Technology',
    company: 'QuickLogistics Pvt Ltd, Bangalore',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectTag: 'Enterprise Fleet Tracker',
  },
  {
    quote:
      'During the Durga Puja festive shopping rush, our customer inquiry portal handled huge spikes effortlessly. The ₹9,999 festive website package was phenomenal value for our retail brand. 10/10 recommended!',
    clientName: 'Amitabh Sengupta',
    role: 'Co-Founder',
    company: 'BengalCraft & Retail, Kolkata',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    projectTag: 'Festive Retail Portal',
  },
  {
    quote:
      'Collaborating with NexaTech from the US was seamless. Clear sprint milestones, weekly video reviews, and transparent GitHub commits. They are our go-to engineering partner for custom web and AI integrations.',
    clientName: 'Marcus Vance',
    role: 'VP of Product',
    company: 'CloudSphere Global, Austin, USA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    projectTag: 'CloudSphere SaaS Suite',
  },
]

export const faqsData: FaqItem[] = [
  {
    question: 'What are typical project timelines?',
    answer:
      'A focused business website or MVP typically takes between 3 to 5 weeks. More comprehensive MERN stack applications, multi-tenant CRMs, or AI automation pipelines range from 6 to 10 weeks depending on feature complexity and third-party integrations.',
  },
  {
    question: 'How do you determine pricing and estimates?',
    answer:
      'We provide transparent, milestone-based pricing with clear deliverables. After our discovery call, we outline the exact scope with fixed sprint milestones so there are no unexpected surprises or hidden fees.',
  },
  {
    question: 'Which technologies do you specialize in?',
    answer:
      'Our primary stack is MERN (MongoDB, Express.js, React, Node.js) with TypeScript and Tailwind CSS. For mobile applications, we use React Native and Expo. For AI automation, we leverage OpenAI and Claude APIs with Python/Node.js backends.',
  },
  {
    question: 'How does the revision and feedback process work?',
    answer:
      'We work in iterative sprints with weekly video demos and private staging access. You can test features in real-time, provide feedback, and request adjustments before the final production release.',
  },
  {
    question: 'What maintenance and ongoing support do you provide?',
    answer:
      'Every project includes a complimentary 30-day post-launch warranty covering any bug fixes or stability issues. After 30 days, we offer flexible ongoing maintenance retainers for continuous feature improvements and server monitoring.',
  },
  {
    question: 'Who owns the intellectual property and project assets?',
    answer:
      'You do — 100%. Upon completion of milestones, all source code, Figma design files, database schemas, and API configurations are transferred directly to your organization with zero vendor lock-in.',
  },
]
