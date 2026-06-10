'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { DoodleCircle, DoodleStar } from '../../components/DoodleAccent'

const LinkedInIcon = () => (
  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const WebIcon = () => (
  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
)

type Member = {
  name: string
  role: string
  image: string | null
  initials?: string
  objectPosition?: string
  imageScale?: number
  imageTranslateX?: number
  imageTranslateY?: number
  linkedin?: string
  website?: string
}

const f25Members: Member[] = [
  { name: 'Amaan Sheikh', role: 'Founder', image: '/Headshots/Amaan.JPG', objectPosition: 'center 30%', imageScale: 1.7, imageTranslateY: 8, linkedin: 'https://www.linkedin.com/in/amaansheikhme/', website: 'https://www.amaans.dev/' },
  { name: 'Charlotte Lee', role: 'Director of Operations', image: '/Headshots/charlotte.jpeg', objectPosition: 'center 50%', imageScale: 1.4, imageTranslateX: -4, imageTranslateY: 0, linkedin: 'https://www.linkedin.com/in/charlotte-lee-12795b286/' },
  { name: 'Leya Skaria', role: 'Director of Marketing', image: '/Headshots/Leya.png', objectPosition: 'center 80%', imageScale: 1.5, imageTranslateX: -5, linkedin: 'https://www.linkedin.com/in/leyaskaria/', website: 'https://leyaskarmport.my.canva.site/' },
  { name: 'Christabel Htoo', role: 'Director of Growth & Community', image: '/Headshots/Christabel.JPG', objectPosition: 'center 5%', imageScale: 1.5, imageTranslateY: 10, linkedin: 'https://www.linkedin.com/in/christabel-htoo/' },
  { name: 'Tahmina Fayezi', role: 'Director of Partnerships', image: '/Headshots/Tahmina.jpeg', objectPosition: 'center 65%', imageScale: 1.25, imageTranslateY: 5, linkedin: 'https://www.linkedin.com/in/tahmina-fayezi/', website: 'https://www.tahmina.tech/' },
  { name: 'Hua Yang', role: 'Director of Finance', image: '/Headshots/HuaYang.png', objectPosition: 'center 50%', linkedin: 'https://www.linkedin.com/in/huayang1/' },
  { name: 'Kyler Shih', role: 'Director of Events & Programming', image: '/Headshots/Kyler.JPG', objectPosition: 'center 30%', imageScale: 1.6, imageTranslateX: -3, imageTranslateY: 10, linkedin: 'https://www.linkedin.com/in/kyler-shih-8a66142bb/' },
  { name: 'Matthew Chu', role: 'Director of Events & Programming', image: '/Headshots/MatthewChu.png', objectPosition: 'center 50%', linkedin: 'https://www.linkedin.com/in/matthewchu88/' },
]

const s26Members: Member[] = [
  { name: 'Amaan Sheikh', role: 'Founder', image: '/Headshots/Amaan.JPG', objectPosition: 'center 30%', imageScale: 1.7, imageTranslateY: 8, linkedin: 'https://www.linkedin.com/in/amaansheikhme/', website: 'https://www.amaans.dev/' },
  { name: 'Charlotte Lee', role: 'Director of Operations', image: '/Headshots/charlotte.jpeg', objectPosition: 'center 50%', imageScale: 1.4, imageTranslateX: -4, imageTranslateY: 0, linkedin: 'https://www.linkedin.com/in/charlotte-lee-12795b286/' },
  { name: 'Ivan Chu', role: 'Director of Finance', image: '/Headshots/IvanChu.png', objectPosition: 'center 50%', imageScale: 1.35, imageTranslateX: -3, linkedin: 'https://www.linkedin.com/in/ivan-chu-/' },
  { name: 'Om Sethi', role: 'Director of Events & Programming', image: '/Headshots/om.jpeg', objectPosition: 'center 45%', imageScale: 1.0, linkedin: 'https://www.linkedin.com/in/omsethi-dev/', website: 'https://omsethi.dev/' },
  { name: 'Kyler Shih', role: 'Director of Events & Programming', image: '/Headshots/Kyler.JPG', objectPosition: 'center 30%', imageScale: 1.6, imageTranslateX: -3, imageTranslateY: 10, linkedin: 'https://www.linkedin.com/in/kyler-shih-8a66142bb/' },
  { name: 'Leya Skaria', role: 'Director of Marketing', image: '/Headshots/Leya.png', objectPosition: 'center 80%', imageScale: 1.5, imageTranslateX: -5, linkedin: 'https://www.linkedin.com/in/leyaskaria/', website: 'https://leyaskarmport.my.canva.site/' },
  { name: 'Ivan Wu', role: 'Director of Marketing', image: '/Headshots/IvanWu.JPEG', imageScale: 1.6, imageTranslateY: 7, linkedin: 'https://www.linkedin.com/in/ivanwu23/' },
  { name: 'Christabel Htoo', role: 'Director of Growth & Community', image: '/Headshots/Christabel.JPG', objectPosition: 'center 5%', imageScale: 1.5, imageTranslateY: 10, linkedin: 'https://www.linkedin.com/in/christabel-htoo/' },
  { name: 'Kevin Qu', role: 'Director of Growth & Community', image: '/Headshots/Kevin.JPEG', objectPosition: 'center 50%', imageScale: 1.35, imageTranslateY: 9, linkedin: 'https://www.linkedin.com/in/kevinqu-swe/' },
  { name: 'Tahmina Fayezi', role: 'Director of Partnerships', image: '/Headshots/Tahmina.jpeg', objectPosition: 'center 65%', imageScale: 1.25, imageTranslateY: 5, linkedin: 'https://www.linkedin.com/in/tahmina-fayezi/', website: 'https://www.tahmina.tech/' },
  { name: 'Dev Pradeep', role: 'Director of Partnerships', image: '/Headshots/dev.jpeg', objectPosition: 'center 92%', imageScale: 1.6, imageTranslateX: -1, linkedin: 'https://www.linkedin.com/in/devpradeep-swe/' },
]

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative w-[110px] h-[110px] md:w-[130px] md:h-[130px] mb-3 rounded-full overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_0_28px_rgba(91,156,246,0.40)]">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-all duration-200"
            style={{ objectPosition: member.objectPosition || 'center 50%', transform: member.imageScale ? `scale(${member.imageScale}) translateX(${member.imageTranslateX ?? 0}%) translateY(${member.imageTranslateY ?? 0}%)` : undefined }}
          />
        ) : (
          <div className="w-full h-full rounded-full bg-[#111111]/8 border border-[#111111]/10 flex items-center justify-center transition-all duration-200">
            <span className="font-serif text-xl font-bold text-[#5a5a5a]">{member.initials}</span>
          </div>
        )}
        {/* Hover overlay with links */}
        {(member.linkedin || member.website) && (
          <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            )}
            {member.website && (
              <a href={member.website} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors" aria-label="Website">
                <WebIcon />
              </a>
            )}
          </div>
        )}
      </div>
      <p className="text-[#111111] text-sm font-semibold">{member.name}</p>
      <p className="text-[#5a5a5a] text-xs mt-0.5">{member.role}</p>
    </div>
  )
}

export default function MeetTheTeam() {
  const [activePeriod, setActivePeriod] = useState<'F25' | 'S26'>('S26')
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

      <section className="w-full pt-32 pb-28 px-8 md:px-20 relative overflow-hidden">
        {/* DoodleCircle top-right */}
        <div className="absolute top-8 right-8 pointer-events-none">
          <DoodleCircle size={220} opacity={0.06} />
        </div>
        <div className="max-w-5xl mx-auto">
          <div
            ref={heroRef}
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <p className="text-[#888888] text-[11px] tracking-[0.2em] uppercase">The Team</p>
              <DoodleStar size={36} opacity={0.10} />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#111111] mb-12">
              Built by builders.
            </h1>
          </div>

          {/* Cohort tabs */}
          <div className="flex gap-2 mb-16">
            {(['S26', 'F25'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setActivePeriod(p)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activePeriod === p
                    ? 'bg-[#111111] text-white'
                    : 'bg-white text-[#111111] border border-[#111111]/15 hover:border-[#111111]/30'
                }`}
              >
                {p} {p === 'S26' ? '(Gen 2)' : '(Gen 1)'}
              </button>
            ))}
          </div>

          <div key={activePeriod} className="animate-fade-up">
            <h2 className="font-serif text-2xl font-bold text-[#111111] mb-10">
              {activePeriod === 'F25' ? 'Fall 2025: Gen 1 Board' : 'Spring 2026: Current Board'}
            </h2>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
              {(activePeriod === 'F25' ? f25Members : s26Members).map((member, i) => (
                <div key={member.name + member.role} style={{ animationDelay: `${i * 60}ms` }} className="w-[130px] md:w-[150px]">
                  <MemberCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
