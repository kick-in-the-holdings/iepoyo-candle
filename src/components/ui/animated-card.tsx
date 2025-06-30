'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  children: React.ReactNode
  hoverEffect?: boolean
  delay?: number
  className?: string
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, children, hoverEffect = true, delay = 0 }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-lg bg-white p-6 shadow-md transition-shadow duration-300',
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.6,
          delay,
          ease: 'easeOut',
        }}
        whileHover={
          hoverEffect
            ? {
                y: -4,
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              }
            : undefined
        }
      >
        {children}
      </motion.div>
    )
  }
)

AnimatedCard.displayName = 'AnimatedCard'

export { AnimatedCard }