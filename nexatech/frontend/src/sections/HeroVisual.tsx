import React from 'react'
import { motion } from 'motion/react'
import {
  Star,
  Clock,
  ArrowRight,
  Laptop,
  Flame,
  MessageCircle,
} from 'lucide-react'

interface HeroVisualProps {
  onStartProjectClick?: () => void
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ onStartProjectClick }) => {
  return (
    <div className="relative w-full max-w-md mx-auto select-none">
      {/* Visual Composition Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-gradient-to-b from-[#eef5fc] via-[#f5f9fd] to-white rounded-3xl p-3 sm:p-4.5 border border-blue-200/90 shadow-xl"
      >
        {/* Soft Ambient Glow */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-200/30 rounded-full blur-2xl pointer-events-none" />

        {/* Engineer Portrait Frame */}
        <div className="relative mb-3">
          <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white bg-slate-900 group">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85"
              alt="NexaTech Lead IT Consultant & Software Engineer"
              className="w-full h-36 sm:h-44 object-cover object-top group-hover:scale-104 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00285e]/85 via-transparent to-transparent" />

            <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white">
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-[#fed000] flex items-center gap-1">
                  <Laptop className="w-3 h-3" /> Full-Stack Engineering Pod
                </span>
                <h4 className="text-[11px] sm:text-xs font-bold drop-shadow-md">
                  Engineered in India • Global Delivery
                </h4>
              </div>
              <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500 text-white shadow-xs">
                Active Sprint
              </span>
            </div>
          </div>

          {/* Floating Rating Badge */}
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="absolute -top-2 -left-2 z-20 whitespace-nowrap rounded-xl py-1 px-2.5 bg-white/95 backdrop-blur-md shadow-md border border-slate-200 flex items-center gap-1.5"
          >
            <div className="w-5 h-5 rounded-md bg-amber-50 flex items-center justify-center text-amber-500 shadow-2xs">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-bold text-[#00285e]">4.9 / 5.0</span>
                <span className="text-[8px] text-amber-500 font-bold">★★★★★</span>
              </div>
            </div>
          </motion.div>

          {/* Floating MVP Delivery Badge */}
          <motion.div
            animate={{ y: [3, -3, 3] }}
            transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
            className="absolute -bottom-2 -right-2 z-20 whitespace-nowrap rounded-xl py-1 px-2.5 bg-white/95 backdrop-blur-md shadow-md border border-slate-200 flex items-center gap-1.5"
          >
            <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-2xs">
              <Clock className="w-3 h-3" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-bold text-[#00285e] block">2-Week Rapid MVP</span>
            </div>
          </motion.div>
        </div>

        {/* Consultation Callout Box */}
        <div className="p-3 bg-white rounded-2xl border border-blue-100 shadow-2xs text-left">
          <div className="flex items-center justify-between gap-1 mb-1.5">
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#fed000] text-[#00285e]">
              🎁 Free Discovery Call
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-[#0055ff] border border-blue-200 text-[9px] font-semibold">
              <Flame className="w-2.5 h-2.5 text-[#fed000] fill-current" /> Starter: ₹9,999
            </span>
          </div>

          <h4 className="text-xs sm:text-sm font-bold text-[#00285e] leading-snug">
            Get Architecture Blueprint & Roadmap
          </h4>
          <p className="text-[11px] text-slate-500 mt-0.5 mb-2 font-normal">
            Direct review with our lead architect. Fixed milestone quote in 2 hours.
          </p>

          <button
            type="button"
            onClick={onStartProjectClick}
            className="w-full py-2 px-4 rounded-full bg-[#fed000] hover:bg-[#e6bc00] text-[#00285e] font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group/btn"
          >
            <span>Book 15-Min Free Call</span>
            <ArrowRight className="w-3 h-3 stroke-[2.5] group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
            <a
              href="https://wa.me/917870391245?text=Hello%20NexaTech%2C%20I%20want%20to%20discuss%20an%20IT%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold"
            >
              <MessageCircle className="w-3 h-3 text-emerald-600 fill-current" />
              <span>WhatsApp: +91 7870391245</span>
            </a>
            <span className="text-slate-400">Mutual NDA Guaranteed</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
