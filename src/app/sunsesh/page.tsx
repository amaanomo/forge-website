'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { DoodleCircle, DoodleStar } from '../../components/DoodleAccent'

const whatHappens = [
  {
    num: '01',
    title: 'Co-work',
    desc: 'Bring your project: side project, startup, class project, whatever. Work alongside other builders in a focused but social environment.',
  },
  {
    num: '02',
    title: 'Connect',
    desc: 'Meet people working on interesting things. Designers, engineers, founders-in-progress. The connections you make here are worth more than most classes.',
  },
  {
    num: '03',
    title: 'Ship',
    desc: 'Nothing mandatory. No agenda. Just a room of people committed to making something real. A few hours of focused building every Sunday adds up fast.',
  },
]

export default function SunSesh() {
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

      {/* Hero */}
      <section className="w-full pt-32 pb-20 px-8 md:px-20 relative overflow-hidden">
        {/* DoodleCircle top-right */}
        <div className="absolute top-8 right-8 pointer-events-none">
          <DoodleCircle size={200} opacity={0.06} />
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <p className="text-[#888888] text-[11px] tracking-[0.2em] uppercase mb-4">Community</p>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#111111] mb-6">
                Sunday builds.
              </h1>
              <p className="text-[#444444] text-xl leading-relaxed mb-8">
                Every week, builders across UB meet to co-work, trade ideas, and push projects
                forward. Bring a laptop or just yourself.
              </p>
              <a
                href="https://luma.com/calendar/cal-zJkt69wozQWZhcK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#111111] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#333333] transition-colors"
              >
                Come to a SunSesh
              </a>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/myImages/f25_meeting.jpg"
                alt="SunSesh at Forge"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 50%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What happens */}
      <section className="w-full py-20 px-8 md:px-20 border-t border-[#111111]/8">
        <div
          ref={whatRef}
          className="max-w-5xl mx-auto"
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <p className="text-[#888888] text-[11px] tracking-[0.2em] uppercase mb-12">What happens at SunSesh</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatHappens.map((item, i) => (
              <div key={item.num} className="relative">
                {i === 0 && (
                  <div className="absolute -top-3 right-0 pointer-events-none">
                    <DoodleStar size={32} opacity={0.10} />
                  </div>
                )}
                <span className="font-serif text-7xl font-bold leading-none block mb-2 text-[#005bbb]/[0.12]">{item.num}</span>
                <h3 className="font-serif text-xl font-bold text-[#111111] mb-3">{item.title}</h3>
                <p className="text-[#444444] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 px-8 md:px-20 border-t border-[#111111]/8 bg-[#f9f6f2]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-[#111111] mb-4">Come through.</h2>
          <p className="text-[#888888] text-lg mb-8">No application. No requirements. Just show up.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://luma.com/calendar/cal-zJkt69wozQWZhcK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] hover:bg-[#333333] text-white px-7 py-3.5 rounded-full text-sm font-medium transition-colors"
            >
              View Schedule
            </a>
            <Link
              href="/fellowship"
              className="text-[#005bbb] hover:text-[#3b82f6] text-sm font-medium transition-colors"
            >
              Learn about the Fellowship →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
