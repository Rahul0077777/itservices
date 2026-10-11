import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Mail, Phone, Sparkles, Flame, MessageCircle } from 'lucide-react'
import { Button } from './ui/Button'

interface NavbarProps {
  onStartProjectClick: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProjectClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Announcement Bar - Single line compact on mobile */}
      <div className="bg-[#00285e] text-white py-1.5 sm:py-2 px-3 sm:px-4 text-xs font-medium border-b border-blue-900/40">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 truncate text-left">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#fed000] text-[#00285e] font-bold text-[10px] uppercase tracking-wider shrink-0 animate-pulse shadow-xs">
              <Flame className="w-3 h-3 fill-current" /> Offer
            </span>
            <span className="text-blue-100 text-[11px] sm:text-xs truncate">
              Website Starting at <strong className="text-[#fed000] font-bold">₹9,999/-</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-6 text-[11px] sm:text-xs shrink-0">
            <a
              href="https://wa.me/917870391245?text=Hello%20NexaTech%2C%20I%20want%20to%20claim%20the%20Special%20%E2%82%B99%2C999%20Website%20Offer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fed000] hover:text-white transition-colors flex items-center gap-1 font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>+91 7870391245</span>
            </a>
            <a
              href="mailto:hello@nexatech.in"
              className="hidden lg:flex hover:text-[#fed000] transition-colors items-center gap-1.5 text-blue-200"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>hello@nexatech.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full bg-white transition-all duration-200 border-b border-slate-200/80 ${
          scrolled ? 'shadow-md py-2 sm:py-3' : 'py-2.5 sm:py-3.5'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 text-[#00285e] focus-visible:outline-2 focus-visible:outline-[#0055ff] rounded-lg p-1 group"
            aria-label="NexaTech IT Solutions Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00285e] to-[#0055ff] flex items-center justify-center text-white shadow-md shadow-blue-900/20">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M6 6V18L12 12V6L6 6Z" fill="#FED000" />
                <path d="M12 12L18 18V6L12 12Z" fill="white" />
                <path d="M6 18L12 12L18 18H6Z" fill="#60A5FA" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-lg tracking-tight text-[#00285e] leading-none">
                Nexa<span className="text-[#0055ff]">Tech</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5">
                IT Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-semibold text-slate-700" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href)
                }}
                className="hover:text-[#0055ff] transition-colors focus-visible:outline-2 focus-visible:outline-[#0055ff] py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              variant="yellow"
              size="sm"
              onClick={onStartProjectClick}
              className="hidden sm:inline-flex rounded-full px-5 text-xs font-bold tracking-wide shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              icon={<ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />}
            >
              Start @ ₹9,999
            </Button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:text-[#00285e] hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-[#0055ff]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pt-4 pb-6 shadow-xl animate-in fade-in duration-150">
          <div className="p-3 mb-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium text-left">
            🎉 <strong>Festive Offer:</strong> Business Website starting at ₹9,999/- only.
            <a
              href="https://wa.me/917870391245?text=Hello%20NexaTech%2C%20I%20want%20to%20claim%20the%20Special%20%E2%82%B99%2C999%20Website%20Offer"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-bold text-[#0055ff] mt-1"
            >
              WhatsApp: +91 7870391245 →
            </a>
          </div>

          <nav className="flex flex-col space-y-2 text-left" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href)
                }}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:text-[#0055ff] hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                variant="yellow"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onStartProjectClick()
                }}
                className="w-full justify-center rounded-full font-bold text-xs"
                icon={<ArrowRight className="w-4 h-4 stroke-[2.5]" />}
              >
                Claim ₹9,999 Package
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
