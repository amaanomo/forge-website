'use client'

import React from 'react'
import Link from 'next/link'
import { DoodleCircle } from './DoodleAccent'

const CommunitySection = () => {
  return (
    <section className="relative w-full bg-[#f9f6f2] overflow-hidden">
      {/* Doodle circle - corner accent */}
      <DoodleCircle size={120} opacity={0.10} className="absolute top-6 right-6 pointer-events-none" />

      <div className="flex flex-col md:flex-row">
        {/* Left - placeholder gray box */}
        <div
          className="md:w-1/2 bg-gray-200 flex-shrink-0 h-52 sm:h-72 md:h-[520px]"
          style={{ borderRadius: 0 }}
        />

        {/* Right - text */}
        <div className="md:w-1/2 flex flex-col justify-center px-10 md:px-16 py-16 md:py-0">
          <p className="text-[#888888] text-[11px] tracking-[0.2em] uppercase mb-10">
            Community
          </p>

          {/* SunSesh */}
          <div className="mb-8">
            <h3
              className="font-serif text-[#111111] leading-tight mb-3"
              style={{ fontSize: 'clamp(26px, 3vw, 40px)' }}
            >
              SunSesh
            </h3>
            <p className="text-[#888888] text-[16px] leading-relaxed mb-4">
              Every week, builders across UB meet to co-work, trade ideas, and push projects forward. Bring a laptop or just yourself.
            </p>
            <Link
              href="/sunsesh"
              className="text-[#005bbb] hover:text-[#3b82f6] text-sm transition-colors"
            >
              See what we&apos;re building →
            </Link>
          </div>

          <div className="border-t border-[#111111]/10 my-6" />

          {/* Firesides */}
          <div>
            <h3
              className="font-serif text-[#111111] leading-tight mb-3"
              style={{ fontSize: 'clamp(26px, 3vw, 40px)' }}
            >
              Firesides
            </h3>
            <p className="text-[#888888] text-[16px] leading-relaxed mb-4">
              Founders, engineers, and operators sit down with us for honest conversations. No panels. No fluff.
            </p>
            <Link
              href="/firesides"
              className="text-[#005bbb] hover:text-[#3b82f6] text-sm transition-colors"
            >
              Past &amp; upcoming talks →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
