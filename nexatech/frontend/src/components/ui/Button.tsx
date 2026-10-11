import React from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'yellow' | 'navy' | 'blue' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'yellow',
  size = 'md',
  children,
  icon,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold tracking-tight rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus-visible:outline-2 focus-visible:outline-offset-2'

  const variants = {
    yellow:
      'bg-[#fed000] hover:bg-[#f5b800] text-[#00285e] font-extrabold shadow-md shadow-amber-400/20 hover:shadow-lg hover:shadow-amber-400/30 active:scale-[0.99] focus-visible:outline-[#fed000]',
    primary:
      'bg-[#fed000] hover:bg-[#f5b800] text-[#00285e] font-extrabold shadow-md shadow-amber-400/20 hover:shadow-lg hover:shadow-amber-400/30 active:scale-[0.99] focus-visible:outline-[#fed000]',
    navy:
      'bg-[#00285e] hover:bg-[#001c44] text-white shadow-md shadow-blue-950/20 hover:shadow-lg active:scale-[0.99] focus-visible:outline-[#00285e]',
    blue:
      'bg-[#0055ff] hover:bg-[#0043cc] text-white shadow-md shadow-blue-600/20 hover:shadow-lg active:scale-[0.99] focus-visible:outline-[#0055ff]',
    outline:
      'border-2 border-slate-300 hover:border-[#00285e] bg-white text-[#00285e] hover:bg-slate-50 shadow-xs active:scale-[0.99] focus-visible:outline-[#00285e]',
    ghost:
      'text-slate-600 hover:text-[#00285e] hover:bg-slate-100 active:scale-[0.99] focus-visible:outline-[#00285e]',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  )
}
