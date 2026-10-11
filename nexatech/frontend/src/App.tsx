import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { MobileBottomNav } from './components/MobileBottomNav'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { FeaturedProjects } from './sections/FeaturedProjects'
import { WorkProcess } from './sections/WorkProcess'
import { WhyUsAndTech } from './sections/WhyUsAndTech'
import { ComparisonMatrix } from './sections/ComparisonMatrix'
import { Testimonials } from './sections/Testimonials'
import { Faq } from './sections/Faq'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'
import { MessageCircle } from 'lucide-react'

export function App() {
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('Web Development')

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServicePreset(serviceName)
    }
    const contactElem = document.getElementById('contact')
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        const input = document.getElementById('fullName')
        if (input) {
          input.focus()
        }
      }, 500)
    }
  }

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('projects')
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-slate-800 antialiased selection:bg-[#0055ff] selection:text-white flex flex-col overflow-x-hidden pb-16 md:pb-0">
      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#0055ff] text-white font-bold rounded-lg shadow-lg focus-visible:outline-2 focus-visible:outline-white"
      >
        Skip to main content
      </a>

      {/* A. Responsive Navbar */}
      <Navbar onStartProjectClick={() => scrollToContact()} />

      <main id="main-content" className="grow w-full">
        {/* B. Hero Section */}
        <Hero
          onStartProjectClick={() => scrollToContact()}
          onExploreWorkClick={scrollToProjects}
        />

        {/* C. Services Section */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* D. Featured Projects Section */}
        <FeaturedProjects onInquireProject={(project) => scrollToContact(`Project: ${project}`)} />

        {/* E. Work Process Section */}
        <WorkProcess onStartProjectClick={() => scrollToContact()} />

        {/* F, G. Why Choose Us, Technology Stack & Impact */}
        <WhyUsAndTech onStartProjectClick={() => scrollToContact()} />

        {/* H. Transparent Comparison Matrix */}
        <ComparisonMatrix onStartProjectClick={() => scrollToContact()} />

        {/* I. Testimonials Section */}
        <Testimonials />

        {/* J. FAQ Section */}
        <Faq />

        {/* K. Contact & Inquiry Section */}
        <Contact selectedServicePreset={selectedServicePreset} />
      </main>

      {/* L. Footer */}
      <Footer onSelectService={(service) => scrollToContact(service)} />

      {/* M. Mobile Bottom App Bar (Native App Feel) */}
      <MobileBottomNav onStartProjectClick={() => scrollToContact()} />

      {/* Floating WhatsApp Action Button (Desktop/Tablet) */}
      <a
        href="https://wa.me/917870391245?text=Hello%20NexaTech%2C%20I%20am%20interested%20in%20an%20IT%20solution%20and%20the%20%E2%82%B99%2C999%20website%20offer"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NexaTech Founder on WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-5 rounded-full shadow-2xl whatsapp-pulse transition-all duration-300 hover:scale-108 cursor-pointer group"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="font-bold text-xs sm:text-sm tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  )
}

export default App
