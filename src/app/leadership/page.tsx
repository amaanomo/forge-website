import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { DoodleCircle, DoodleStar } from '@/components/DoodleAccent'

export const metadata: Metadata = {
  title: 'E-Board Applications · Forge',
  description: 'Apply for a Fall 2026 Forge E-Board position.',
  robots: { index: false, follow: false },
}

const APPLICATION_URL = 'YOUR_APPLICATION_URL_HERE'

const positions = [
  {
    title: 'Events & Programming',
    openings: 1,
    description:
      'Plan and execute Forge events: workshops, speaker sessions, hackathons, Demo Day, and everything in between. You own the calendar and the experience.',
    looking:
      'Someone organized and detail-oriented who can juggle logistics without losing the vibe. Experience running events or programs is a plus.',
  },
  {
    title: 'Marketing',
    openings: 1,
    description:
      'Own the Forge brand across social media and content. Film and edit videos from our events, produce reels and highlights, and design graphics and posts that keep our feed consistent and sharp.',
    looking:
      'Comfortable behind a camera and in an editing timeline, and also able to design clean social content in Canva or Figma. Video editing experience (Premiere, CapCut, DaVinci, or similar) is a plus.',
  },
  {
    title: 'Partnerships',
    openings: 1,
    description:
      'Build and maintain relationships with companies, mentors, and alumni who want to engage with Forge. Bring in sponsors, speakers, and resources.',
    looking:
      'Someone confident in outreach and relationship-building. Not afraid to cold email or hop on a call to pitch Forge.',
  },
  {
    title: 'Growth & Community',
    openings: 1,
    description:
      'Grow the Forge community: recruit new members, retain existing ones, and make sure every person who walks through the door feels like they belong.',
    looking:
      'A connector who genuinely cares about people. Experience with community building, recruitment, or member engagement preferred.',
  },
]

export default function Leadership() {
  return (
    <div className="w-full min-h-screen bg-[#f9f6f2]">
      <Navbar />

      {/* Hero */}
      <section className="w-full pt-32 pb-20 px-8 md:px-20 relative overflow-hidden">
        <DoodleCircle size={220} opacity={0.06} className="absolute -top-10 -right-10 pointer-events-none" />
        <DoodleStar size={40} opacity={0.12} className="absolute top-24 right-32 pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          <p className="text-[#888888] text-[11px] tracking-[0.2em] uppercase mb-6">
            Forge E-Board · Fall 2026 Applications
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#111111] leading-tight mb-6">
            Help lead Forge.
          </h1>
          <p className="text-[#444444] text-xl md:text-2xl max-w-2xl leading-relaxed mb-10">
            We&apos;re opening 4 E-Board positions for Fall 2026. If you&apos;ve been part of
            the Forge community and want to help shape what comes next, this is your shot.
          </p>
          <a
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111111] hover:bg-[#333333] text-white font-medium px-8 py-3.5 rounded-full transition-colors text-sm inline-block"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Open Positions */}
      <section className="w-full py-24 px-8 md:px-20 bg-[#ede8df] border-t border-[#111111]/8">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#888888] text-xs tracking-[0.2em] uppercase mb-4">Open Positions</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-4">
            Four roles.
          </h2>
          <p className="text-[#444444] text-lg mb-12 max-w-xl">
            One person per role. Starting Fall 2026.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {positions.map((position) => (
              <div key={position.title} className="bg-white rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-serif text-xl font-bold text-[#111111]">{position.title}</h3>
                  <span className="shrink-0 text-xs font-medium bg-[#005bbb]/10 text-[#005bbb] px-3 py-1 rounded-full">
                    {position.openings} opening
                  </span>
                </div>
                <p className="text-[#444444] text-sm leading-relaxed mb-4">{position.description}</p>
                <div className="border-t border-[#111111]/8 pt-4">
                  <p className="text-[#888888] text-xs tracking-[0.15em] uppercase mb-2">We&apos;re looking for</p>
                  <p className="text-[#444444] text-sm leading-relaxed">{position.looking}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Review */}
      <section className="w-full py-24 px-8 md:px-20 border-t border-[#111111]/8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#888888] text-xs tracking-[0.2em] uppercase mb-4">The Process</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-10">
            How we review.
          </h2>

          <div className="bg-[#ede8df] rounded-2xl p-8 border border-[#111111]/8 space-y-6">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">Application</h3>
              <p className="text-[#444444] leading-relaxed">
                Fill out the application form linked above. Tell us which role you&apos;re applying for,
                why you want it, and what you&apos;d bring to the team. Be specific. Generic answers
                won&apos;t stand out.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">Interview</h3>
              <p className="text-[#444444] leading-relaxed">
                Shortlisted applicants will be invited for a short interview with current E-Board
                members. We want to get to know you and make sure the role is a good fit on both sides.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">Decision</h3>
              <p className="text-[#444444] leading-relaxed">
                All applicants will hear back regardless of outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full py-24 px-8 md:px-20 bg-[#f9f6f2] border-t border-[#111111]/8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#888888] text-xs tracking-[0.2em] uppercase mb-6">Interested?</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-6">
            Ready to lead?
            <br />
            <span className="italic text-[#444444]">Apply before spots fill.</span>
          </h2>
          <p className="text-[#444444] text-lg mb-10 leading-relaxed">
            This page is shared with Forge Fellows and their referrals.
            Applications are reviewed on a rolling basis.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] hover:bg-[#333333] text-white font-medium px-8 py-3.5 rounded-full transition-colors text-sm"
            >
              Apply Now
            </a>
            <a
              href="mailto:forge@buffalo.edu"
              className="text-[#005bbb] hover:text-[#3b82f6] transition-colors text-sm font-medium"
            >
              Questions? Email us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
