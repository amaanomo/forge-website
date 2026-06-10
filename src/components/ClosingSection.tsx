'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { DoodleCircle, DoodleStar, DoodleUnderline } from './DoodleAccent'

const ClosingSection = () => {
  const headingRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.2 }
    )

    ;[headingRef, subRef, ctaRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative w-full bg-[#f9f6f2] overflow-hidden pt-0 pb-36 px-8 md:px-20">

      {/* Background doodles */}
      <DoodleCircle
        size={260}
        opacity={0.06}
        className="absolute -top-12 -left-16 pointer-events-none"
      />
      <DoodleCircle
        size={140}
        opacity={0.07}
        className="absolute bottom-10 right-10 pointer-events-none"
      />
      <DoodleStar
        size={36}
        opacity={0.18}
        className="absolute top-16 right-1/4 pointer-events-none"
      />
      <DoodleStar
        size={22}
        opacity={0.15}
        className="absolute bottom-20 left-1/3 pointer-events-none"
      />

      {/* Content - centered */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">

        {/* Thin rule */}
        <div className="w-12 h-px bg-[#005bbb] mb-16 opacity-60" />

        {/* Headline */}
        <div
          ref={headingRef}
          style={{
            opacity: 0,
            transform: 'translateY(32px)',
            transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
          }}
        >
          <h2
            className="font-serif italic text-[#111111] leading-tight tracking-tight"
            style={{ fontSize: 'clamp(38px, 7vw, 96px)' }}
          >
            Forge your future.
          </h2>
          <div className="flex justify-center mt-1">
            <DoodleUnderline size={420} opacity={0.38} />
          </div>
        </div>

        {/* Subtext */}
        <p
          ref={subRef}
          className="text-[#888888] text-[17px] leading-relaxed mt-8 max-w-md"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.9s ease-out 0.18s, transform 0.9s ease-out 0.18s',
          }}
        >
          Building the next generation of student entrepreneurs and innovators.
        </p>


      </div>
    </section>
  )
}

export default ClosingSection
