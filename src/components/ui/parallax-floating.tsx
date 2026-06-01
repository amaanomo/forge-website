'use client'

import React, { useRef } from 'react'
import { useAnimationFrame } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useMousePositionRef } from '@/hooks/use-mouse-position-ref'

interface FloatingProps {
  sensitivity?: number
  className?: string
  children: React.ReactNode
}

interface FloatingElementProps {
  depth?: number
  className?: string
  children: React.ReactNode
}

export function FloatingElement({ depth = 1, className, children }: FloatingElementProps) {
  return (
    <div
      data-depth={depth}
      className={cn('absolute', className)}
    >
      {children}
    </div>
  )
}

export function Floating({ sensitivity = -0.5, className, children }: FloatingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePositionRef(containerRef as React.RefObject<HTMLElement | null>)

  useAnimationFrame(() => {
    const container = containerRef.current
    if (!container) return
    const elements = container.querySelectorAll<HTMLElement>('[data-depth]')
    elements.forEach((el) => {
      const depth = parseFloat(el.dataset.depth ?? '1')
      const x = mousePosition.current.x * sensitivity * depth * 60
      const y = mousePosition.current.y * sensitivity * depth * 60
      el.style.transform = `translate(${x}px, ${y}px)`
    })
  })

  return (
    <div
      ref={containerRef}
      className={cn('absolute inset-0', className)}
    >
      {children}
    </div>
  )
}
