import React from 'react'
import { motion } from 'motion/react'
import { Badge } from '../components/ui/Badge'
import { testimonialsData } from '../data'
import { Quote, Star } from 'lucide-react'

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-8 sm:py-12 lg:py-6 lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center bg-white border-t border-slate-200/80 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="text-left mb-4 sm:mb-6"
        >
          <div className="mb-1">
            <Badge variant="blue">CLIENT FEEDBACK</Badge>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
            <div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#00285e] tracking-tight leading-tight">
                Trusted by Indian & Global Businesses
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Real feedback from founders, tech leads, and enterprises across India and international markets.
              </p>
            </div>
            <span className="text-xs text-[#0055ff] font-semibold bg-blue-50 px-3 py-1 rounded-full border border-blue-200 w-fit shrink-0">
              ★ 4.9/5 Rating Across 20+ Engagements
            </span>
          </div>
        </motion.div>

        {/* 4 Testimonials in Standard 4-Cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: 'easeOut' }}
              className="aayush-card p-3 sm:p-4 flex flex-col justify-between text-left bg-white border border-slate-200/90 hover:border-blue-300"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <Quote className="w-5 h-5 text-blue-200" />
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic mb-3.5 font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center gap-2.5">
                <img
                  src={item.avatar}
                  alt={`${item.clientName} portrait`}
                  className="w-9 h-9 rounded-full object-cover border-2 border-blue-100 shadow-2xs shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#00285e] leading-tight truncate">
                    {item.clientName}
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-normal truncate">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
