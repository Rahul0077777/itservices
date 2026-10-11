import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Check, Rocket, Store, Briefcase, Building2 } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { HeroVisual } from './HeroVisual'

interface HeroProps {
  onStartProjectClick: () => void
  onExploreWorkClick: () => void
}

export const Hero: React.FC<HeroProps> = ({
  onStartProjectClick,
  onExploreWorkClick,
}) => {
  return (
    <section
      id="home"
      aria-label="NexaTech Hero Section"
      className="relative pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-20 lg:pb-6 lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#eef5fc] via-[#f8fafc] to-[#ffffff]"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column (lg:col-span-7): Headline, CTAs, Guarantees */}
          <div className="lg:col-span-7 text-left space-y-3.5 sm:space-y-4">
            {/* Top Tagline Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="font-handwriting text-base sm:text-xl font-semibold text-[#0055ff] -rotate-1 inline-block">
                Modern Software Engineering • Tailored for Growth ✦
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/90 border border-blue-200/90 text-[#0055ff] text-[10px] sm:text-[11px] font-semibold shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fed000] animate-pulse shrink-0" />
                Custom Software • Web • Mobile • AI
              </span>
            </motion.div>

            {/* Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#00285e] tracking-tight leading-tight"
            >
              We Build Digital Solutions That Move Your{' '}
              <span className="relative inline-block text-[#0055ff]">
                Business Forward.
                <span className="absolute bottom-1 left-0 w-full h-2 sm:h-2.5 bg-[#fed000]/45 -z-10 rounded-sm" />
              </span>
            </motion.h1>

            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal max-w-xl"
            >
              From modern websites and custom software to AI-powered automation, we help businesses turn ideas into reliable digital products.
            </motion.p>

            {/* Dual CTAs & Trust Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              className="space-y-3 pt-0.5"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="yellow"
                  size="md"
                  onClick={onStartProjectClick}
                  className="rounded-full px-6 py-2.5 text-xs sm:text-sm font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  icon={<ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />}
                >
                  Start a Project
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  onClick={onExploreWorkClick}
                  className="rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold hover:-translate-y-0.5 transition-all"
                >
                  Explore Our Work
                </Button>
              </div>

              {/* Concise Trust Points */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-[#0055ff] flex items-center justify-center text-[10px]">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="font-semibold text-slate-700">Clean Code</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-[10px]">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="font-semibold text-slate-700">On-Time Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px]">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="font-semibold text-slate-700">Ongoing Support</span>
                </div>
              </div>
            </motion.div>

            {/* 4 Risk-Free Client Guarantees in a Compact 2x2 Grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              className="pt-2"
            >
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 max-w-xl">
                <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-sm">💳</span>
                    <h4 className="text-[11px] sm:text-xs font-bold text-[#00285e]">Milestone Payments</h4>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug">
                    Pay in 3 stages. Release funds after sprint demos.
                  </p>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-sm">📦</span>
                    <h4 className="text-[11px] sm:text-xs font-bold text-[#00285e]">100% Code Ownership</h4>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug">
                    Complete GitHub repository & DB handover.
                  </p>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-sm">⏱️</span>
                    <h4 className="text-[11px] sm:text-xs font-bold text-[#00285e]">On-Time Sprints</h4>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug">
                    Committed milestones backed by weekly demos.
                  </p>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-sm">🛡️</span>
                    <h4 className="text-[11px] sm:text-xs font-bold text-[#00285e]">30-Day Free Warranty</h4>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug">
                    Complimentary 30-day bug resolution included.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (lg:col-span-5): Senior Engineer Portrait + Instant Callout */}
          <div className="lg:col-span-5">
            <HeroVisual onStartProjectClick={onStartProjectClick} />
          </div>
        </div>
      </div>

      {/* Full-width Trusted Ticker Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-4 pt-3 pb-1 border-t border-slate-200/80 w-full max-w-7xl mx-auto px-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 text-slate-600 text-[11px] sm:text-xs font-semibold">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Trusted by Businesses Worldwide:
          </span>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-1.5 hover:text-[#0055ff] transition-colors">
              <Rocket className="w-3.5 h-3.5 text-[#0055ff]" />
              <span>Startups</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5 hover:text-[#0055ff] transition-colors">
              <Store className="w-3.5 h-3.5 text-[#0055ff]" />
              <span>Small Businesses</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5 hover:text-[#0055ff] transition-colors">
              <Briefcase className="w-3.5 h-3.5 text-[#0055ff]" />
              <span>Growing Companies</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5 hover:text-[#0055ff] transition-colors">
              <Building2 className="w-3.5 h-3.5 text-[#0055ff]" />
              <span>Enterprises</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
