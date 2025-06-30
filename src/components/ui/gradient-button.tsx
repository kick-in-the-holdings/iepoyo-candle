'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

interface GradientButtonProps {
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, onClick, disabled }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center whitespace-nowrap rounded-2xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'

    const variantClasses = {
      primary:
        'bg-gradient-to-r from-miyako-blue to-soft-pink text-white shadow-lg hover:shadow-xl',
      secondary:
        'bg-gradient-to-r from-pale-lavender to-pastel-coral text-gray-800 shadow-md hover:shadow-lg',
      accent:
        'bg-gradient-to-r from-gold-highlight to-mint-green text-gray-900 shadow-md hover:shadow-lg',
    }

    const sizeClasses = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-12 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
    }

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </motion.button>
    )
  }
)

GradientButton.displayName = 'GradientButton'

export { GradientButton }