import React from 'react'
import { motion } from 'motion/react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import {
  Code2,
  MessageSquare,
  Clock,
  ThumbsUp,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Award,
  Laptop,
} from 'lucide-react'
import { techStackData } from '../data'

interface WhyUsAndTechProps {
  onStartProjectClick: () => void
}

export const WhyUsAndTech: React.FC<WhyUsAndTechProps> = ({ onStartProjectClick }) => {
  return (
    <section id="about" className="relative py-8 sm:py-12 lg:py-6 lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center bg-white border-t border-slate-200/80 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-4 sm:mb-6"
        >
          <Badge variant="blue">OUR IMPACT & PHILOSOPHY</Badge>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#00285e] tracking-tight mt-1.5">
            Why High-Growth Companies Work With{' '}
            <span className="text-[#0055ff] relative inline-block">
              NexaTech
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#fed000]/45 -z-10 rounded-sm" />
            </span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            We bridge the gap between creative product vision and production-grade software engineering with zero fluff and full transparency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Block: Team Photography & Navy Impact Stats */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-5"
          >
            {/* Real Collaborative Indian Software Engineering Team Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                alt="NexaTech Indian Software Engineering Team Collaborating"
                className="w-full h-36 sm:h-44 object-cover object-center group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00285e]/80 via-transparent to-transparent" />

              {/* Floating Experience Badge */}
              <div className="absolute top-2.5 left-2.5 rounded-xl py-1 px-2.5 bg-white/95 backdrop-blur-md shadow-md border border-white/80 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#fed000] text-[#00285e] flex items-center justify-center font-bold text-xs">
                  ★
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#00285e] block">5+ Years Track Record</span>
                  <span className="text-[8px] text-slate-500 font-medium">Delivering Scalable IT</span>
                </div>
              </div>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-[#fed000] flex items-center gap-1">
                  <Users className="w-3 h-3" /> Direct Developer Pods
                </span>
                <h4 className="text-xs font-bold drop-shadow-md mt-0.5">
                  Senior Engineers • Transparent Milestones • Clean TypeScript
                </h4>
              </div>
            </div>

            {/* Aayush Style Deep Navy Stats Bar */}
            <div className="rounded-2xl bg-[#00285e] text-white p-2.5 sm:p-3 shadow-lg border border-blue-900/40">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center">
                <div className="p-1">
                  <div className="text-lg sm:text-xl font-bold text-[#fed000]">20+</div>
                  <div className="text-[9px] font-medium text-blue-100 mt-0.5">Apps Delivered</div>
                </div>
                <div className="p-1 border-l border-blue-800/60">
                  <div className="text-lg sm:text-xl font-bold text-white">99.2%</div>
                  <div className="text-[9px] font-medium text-blue-100 mt-0.5">On-Time Milestones</div>
                </div>
                <div className="p-1 sm:border-l border-blue-800/60">
                  <div className="text-lg sm:text-xl font-bold text-[#fed000]">24/7</div>
                  <div className="text-[9px] font-medium text-blue-100 mt-0.5">Dedicated Support</div>
                </div>
                <div className="p-1 border-l border-blue-800/60">
                  <div className="text-lg sm:text-xl font-bold text-white">100%</div>
                  <div className="text-[9px] font-medium text-blue-100 mt-0.5">IP Ownership</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Block: 4 Value Cards & Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-between space-y-3 sm:space-y-4"
          >
            {/* 4 Feature Items in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-left">
              <div className="aayush-card p-2.5 sm:p-3 border border-slate-200/90 hover:border-blue-300">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0055ff] flex items-center justify-center mb-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#00285e] mb-0.5">
                  Clean & Maintainable Code
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                  Strict TypeScript types, modular MVC, and zero messy technical debt. Your future engineers will love it.
                </p>
              </div>

              <div className="aayush-card p-2.5 sm:p-3 border border-slate-200/90 hover:border-blue-300">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#00285e] mb-0.5">
                  Direct Developer Access
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                  No layers of slow account managers. Speak directly to the engineers architecting your product.
                </p>
              </div>

              <div className="aayush-card p-2.5 sm:p-3 border border-slate-200/90 hover:border-blue-300">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-1.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#00285e] mb-0.5">
                  On-Time Sprint Milestones
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                  Weekly staging deployments, transparent GitHub tracking, and clear deliverables verified before signoff.
                </p>
              </div>

              <div className="aayush-card p-2.5 sm:p-3 border border-slate-200/90 hover:border-blue-300">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5">
                  <ThumbsUp className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#00285e] mb-0.5">
                  100% Client IP & Warranty
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                  Complete mutual NDA, full source code handover, and complimentary 30-day post-launch warranty.
                </p>
              </div>
            </div>

            {/* Tech Stack Banner */}
            <div className="aayush-card p-3 sm:p-3.5 text-left border border-slate-200/90">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0055ff]">
                    Technologies We Master
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#00285e]">
                    Modern, Production-Ready Stack
                  </h3>
                </div>
                <Button
                  variant="yellow"
                  size="sm"
                  onClick={onStartProjectClick}
                  className="rounded-full px-4 py-1.5 text-xs font-bold shadow-sm self-start sm:self-auto hover:-translate-y-0.5 transition-all"
                  icon={<ArrowRight className="w-3 h-3 stroke-[2.5]" />}
                >
                  Start Consultation
                </Button>
              </div>

              {/* Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {techStackData.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/50 transition-all text-center"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[10px] font-mono font-bold text-[#0055ff] mb-1 shadow-2xs">
                      {tech.name.substring(0, 2)}
                    </div>
                    <span className="text-[10px] font-semibold text-[#00285e] truncate w-full">
                      {tech.name}
                    </span>
                    <span className="text-[8px] text-slate-500 font-medium">{tech.badge}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-semibold text-emerald-700">
                  <ShieldCheck className="w-3.5 h-3.5" /> Mutual Non-Disclosure Agreement (NDA) Included
                </span>
                <span className="font-semibold text-[#0055ff]">Zero Vendor Lock-in</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

