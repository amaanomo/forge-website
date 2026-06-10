import React from 'react'
import Link from 'next/link'
import { DoodleUnderline, DoodleCircle } from './DoodleAccent'

const FellowshipTeaser = () => {
  return (
    <section className="relative w-full bg-[#ede8df] py-20 md:py-36 px-8 md:px-20 overflow-hidden">
      {/* Doodle circle - background */}
      <DoodleCircle size={200} opacity={0.10} className="absolute top-8 right-8 pointer-events-none" />
      <DoodleCircle size={100} opacity={0.08} className="absolute bottom-12 left-12 pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <p className="text-[#888888] text-[11px] tracking-[0.2em] uppercase mb-6">
          THE FELLOWSHIP
        </p>
        <h2
          className="font-serif italic text-[#111111] leading-tight mb-2"
          style={{ fontSize: 'clamp(48px, 6vw, 88px)' }}
        >
          The Fellowship.
        </h2>
        {/* Squiggly underline under heading */}
        <DoodleUnderline size={340} opacity={0.4} className="mb-6" />
        <p className="text-[#888888] text-[16px] mb-8">
          S26 cohort · In session.
        </p>
        <Link
          href="/fellowship"
          className="text-[#005bbb] hover:text-[#3b82f6] text-sm transition-colors"
        >
          Learn more →
        </Link>
      </div>
    </section>
  )
}

export default FellowshipTeaser
