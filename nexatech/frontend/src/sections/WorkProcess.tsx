import React from 'react'
import { motion } from 'motion/react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { processStepsData } from '../data'
import { Search, Compass, Code, Rocket, ArrowRight } from 'lucide-react'

interface WorkProcessProps {
  onStartProjectClick: () => void
}

export const WorkProcess: React.FC<WorkProcessProps> = ({ onStartProjectClick }) => {
  const getStepIcon = (title: string) => {
    switch (title) {
      case 'Discover':
        return <Search className="w-5 h-5 text-[#0055ff]" />
      case 'Plan':
        return <Compass className="w-5 h-5 text-[#0055ff]" />
      case 'Build':
        return <Code className="w-5 h-5 text-[#0055ff]" />
      case 'Launch':
        return <Rocket className="w-5 h-5 text-[#0055ff]" />
      default:
        return <Search className="w-5 h-5 text-[#0055ff]" />
    }
  }

  return (
    <section id="process" className="relative py-8 sm:py-12 lg:py-6 lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center bg-[#f8fafc] border-t border-slate-200/80 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Heading and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 text-left"
          >
            <div className="mb-1.5">
              <Badge variant="blue">OUR PROCESS</Badge>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#00285e] tracking-tight leading-tight">
              From Idea to Launch, Made Simple.
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
              We follow a clear, transparent engineering process to ensure your project is delivered on time, within budget, and built for scale.
            </p>
            <Button
              variant="yellow"
              size="md"
              onClick={onStartProjectClick}
              className="rounded-full px-6 py-2.5 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              icon={<ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />}
            >
              Start Your Project
            </Button>
          </motion.div>

          {/* Right Column: 4-Step Process Flow in Aayush Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 relative">
              {processStepsData.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  className="aayush-card relative flex flex-col justify-between items-start text-left p-3.5 sm:p-4.5 bg-white border border-slate-200/90 hover:border-blue-300"
                >
                  <div className="w-full">
                    {/* Header with Monogram & Icon Box */}
                    <div className="w-full flex items-center justify-between mb-3">
                      <span className="text-xl sm:text-2xl font-bold font-mono text-slate-300 group-hover:text-[#0055ff] transition-colors">
                        0{index + 1}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#00285e] group-hover:text-white transition-all shadow-2xs">
                        {getStepIcon(step.title)}
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-sm sm:text-base font-bold text-[#00285e] mb-1 group-hover:text-[#0055ff] transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="w-full pt-2 mt-3 border-t border-slate-100 text-[10px] font-semibold text-[#0055ff]">
                    Phase 0{index + 1} Sprints
                  </div>

                  {/* Desktop connector arrow */}
                  {index < processStepsData.length - 1 && (
                    <div className="hidden md:block absolute -right-2.5 top-8 z-10 text-slate-300">
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
