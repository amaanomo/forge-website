import React from 'react'
import Link from 'next/link'

const GetInvolved = () => {
  return (
    <section className="w-full bg-[#f9f6f2] py-20 px-8 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <h2
          className="font-serif text-[#111111] leading-tight"
          style={{ fontSize: 'clamp(36px, 4vw, 60px)' }}
        >
          Two ways in.
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 md:gap-10 text-sm">
          <a
            href="https://luma.com/calendar/cal-zJkt69wozQWZhcK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#005bbb] hover:text-[#3b82f6] transition-colors"
          >
            Show up to SunSesh →
          </a>
          <Link
            href="/fellowship"
            className="text-[#005bbb] hover:text-[#3b82f6] transition-colors"
          >
            Apply to Fellowship →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GetInvolved
