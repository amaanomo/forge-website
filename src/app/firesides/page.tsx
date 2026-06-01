'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { DoodleCircle, DoodleStar } from '../../components/DoodleAccent'

export default function Firesides() {
  const whatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).style.opacity = '1'
            ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    if (whatRef.current) observer.observe(whatRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full min-h-screen bg-[#f9f6f2]">
      <Navbar />

      {/* Hero - dark photo */}
      <section className="relative w-full min-h-[50vh] flex items-end pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/myImages/fireside.jpeg"
            alt="Forge Firesides"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/30 to-transparent" />
        </div>
        {/* DoodleCircle top-right */}
        <div className="absolute top-8 right-8 z-10 pointer-events-none">
          <DoodleCircle size={220} opacity={0.06} />
        </div>
        <div className="relative z-10 w-full px-8 md:px-20 pb-16 max-w-5xl">
          <p className="text-white/45 text-[11px] tracking-[0.2em] uppercase mb-4">Community</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
            Real talk.
          </h1>
          <p className="text-white/75 text-xl max-w-xl leading-relaxed">
            Founders, engineers, and operators sit down with us for honest conversations.
            No panels. No fluff.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="w-full py-20 px-8 md:px-20 bg-[#f9f6f2]">
        <div
          ref={whatRef}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 pointer-events-none">
              <DoodleStar size={36} opacity={0.10} />
            </div>
            <p className="text-[#888888] text-[11px] tracking-[0.2em] uppercase mb-6">What is a Fireside?</p>
            <p className="text-[#444444] text-lg leading-relaxed">
              A Fireside is an intimate conversation between Forge and someone who has built something
              real. We invite founders, engineers, PMs, and operators to share lessons they
              couldn&apos;t have learned in a classroom.
            </p>
          </div>
          <div>
            <p className="text-[#888888] text-[11px] tracking-[0.2em] uppercase mb-6">Format</p>
            <p className="text-[#444444] text-lg leading-relaxed">
              No panels, no keynotes. Just a candid conversation, Q&amp;A, and time to connect
              after. Open to everyone in the Forge community.
            </p>
          </div>
        </div>
      </section>

      {/* Pull-quote */}
      <section className="w-full px-8 md:px-20 pb-16">
        <div className="max-w-5xl mx-auto">
          <div
            className="bg-[#ede8df] rounded-2xl py-10 px-8 border-l-4 border-[#005bbb] pl-8"
            style={{ boxShadow: '0 0 40px rgba(0,91,187,0.08)' }}
          >
            <p className="font-serif text-3xl md:text-4xl italic font-bold text-[#111111]">
              &ldquo;Some lessons only land when they come from someone who&rsquo;s actually been there.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 px-8 md:px-20 border-t border-[#111111]/8 bg-[#f9f6f2]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-[#111111] mb-4">
            Past &amp; upcoming talks.
          </h2>
          <p className="text-[#888888] text-lg mb-8">
            Check the calendar for next sessions.
          </p>
          <a
            href="https://luma.com/calendar/cal-zJkt69wozQWZhcK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#111111] hover:bg-[#333333] text-white px-7 py-3.5 rounded-full text-sm font-medium transition-colors"
          >
            View Event Calendar
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
