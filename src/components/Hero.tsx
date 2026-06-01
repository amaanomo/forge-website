'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { DoodleUnderline, DoodleCircle } from './DoodleAccent'
import { SparklesText } from '@/components/ui/sparkles-text'

const Hero = () => {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (leftRef.current) {
        leftRef.current.style.opacity = '1'
        leftRef.current.style.transform = 'translateY(0)'
      }
    }, 80)
    setTimeout(() => {
      if (rightRef.current) {
        rightRef.current.style.opacity = '1'
      }
    }, 300)
  }, [])

  return (
    <section className="relative w-full bg-[#f9f6f2] flex items-center overflow-hidden">
      {/* Doodle circle — top right background accent */}
      <DoodleCircle
        size={220}
        opacity={0.12}
        className="absolute top-12 right-8 md:right-24 pointer-events-none"
      />

      {/* Doodle circle — bottom left background accent */}
      <DoodleCircle
        size={150}
        opacity={0.10}
        className="absolute bottom-10 left-6 md:left-16 pointer-events-none"
      />

      <div className="w-full flex flex-col md:flex-row items-center md:items-center px-8 md:px-16 gap-8 md:gap-0 pt-28 pb-16 md:pt-64 md:pb-56">

        {/* Left — wordmark + tagline */}
        <div
          ref={leftRef}
          className="flex-1 md:w-[55%] flex flex-col justify-center"
          style={{
            opacity: 0,
            transform: 'translateY(24px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          <SparklesText
            text="FORGE"
            sparklesCount={10}
            colors={{ first: '#005bbb', second: '#3b82f6' }}
            className="font-serif font-bold text-[#111111] leading-none select-none"
            style={{ fontSize: 'clamp(80px, 14vw, 180px)' }}
          />
          {/* Hand-drawn underline beneath wordmark */}
          <DoodleUnderline size={320} opacity={0.45} className="mt-1 mb-1" />

          <p className="text-[#888888] text-[18px] mt-4 tracking-wide font-sans">
            Build. Ship. Repeat.
          </p>
          <p className="text-[#888888] text-[15px] mt-2 font-sans">
            The University at Buffalo&apos;s home for tomorrow&apos;s leaders.
          </p>
          <div className="flex gap-6 mt-6">
            <button
              onClick={() => document.getElementById('what-we-do')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2.5 text-[#111111]/60 hover:text-[#005bbb] text-sm transition-colors"
            >
              <span
                aria-hidden
                className="dot-pulse h-2 w-2 shrink-0 rounded-full bg-[#005bbb]"
              />
              Culture
            </button>
            <Link
              href="/fellowship"
              className="group inline-flex items-center gap-2.5 text-[#111111]/60 hover:text-[#005bbb] text-sm transition-colors"
            >
              <span
                aria-hidden
                className="dot-pulse h-2 w-2 shrink-0 rounded-full bg-[#005bbb]"
                style={{ animationDelay: '1s' }}
              />
              Fellowship
            </Link>
          </div>
        </div>

        {/* Right — video */}
        <div
          ref={rightRef}
          className="md:w-[50%] flex justify-center md:justify-end items-center relative"
          style={{ opacity: 0, transition: 'opacity 1s ease-out' }}
        >
          {/* Video wrapper — clips rounded corners, contains overlay */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg z-10">
            <video
              src="/addedVids/forgewebvid.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-auto object-cover block"
            />
            {/* Founded text — bottom-right on desktop, above icons on mobile */}
            <p className="absolute top-4 left-4 md:top-auto md:bottom-4 md:left-auto md:right-4 text-white text-[11px] tracking-[0.2em] uppercase">
              UB Forge · Founded S25
            </p>

            {/* Social icons — overlaid bottom-left on the video */}
            <div className="absolute bottom-4 left-4 flex items-center gap-4">
              {/* Twitter/X */}
              <a href="https://x.com/ubforge?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                 className="text-white hover:text-white/60 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/ub.forge" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="text-white hover:text-white/60 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/forgeatub" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="text-white hover:text-white/60 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Newsletter (Substack) */}
              <a href="https://ubforge.substack.com/subscribe" target="_blank" rel="noopener noreferrer" aria-label="Newsletter"
                 className="text-white hover:text-white/60 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Blue doodle circle — behind video via -z-10 */}
          <DoodleCircle size={80} opacity={0.35} className="absolute bottom-6 left-2 md:-left-6 -z-10" />
        </div>
      </div>
    </section>
  )
}

export default Hero
