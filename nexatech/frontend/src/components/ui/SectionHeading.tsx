import React from 'react'
import { motion } from 'motion/react'
import { Badge } from './Badge'
import { cn } from '../../utils/cn'

interface SectionHeadingProps {
  badgeText?: string
  badgeVariant?: 'blue' | 'yellow' | 'navy' | 'emerald' | 'purple' | 'slate'
  title: string
  highlightedText?: string
  subtitle?: string
  actionLink?: {
    label: string
    href: string
    onClick?: () => void
  }
  align?: 'left' | 'center'
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  badgeVariant = 'blue',
  title,
  highlightedText,
  subtitle,
  actionLink,
  align = 'left',
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8',
        align === 'center' ? 'text-center mx-auto max-w-4xl' : 'text-left w-full',
        className
      )}
    >
      <div className={align === 'center' ? 'mx-auto' : 'max-w-3xl'}>
        {badgeText && (
          <div className="mb-2.5">
            <Badge variant={badgeVariant}>{badgeText}</Badge>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00285e] tracking-tight leading-[1.2]">
          {title}{' '}
          {highlightedText && (
            <span className="relative inline-block text-[#0055ff]">
              {highlightedText}
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#fed000]/40 -z-10 rounded-sm" />
            </span>
          )}
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {subtitle}
          </p>
        )}
      </div>

      {actionLink && (
        <div className="shrink-0 pt-2 md:pt-0">
          <a
            href={actionLink.href}
            onClick={(e) => {
              if (actionLink.onClick) {
                e.preventDefault()
                actionLink.onClick()
              }
            }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0055ff] hover:text-[#00285e] hover:underline transition-colors group p-1"
          >
            <span>{actionLink.label}</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      )}
    </motion.div>
  )
}
