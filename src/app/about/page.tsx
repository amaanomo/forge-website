'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { DoodleCircle, DoodleStar } from '../../components/DoodleAccent'

const timelineData = {
  S25: {
    label: 'S25',
    subtitle: 'Where it all began.',
    body: [
      'Back in Spring 2025, Amaan Sheikh noticed something missing at UB: a space for students who just wanted to build things outside of class. He started reaching out to founders, engineers, and leaders for advice, and everyone agreed: UB needed a community like this.',
      'That idea became Forge. It started small: just a few messages, some calls, and a bunch of "yeah, this should exist" moments. Soon, a team came together, all excited to make UB a place where future founders, devs, designers, and creatives could start building together.',
      'We hosted our first info session and first pitch night that semester. It wasn\'t perfect, but it was packed, and full of momentum. That summer, Amaan connected with alumni in Silicon Valley, got advice from top schools\' campus orgs, and the team built infrastructure for a strong fall launch.',
      'From a missing piece to a growing community. That\'s how Forge began.',
    ],
    photos: ['/myImages/pitch1.png', '/myImages/joinForge.png', '/myImages/speak.jpeg'],
    photoStyles: [
      {},
      { transform: 'scale(1.1)' },
      { objectPosition: 'left 70%' },
    ],
  },
  F25: {
    label: 'F25',
    subtitle: 'Our first full term. The real build begins.',
    body: [
      'This semester marked a turning point as momentum truly took hold.',
      'What began as a space for curious builders evolved into a community centered around growth, collaboration, and ambition.',
      'Members connected with alumni and engineers from Amazon, Google, Microsoft, Walmart, Notion, and Vercel. Resume reviews and mentorship sessions turned conversations into action.',
      'Members regularly pitched ideas, shared progress, and supported one another. Teams attended CalHacks, HackHarvard, and MHacks, with one team earning a track win at UB Hacking. Community events like apple picking helped strengthen connections outside of tech.',
      'By semester end, Forge had become a launchpad: a place where ideas were explored, confidence was built, and members left ready to pursue what came next.',
    ],
    photos: ['/myImages/f25_meeting.jpg', '/myImages/f25_applepicking.jpeg', '/myImages/f25_hackathon.jpg'],
  },
  S26: {
    label: 'S26',
    subtitle: 'The Fellowship wraps.',
    body: [
      'Spring 2026 marked the launch of the Forge Fellowship, a selective semester-long program for builders ready to ship.',
      'The cohort got to tour 43 North, one of the most iconic startup spaces in Buffalo, and spent time with mentors there who shared real advice on building and growing companies.',
      'They also attended a Red Bull workshop, picking up new perspectives from the experience.',
      'Outside of building, the cohort hit the slopes together on a snowboarding trip and all fellows grew closer.',
      'Throughout the semester, fellows were guided by weekly check-ins, hands-on mentorship, and structured accountability, turning early ideas into real, working products. S26 wrapped with Demo Day, where each fellow presented what they built to an audience of mentors, peers, and community members. A semester of building, connecting, and growing. Together.',
    ],
    photos: ['/myImages/43North.jpeg', '/myImages/Snow.jpeg', '/myImages/Redbull.jpeg'],
    photoStyles: [
      { objectPosition: 'center 70%' },
      { objectPosition: 'center 60%', transform: 'scale(1.05)' },
      { objectPosition: 'center 70%', transform: 'scale(1.1) translateX(2%)' },
    ],
  },
}

const periods = [
  { id: 'S25', active: true },
  { id: 'F25', active: true },
  { id: 'S26', active: true },
  { id: 'F26', active: false },
]

export default function About() {
  const [activePeriod, setActivePeriod] = useState<'S25' | 'F25' | 'S26'>('S25')
  const data = timelineData[activePeriod]

  const heroRef = useRef<HTMLDivElement>(null)
  const journeyRef = useRef<HTMLDivElement>(null)

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
    if (journeyRef.current) observer.observe(journeyRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full min-h-screen bg-[#f9f6f2]">
      <Navbar />

      {/* Hero */}
      <section className="w-full pt-32 pb-20 px-8 md:px-20 relative overflow-hidden">
        {/* Doodle accents */}
        <DoodleCircle size={220} opacity={0.06} className="absolute -top-10 -right-10 pointer-events-none" />
        <DoodleStar size={40} opacity={0.12} className="absolute top-24 right-32 pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            {/* Left column - text */}
            <div
              ref={heroRef}
              className="flex-1"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
            >
              <p className="text-[#888888] text-[11px] tracking-[0.2em] uppercase mb-4">About Forge</p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-[#111111] mb-6">
                The dev collective for doers.
              </h1>
              <p className="text-[#444444] text-lg md:text-xl leading-relaxed mb-8">
                Extraordinary things happen when ambitious people come together to build. Forge was
                created to bring that energy to UB: developers, designers, scientists, engineers,
                founders, and future leaders building in public and finding their people.
              </p>
              <Link
                href="/meet-the-team"
                className="inline-block border border-[#005bbb] text-[#005bbb] px-6 py-3 rounded-full hover:bg-[#005bbb] hover:text-white transition-colors text-sm font-medium"
              >
                Meet our team →
              </Link>
            </div>

            {/* Right column - photo */}
            <div className="flex-1 w-full">
              <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src="/myImages/aboutp.jpeg"
                  alt="Forge at UB"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 50%', filter: 'brightness(1.3)' }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-white/70 text-xs tracking-[0.2em] uppercase">
                    UB Forge · Founded S25
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="w-full pb-28 px-8 md:px-20 border-t border-[#111111]/8 pt-20 relative overflow-hidden">
        {/* Doodle accent */}
        <DoodleCircle size={160} opacity={0.06} className="absolute bottom-10 right-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div
            ref={journeyRef}
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
          >
            <h2 className="font-serif text-4xl font-bold text-[#111111] mb-12">Our Journey</h2>
          </div>

          {/* Period tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {periods.map((p) => (
              <button
                key={p.id}
                onClick={() => p.active && setActivePeriod(p.id as 'S25' | 'F25' | 'S26')}
                disabled={!p.active}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  p.active
                    ? activePeriod === p.id
                      ? 'bg-[#111111] text-white'
                      : 'bg-white text-[#111111] border border-[#111111]/15 hover:border-[#111111]/30'
                    : 'bg-[#111111]/5 text-[#5a5a5a] cursor-not-allowed'
                }`}
              >
                {p.id}
              </button>
            ))}
          </div>

          <div key={activePeriod}>
            <h3 className="font-serif text-3xl font-bold text-[#111111] mb-2">{data.label}</h3>
            <p className="text-[#005bbb] font-medium mb-6">{data.subtitle}</p>

            {/* Photos */}
            <div className={`grid gap-3 mb-8 ${data.photos.length >= 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 max-w-lg'}`}>
              {data.photos.map((src, i) => {
                const photoStyle = (data as { photoStyles?: { objectPosition?: string; transform?: string }[] }).photoStyles?.[i]
                return (
                  <div key={i} className={`relative h-44 sm:h-52 rounded-2xl overflow-hidden ${photoStyle?.transform ? 'bg-[#111111]' : ''}`}>
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      style={{ objectPosition: photoStyle?.objectPosition ?? 'center 50%', transform: photoStyle?.transform }}
                    />
                  </div>
                )
              })}
            </div>

            <div className="space-y-4">
              {data.body.map((para, i) => (
                <p key={i} className="text-[#444444] text-lg leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
