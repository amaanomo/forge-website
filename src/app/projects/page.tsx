'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { DoodleCircle } from '../../components/DoodleAccent'

export default function Projects() {
  const heroRef = useRef<HTMLDivElement>(null)

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
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full min-h-screen bg-[#f9f6f2]">
      <Navbar />
      <div className="pt-20">
        <div className="w-full px-8 md:px-20 pt-14 pb-2 relative overflow-hidden">
          {/* DoodleCircle top-right */}
          <div className="absolute top-4 right-8 pointer-events-none">
            <DoodleCircle size={200} opacity={0.06} />
          </div>
          <div
            ref={heroRef}
            className="max-w-6xl mx-auto"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
          >
            <p className="text-[#888888] text-[11px] tracking-[0.2em] uppercase mb-4">Projects</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#111111] mb-4">
              What we build.
            </h1>
            <p className="text-[#444444] text-xl max-w-xl">
              Real projects from the Forge community: hackathons, products, tools, and experiments.
            </p>

            {/* Stat strip - commented out until S26 projects are ready to showcase */}
            {/* <div className="flex flex-wrap gap-0 mt-12 mb-4 divide-x divide-[#111111]/10">
              <div className="pr-10">
                <p className="font-serif text-4xl font-bold text-[#111111]">5+</p>
                <p className="text-[#888888] text-xs uppercase tracking-widest mt-1">Projects</p>
              </div>
              <div className="px-10">
                <p className="font-serif text-4xl font-bold text-[#111111]">5</p>
                <p className="text-[#888888] text-xs uppercase tracking-widest mt-1">Hackathons</p>
              </div>
              <div className="pl-10">
                <p className="font-serif text-4xl font-bold text-[#111111]">200k+</p>
                <p className="text-[#888888] text-xs uppercase tracking-widest mt-1">Users</p>
              </div>
            </div> */}
          </div>
        </div>
        {/* Post-S26 placeholder */}
        <div className="w-full px-8 md:px-20 py-20 border-t border-[#111111]/8">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-4">
              This page will be updated shortly.
            </h2>
            <p className="text-[#888888] text-lg leading-relaxed">
              The S26 cohort has wrapped. Stay tuned for a full showcase of what they built.
            </p>
          </div>
        </div>
        <section className="w-full py-16 px-8 md:px-20 border-t border-[#111111]/8 bg-[#f9f6f2]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-[#111111] mb-4">Start building.</h2>
            <p className="text-[#888888] text-lg mb-8">
              The next project on this page could be yours. Show up to SunSesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://luma.com/calendar/cal-zJkt69wozQWZhcK"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111111] hover:bg-[#333333] text-white px-7 py-3.5 rounded-full text-sm font-medium transition-colors"
              >
                Join a SunSesh
              </a>
              <Link
                href="/fellowship"
                className="text-[#005bbb] hover:text-[#3b82f6] text-sm font-medium transition-colors"
              >
                Apply to Fellowship →
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
