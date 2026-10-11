import React from 'react'
import { cn } from '../../utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'blue' | 'yellow' | 'navy' | 'emerald' | 'purple' | 'slate'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  className,
}) => {
  const variantStyles = {
    blue: 'bg-blue-50 text-[#0055ff] border-blue-200/80 font-bold',
    yellow: 'bg-amber-50 text-amber-900 border-amber-200 font-bold',
    navy: 'bg-[#00285e] text-white border-[#00285e] font-bold',
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200 font-bold',
    purple: 'bg-purple-50 text-purple-800 border-purple-200 font-bold',
    slate: 'bg-slate-100 text-slate-700 border-slate-200 font-semibold',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs tracking-wide uppercase border transition-colors',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
