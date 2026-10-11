import React, { useState, useEffect } from 'react'
import { Home, Layers, Briefcase, Flame, MessageCircle } from 'lucide-react'

interface MobileBottomNavProps {
  onStartProjectClick: () => void
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onStartProjectClick }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'projects' | 'offer' | 'whatsapp'>('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      const servicesElem = document.getElementById('services')
      const projectsElem = document.getElementById('projects')
      const contactElem = document.getElementById('contact')

      if (contactElem && scrollPosition >= contactElem.offsetTop) {
        setActiveTab('offer')
      } else if (projectsElem && scrollPosition >= projectsElem.offsetTop) {
        setActiveTab('projects')
      } else if (servicesElem && scrollPosition >= servicesElem.offsetTop) {
        setActiveTab('services')
      } else {
        setActiveTab('home')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string, tab: typeof activeTab) => {
    setActiveTab(tab)
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const elem = document.getElementById(id)
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      aria-label="Mobile Bottom App Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-8px_24px_rgba(0,40,94,0.09)] px-2 py-1.5 pb-[max(0.4rem,env(safe-area-inset-bottom))] flex items-center justify-around select-none transition-all"
    >
      {/* Home Tab */}
      <button
        type="button"
        onClick={() => scrollTo('top', 'home')}
        className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer ${
          activeTab === 'home'
            ? 'text-[#0055ff] font-bold scale-105'
            : 'text-slate-500 hover:text-[#00285e] font-medium'
        }`}
      >
        <Home className={`w-5 h-5 ${activeTab === 'home' ? 'stroke-[2.5]' : 'stroke-2'}`} />
        <span className="text-[10px] mt-0.5 tracking-tight">Home</span>
      </button>

      {/* Services Tab */}
      <button
        type="button"
        onClick={() => scrollTo('services', 'services')}
        className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer ${
          activeTab === 'services'
            ? 'text-[#0055ff] font-bold scale-105'
            : 'text-slate-500 hover:text-[#00285e] font-medium'
        }`}
      >
        <Layers className={`w-5 h-5 ${activeTab === 'services' ? 'stroke-[2.5]' : 'stroke-2'}`} />
        <span className="text-[10px] mt-0.5 tracking-tight">Services</span>
      </button>

      {/* Projects Tab */}
      <button
        type="button"
        onClick={() => scrollTo('projects', 'projects')}
        className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer ${
          activeTab === 'projects'
            ? 'text-[#0055ff] font-bold scale-105'
            : 'text-slate-500 hover:text-[#00285e] font-medium'
        }`}
      >
        <Briefcase className={`w-5 h-5 ${activeTab === 'projects' ? 'stroke-[2.5]' : 'stroke-2'}`} />
        <span className="text-[10px] mt-0.5 tracking-tight">Projects</span>
      </button>

      {/* Featured Offer Tab (App Highlight Button) */}
      <button
        type="button"
        onClick={() => {
          setActiveTab('offer')
          onStartProjectClick()
        }}
        className="relative -top-2 flex flex-col items-center justify-center transition-all cursor-pointer group active:scale-95"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#fed000] to-[#ffe043] text-[#00285e] flex items-center justify-center shadow-lg shadow-amber-400/40 border-2 border-white group-hover:scale-105 transition-transform">
          <Flame className="w-6 h-6 fill-[#00285e] animate-pulse" />
        </div>
        <span className="text-[10px] font-bold text-[#00285e] mt-0.5 tracking-tight">
          ₹9,999
        </span>
      </button>

      {/* Direct WhatsApp Call/Chat Tab */}
      <a
        href="https://wa.me/917870391245?text=Hello%20Aman%2C%20I%20want%20to%20discuss%20an%20IT%20project%20or%20the%20%E2%82%B99%2C999%20website%20offer"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Aman on WhatsApp"
        className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-emerald-600 hover:text-emerald-700 font-semibold cursor-pointer active:scale-95 transition-all"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white animate-ping" />
        </div>
        <span className="text-[10px] mt-0.5 tracking-tight font-bold">WhatsApp</span>
      </a>
    </nav>
  )
}
