'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
  >
    <polyline points="1,3 5,7 9,3" />
  </svg>
)

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [communityOpen, setCommunityOpen] = useState(false)
  const [getInvolvedOpen, setGetInvolvedOpen] = useState(false)
  const getInvolvedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (getInvolvedRef.current && !getInvolvedRef.current.contains(e.target as Node)) {
        setGetInvolvedOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <nav className="w-full py-5 px-8 md:px-16 flex items-center justify-between fixed top-0 z-[200] bg-[#f9f6f2]/80 backdrop-blur-md border-b border-[#111111]/8">
      {/* Logo — wordmark only */}
      <Link href="/" className="font-serif font-bold text-[22px] text-[#111111] tracking-tight">
        Forge
      </Link>

      {/* Desktop nav — centered */}
      <div className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
        <Link href="/about" className="text-[#111111]/70 hover:text-[#111111] text-sm transition-colors">
          About
        </Link>

        {/* Culture dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-1.5 text-[#111111]/70 hover:text-[#111111] text-sm transition-colors"
            onClick={() => setCommunityOpen(!communityOpen)}
          >
            Culture <Chevron open={communityOpen} />
          </button>
          {communityOpen && (
            <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-[#111111]/10 rounded-lg py-1.5 shadow-xl z-10">
              <Link href="/sunsesh" className="block px-4 py-2 text-sm text-[#111111]/70 hover:text-[#111111] hover:bg-[#111111]/5 transition-colors" onClick={() => setCommunityOpen(false)}>
                SunSesh
              </Link>
              <Link href="/firesides" className="block px-4 py-2 text-sm text-[#111111]/70 hover:text-[#111111] hover:bg-[#111111]/5 transition-colors" onClick={() => setCommunityOpen(false)}>
                Firesides
              </Link>
              <Link href="/projects" className="block px-4 py-2 text-sm text-[#111111]/70 hover:text-[#111111] hover:bg-[#111111]/5 transition-colors" onClick={() => setCommunityOpen(false)}>
                Projects
              </Link>
            </div>
          )}
        </div>

        <Link href="/fellowship" className="text-[#111111]/70 hover:text-[#111111] text-sm transition-colors">
          Fellowship
        </Link>

        {/* Globe icon — Atlas link (commented out for public launch, restore when ready) */}
        {/* <Link
          href="/atlas"
          className="text-[#111111]/60 hover:text-[#005bbb] transition-colors"
          title="Atlas"
          aria-label="Atlas"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </Link> */}
      </div>

      {/* Right — Get Involved button + Forge logo */}
      <div className="hidden md:flex items-center gap-3">
        {/* Get Involved dropdown */}
        <div ref={getInvolvedRef} className="relative">
          <button
            onClick={() => setGetInvolvedOpen(!getInvolvedOpen)}
            className="flex items-center gap-1.5 bg-[#005bbb] hover:bg-[#3b82f6] text-white text-sm font-medium px-5 py-2 rounded-md transition-colors duration-200"
          >
            Get Involved <Chevron open={getInvolvedOpen} />
          </button>
          {getInvolvedOpen && (
            <div className="absolute top-full right-0 mt-2 w-44 bg-white border border-[#111111]/10 rounded-lg py-1.5 shadow-xl z-10">
              <Link
                href="/fellowship"
                className="block px-4 py-2 text-sm text-[#111111]/70 hover:text-[#111111] hover:bg-[#111111]/5 transition-colors"
                onClick={() => setGetInvolvedOpen(false)}
              >
                Apply
              </Link>
              <a
                href="https://luma.com/calendar/cal-zJkt69wozQWZhcK"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-[#111111]/70 hover:text-[#111111] hover:bg-[#111111]/5 transition-colors"
                onClick={() => setGetInvolvedOpen(false)}
              >
                View Events
              </a>
              <a
                href="https://ubforge.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-[#111111]/70 hover:text-[#111111] hover:bg-[#111111]/5 transition-colors"
                onClick={() => setGetInvolvedOpen(false)}
              >
                Newsletter
              </a>
            </div>
          )}
        </div>

        {/* Forge logo image */}
        <Link href="/">
          <Image
            src="/myImages/forgeLogo.png"
            alt="Forge"
            width={56}
            height={56}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-[#111111]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#f9f6f2] border-b border-[#111111]/10 md:hidden z-50">
          <div className="px-8 py-6 space-y-4">
            <Link href="/about" className="block text-[#111111]/70 hover:text-[#111111] py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <button
              className="flex items-center justify-between w-full text-[#111111]/70 hover:text-[#111111] py-2 transition-colors text-left"
              onClick={() => setCommunityOpen(!communityOpen)}
            >
              <span>Culture</span>
              <Chevron open={communityOpen} />
            </button>
            {communityOpen && (
              <div className="pl-4 space-y-1">
                <Link href="/sunsesh" className="block text-[#111111]/60 hover:text-[#111111] py-1.5 transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>SunSesh</Link>
                <Link href="/firesides" className="block text-[#111111]/60 hover:text-[#111111] py-1.5 transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>Firesides</Link>
                <Link href="/projects" className="block text-[#111111]/60 hover:text-[#111111] py-1.5 transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                {/* Atlas link commented out for public launch, restore when ready */}
                {/* <Link href="/atlas" className="block text-[#111111]/60 hover:text-[#111111] py-1.5 transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>Atlas</Link> */}
              </div>
            )}
            <Link href="/fellowship" className="block text-[#111111]/70 hover:text-[#111111] py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Fellowship</Link>
            <div className="border-t border-[#111111]/10 pt-4 space-y-2">
              <a
                href="https://luma.com/calendar/cal-zJkt69wozQWZhcK"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#111111]/70 hover:text-[#111111] py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                View Events
              </a>
              <Link
                href="/fellowship"
                className="block bg-[#005bbb] text-white text-center py-3 rounded-md font-medium transition-colors hover:bg-[#3b82f6]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply
              </Link>
              <a
                href="https://ubforge.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#111111]/70 hover:text-[#111111] py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Newsletter
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
