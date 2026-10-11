import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { faqsData } from '../data'

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="relative py-8 sm:py-12 lg:py-6 lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center bg-[#f8fafc] border-t border-slate-200/80 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="FAQ"
          badgeVariant="blue"
          title="Frequently Asked"
          highlightedText="Questions"
          subtitle="Clear, honest answers about project timelines, pricing structure, tech stacks, and source code ownership."
          align="center"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 text-left">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx
            const qId = `faq-q-${idx}`
            const aId = `faq-a-${idx}`

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.04, ease: 'easeOut' }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white shadow-2xs ${
                  isOpen
                    ? 'border-blue-400 shadow-sm ring-1 ring-blue-100'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  id={qId}
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={aId}
                  className="w-full p-3 sm:p-3.5 flex items-center justify-between gap-3 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0055ff] rounded-2xl"
                >
                  <span className="font-semibold text-[#00285e] text-xs sm:text-sm">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#0055ff]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={aId}
                    role="region"
                    aria-labelledby={qId}
                    className="px-3 pb-3 sm:px-3.5 sm:pb-3.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2 animate-in fade-in duration-150 font-normal"
                  >
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
