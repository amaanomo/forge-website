'use client'

import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#f9f6f2] border-t border-[#111111]/10 py-5 px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-3">

        {/* Left — copyright + email */}
        <p className="text-[#888888] text-sm">
          © 2026 UB Forge &nbsp;|&nbsp;{' '}
          <a href="mailto:contactubforge@gmail.com" className="hover:text-[#005bbb] transition-colors">
            contactubforge@gmail.com
          </a>
        </p>

        {/* Right — social icons */}
        <div className="flex items-center gap-5">
          {/* Twitter/X */}
          <a
            href="https://x.com/ubforge?s=21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-[#888888] hover:text-[#005bbb] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ub.forge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#888888] hover:text-[#005bbb] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/forgeatub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#888888] hover:text-[#005bbb] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:contactubforge@gmail.com"
            aria-label="Email"
            className="text-[#888888] hover:text-[#005bbb] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
