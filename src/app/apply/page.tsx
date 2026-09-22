'use client'

import Navbar from '../../components/Navbar'
import Link from 'next/link'

export default function Apply() {
  return (
    <div className="w-full min-h-screen bg-[#f9f6f2]">
      <Navbar />
      <div className="pt-32 pb-20 px-8 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 bg-[#111111]/5 border border-[#111111]/15 rounded-full px-5 py-2.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#888888]" />
          <span className="text-[#444444] text-sm">Applications closed</span>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#111111] leading-tight mb-6">
          Applications are closed.
        </h1>
        <p className="text-[#444444] text-xl max-w-xl leading-relaxed mb-10">
          The F26 application window closed on September 20, 2026. Thank you for your interest.
        </p>
        <Link
          href="/fellowship"
          className="text-[#005bbb] hover:text-[#3b82f6] text-sm font-medium transition-colors"
        >
          Learn about the fellowship →
        </Link>
      </div>
    </div>
  )
}
