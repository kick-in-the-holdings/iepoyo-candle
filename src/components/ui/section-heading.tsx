'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  gradient?: boolean
  className?: string
}

const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, title, subtitle, align = 'center', gradient = false }, ref) => {
    const alignClasses = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    }

    const titleClasses = gradient
      ? 'bg-gradient-to-r from-miyako-blue to-soft-pink bg-clip-text text-transparent'
      : 'text-gray-900'

    return (
      <motion.div
        ref={ref}
        className={cn('mb-8', alignClasses[align], className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className={cn('text-3xl font-bold md:text-4xl', titleClasses)}>
          {title}
        </h2>
        {subtitle && (
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    )
  }
)

SectionHeading.displayName = 'SectionHeading'

export { SectionHeading }