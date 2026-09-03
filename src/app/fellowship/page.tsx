import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { DoodleCircle, DoodleStar } from '../../components/DoodleAccent'

const APPLICATION_URL = '/apply'

const pillars = [
  { name: 'Ambition', desc: 'We look for people with a bias toward doing, not just thinking.' },
  { name: 'Innovation', desc: 'Novel approaches. Unconventional thinking. Better solutions.' },
  { name: 'Consistency', desc: 'Showing up every week, not just when inspiration strikes.' },
  { name: 'Ownership', desc: 'Your project, your responsibility. No hand-holding.' },
]

const whatFellowsDo = [
  { num: '01', label: 'Build', desc: 'Build consistently throughout the semester on a product that matters.' },
  { num: '02', label: 'Meet', desc: 'Meet weekly for accountability check-ins, workshops, and mentor feedback.' },
  { num: '03', label: 'Collaborate', desc: 'Work in teams or solo within the cohort. Your call.' },
  { num: '04', label: 'Ship', desc: 'Present at Forge Demo Day. Finish what you started.' },
]

export default function Fellowship() {
  return (
    <div className="w-full min-h-screen bg-[#f9f6f2]">
      <Navbar />

      {/* Hero - static, cream, matching About page */}
      <section className="w-full pt-32 pb-20 px-8 md:px-20 relative overflow-hidden">
        <DoodleCircle size={220} opacity={0.06} className="absolute -top-10 -right-10 pointer-events-none" />
        <DoodleStar size={40} opacity={0.12} className="absolute top-24 right-32 pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          <p className="text-[#888888] text-[11px] tracking-[0.2em] uppercase mb-6">
            Forge Fellowship · F26 Applications Open
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#111111] leading-tight mb-6">
            Applications are open.
          </h1>
          <p className="text-[#444444] text-xl md:text-2xl max-w-2xl leading-relaxed mb-8">
            The F26 cohort is now accepting applications. Spots are limited, apply before September 16.
          </p>

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 bg-[#111111]/5 border border-[#111111]/15 rounded-full px-5 py-2.5 mb-10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#444444] text-sm">Applications open · Closes September 16</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={APPLICATION_URL}
              className="bg-[#111111] hover:bg-[#333333] text-white font-medium px-8 py-3.5 rounded-full transition-colors text-sm"
            >
              Apply Now
            </a>
            <a
              href="https://luma.com/calendar/cal-zJkt69wozQWZhcK"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#111111]/20 hover:border-[#111111]/40 text-[#111111] font-medium px-8 py-3.5 rounded-full transition-colors text-sm"
            >
              Join the Community
            </a>
          </div>
        </div>
      </section>

      {/* Cohort timeline */}
      <section className="w-full py-24 px-8 md:px-20 border-t border-[#111111]/8">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#888888] text-xs tracking-[0.2em] uppercase mb-12 text-center">
            Fellowship Timeline
          </p>
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-0">
            {[
              { label: 'S26', title: 'Wrapped', status: 'done', note: 'Cohort completed' },
              { label: 'F26', title: 'Open', status: 'upcoming', note: 'Applications close Sep 16' },
              { label: 'S27', title: 'Future', status: 'future', note: 'Stay tuned' },
            ].map((cohort, i) => (
              <div
                key={cohort.label}
                className={`flex-1 px-8 py-8 text-center relative ${
                  i < 2 ? 'border-b sm:border-b-0 sm:border-r border-[#111111]/10' : ''
                }`}
              >
                <div
                  className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 ${
                    cohort.status === 'done'
                      ? 'bg-emerald-500/10 text-emerald-700'
                      : cohort.status === 'upcoming'
                      ? 'bg-[#005bbb]/10 text-[#005bbb]'
                      : 'bg-[#111111]/5 text-[#888888]'
                  }`}
                >
                  {cohort.label}
                </div>
                <p
                  className={`font-serif text-2xl font-bold mb-2 ${
                    cohort.status === 'done' ? 'text-[#111111]' : cohort.status === 'upcoming' ? 'text-[#444444]' : 'text-[#888888]'
                  }`}
                >
                  {cohort.title}
                </p>
                <p className="text-sm text-[#888888]">{cohort.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="w-full py-24 px-8 md:px-20 bg-[#ede8df] border-t border-[#111111]/8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] italic leading-tight mb-6">
                &ldquo;Ideas don&apos;t ship themselves.&rdquo;
              </h2>
              <p className="text-[#444444] leading-relaxed text-lg">
                The Forge Fellowship is a semester-long program for students who are done waiting
                and ready to ship. A selective cohort, weekly accountability, and a demo day that
                actually matters.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatFellowsDo.map((item) => (
                <div key={item.num} className="bg-white rounded-2xl p-6">
                  <span className="font-serif text-3xl font-bold text-[#111111]/8 block mb-2">{item.num}</span>
                  <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">{item.label}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we look for */}
      <section className="w-full py-24 px-8 md:px-20 border-t border-[#111111]/8">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#888888] text-xs tracking-[0.2em] uppercase mb-4">What We Look For</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-4">
            Four things.
          </h2>
          <p className="text-[#444444] text-lg mb-16 max-w-xl">
            We&apos;re looking for people who don&apos;t just want to learn, but want to ship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar) => (
              <div key={pillar.name} className="bg-[#ede8df] rounded-2xl p-7 border border-[#111111]/5">
                <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">{pillar.name}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - next cycle */}
      <section className="w-full py-24 px-8 md:px-20 bg-[#f9f6f2] border-t border-[#111111]/8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#888888] text-xs tracking-[0.2em] uppercase mb-6">
            F26 Fellowship
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-6">
            F26 is here.
            <br />
            <span className="italic text-[#444444]">Apply before September 16.</span>
          </h2>
          <p className="text-[#444444] text-lg mb-10 leading-relaxed">
            Applications are open now. Spots are limited, submit yours before September 16.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APPLICATION_URL}
              className="bg-[#111111] hover:bg-[#333333] text-white font-medium px-8 py-3.5 rounded-full transition-colors text-sm"
            >
              Apply Now
            </a>
            <a
              href="https://www.instagram.com/ub.forge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#005bbb] hover:text-[#3b82f6] text-sm font-medium transition-colors"
            >
              Follow @ub.forge
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
