import React from 'react'
import { motion } from 'motion/react'
import {
  Monitor,
  Layers,
  Brain,
  Smartphone,
  Building2,
  Palette,
  Link2,
  ArrowRight,
  Check,
} from 'lucide-react'
import { servicesData } from '../data'
import { SectionHeading } from '../components/ui/SectionHeading'
import type { ServiceItem } from '../types'

interface ServicesProps {
  onSelectService: (serviceName: string) => void
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-[#0055ff]" />
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#0055ff]" />
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#0055ff]" />
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#0055ff]" />
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#0055ff]" />
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#0055ff]" />
      case 'Link2':
        return <Link2 className="w-5 h-5 text-[#0055ff]" />
      default:
        return <Monitor className="w-5 h-5 text-[#0055ff]" />
    }
  }

  return (
    <section id="services" className="relative py-8 sm:py-12 lg:py-6 lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center bg-white border-t border-slate-100 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="OUR SERVICES"
          badgeVariant="blue"
          title="End-to-End"
          highlightedText="IT Solutions"
          subtitle="Modern, scalable architectures and bespoke software engineering to accelerate your digital growth."
          actionLink={{
            label: 'View All Services',
            href: '#services',
          }}
        />

        {/* 7 Services Grid: 4 on top, 3 on bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {servicesData.slice(0, 4).map((service: ServiceItem, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: 'easeOut' }}
              onClick={() => onSelectService(service.title)}
              className="aayush-card group cursor-pointer flex flex-col justify-between text-left overflow-hidden border border-slate-200/90 hover:border-blue-400 transition-all duration-300"
            >
              <div>
                {/* Top Image Banner */}
                <div className="relative h-20 sm:h-24 w-full overflow-hidden bg-slate-100">
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Floating Icon Badge */}
                  <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-center group-hover:bg-[#00285e] group-hover:text-white transition-all">
                    <span className="group-hover:text-white transition-colors">
                      {getIcon(service.icon)}
                    </span>
                  </div>

                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#fed000] text-[#00285e] shadow-xs border border-amber-300">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Tagline overlay */}
                  <div className="absolute bottom-2 left-2.5 right-2.5">
                    <p className="text-[10px] sm:text-[11px] font-semibold text-white drop-shadow-md truncate">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-2.5 sm:p-3">
                  <h3 className="text-sm font-bold text-[#00285e] group-hover:text-[#0055ff] transition-colors mb-0.5 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-[11px] text-slate-600 leading-relaxed mb-2 font-normal line-clamp-1">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-1 pt-1.5 border-t border-slate-100">
                    {service.deliverables.slice(0, 2).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight text-[11px] font-normal truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies & Bottom Action */}
              <div className="px-2.5 pb-2.5 sm:px-3 sm:pb-3 pt-0">
                <div className="pt-1.5 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="w-full flex items-center justify-between py-1 px-2 rounded-lg bg-slate-50 group-hover:bg-[#00285e] transition-all text-xs border border-slate-200/80">
                    <span className="font-semibold text-[#00285e] group-hover:text-[#fed000] text-[10px] transition-colors">
                      Inquire Details
                    </span>
                    <div className="w-4 h-4 rounded-full bg-white text-[#00285e] flex items-center justify-center group-hover:translate-x-1 group-hover:bg-[#fed000] transition-all shadow-2xs">
                      <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
          {servicesData.slice(4).map((service: ServiceItem, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: (idx + 4) * 0.06, ease: 'easeOut' }}
              onClick={() => onSelectService(service.title)}
              className="aayush-card group cursor-pointer flex flex-col justify-between text-left overflow-hidden border border-slate-200/90 hover:border-blue-400 transition-all duration-300"
            >
              <div>
                <div className="relative h-20 sm:h-24 w-full overflow-hidden bg-slate-100">
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-center group-hover:bg-[#00285e] group-hover:text-white transition-all">
                    <span className="group-hover:text-white transition-colors">
                      {getIcon(service.icon)}
                    </span>
                  </div>

                  {service.badge && (
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#fed000] text-[#00285e] shadow-xs border border-amber-300">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-2 left-2.5 right-2.5">
                    <p className="text-[10px] sm:text-[11px] font-semibold text-white drop-shadow-md truncate">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3">
                  <h3 className="text-sm font-bold text-[#00285e] group-hover:text-[#0055ff] transition-colors mb-0.5 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-[11px] text-slate-600 leading-relaxed mb-2 font-normal line-clamp-1">
                    {service.description}
                  </p>

                  <div className="space-y-1 pt-1.5 border-t border-slate-100">
                    {service.deliverables.slice(0, 2).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight text-[11px] font-normal truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-2.5 pb-2.5 sm:px-3 sm:pb-3 pt-0">
                <div className="pt-1.5 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="w-full flex items-center justify-between py-1 px-2 rounded-lg bg-slate-50 group-hover:bg-[#00285e] transition-all text-xs border border-slate-200/80">
                    <span className="font-semibold text-[#00285e] group-hover:text-[#fed000] text-[10px] transition-colors">
                      Inquire Details
                    </span>
                    <div className="w-4 h-4 rounded-full bg-white text-[#00285e] flex items-center justify-center group-hover:translate-x-1 group-hover:bg-[#fed000] transition-all shadow-2xs">
                      <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
