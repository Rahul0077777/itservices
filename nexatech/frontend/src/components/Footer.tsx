import React from 'react'
import { GithubIcon, LinkedinIcon, XTwitterIcon, YoutubeIcon } from './ui/Icons'

interface FooterProps {
  onSelectService: (serviceName: string) => void
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  const serviceLinks = [
    'Web Development',
    'MERN Stack Applications',
    'AI Automation',
    'Mobile App Development',
    'SaaS / CRM Development',
    'UI/UX Design',
    'API Integration',
  ]

  return (
    <footer className="bg-[#00285e] text-blue-100 pt-8 sm:pt-10 pb-20 md:pb-8 border-t border-blue-900 text-left">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-6 sm:pb-8 border-b border-blue-800/80">
          {/* Logo & Brand description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-xl bg-white p-[2px] shadow-md">
                <div className="w-full h-full bg-[#00285e] rounded-[9px] flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6V18L12 12V6L6 6Z" fill="#fed000" />
                    <path d="M12 12L18 18V6L12 12Z" fill="#60a5fa" />
                    <path d="M6 18L12 12L18 18H6Z" fill="#ffffff" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white leading-none">
                  Nexa<span className="text-[#fed000]">Tech</span>
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-blue-200 uppercase mt-0.5">
                  IT Solutions
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-sm font-normal">
              A modern IT development agency serving startups, small businesses, and growing companies in India and worldwide. Engineered with clean code and zero technical debt.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-900/60 hover:bg-[#fed000] text-white hover:text-[#00285e] flex items-center justify-center transition-all border border-blue-700/60 shadow-2xs"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-900/60 hover:bg-[#fed000] text-white hover:text-[#00285e] flex items-center justify-center transition-all border border-blue-700/60 shadow-2xs"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-900/60 hover:bg-[#fed000] text-white hover:text-[#00285e] flex items-center justify-center transition-all border border-blue-700/60 shadow-2xs"
                aria-label="X Twitter"
              >
                <XTwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-900/60 hover:bg-[#fed000] text-white hover:text-[#00285e] flex items-center justify-center transition-all border border-blue-700/60 shadow-2xs"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#fed000]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#fed000] transition-colors py-0.5 inline-block text-blue-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#fed000]">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="hover:text-[#fed000] transition-colors cursor-pointer text-left py-0.5 text-blue-100"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="lg:col-span-2 space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#fed000]">
              Get In Touch
            </h4>
            <div className="space-y-2 text-blue-100 leading-relaxed">
              <div>
                <a
                  href="mailto:hello@nexatech.in"
                  className="hover:text-[#fed000] transition-colors block text-white font-bold"
                >
                  hello@nexatech.in
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/917870391245?text=Hello%20NexaTech%2C%20I%20would%20like%20to%20discuss%20an%20IT%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#fed000] transition-colors block text-[#fed000] font-bold"
                >
                  +91 7870391245
                </a>
              </div>
              <div className="text-blue-200 text-xs">India & Global Clients • 20+ Delivered Systems</div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-200">
          <div>
            © {currentYear} NexaTech IT Solutions. All rights reserved. 100% Client Code & IP Ownership.
          </div>
          <div className="flex items-center gap-4">
            <span>Clean Code Architecture • Mutual NDA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
