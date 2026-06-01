'use client'

import React from 'react'
import Link from 'next/link'
import { DoodleCircle } from './DoodleAccent'
import { InfoCard } from './ui/info-card'

const cards = [
  {
    title: 'SunSesh',
    href: '/sunsesh',
    description: 'Weekly co-work sessions where builders ship, ideate, and connect.',
    image: '/myImages/sunsesh.jpeg',
    borderColor: 'var(--border-color-1)',
    effectBgColor: 'var(--border-color-1)',
    imageStyle: { filter: 'brightness(0.87)' },
  },
  {
    title: 'Firesides',
    href: '/firesides',
    description: 'Founders, engineers, and operators in honest, unfiltered conversation.',
    image: '/myImages/fireside.jpeg',
    borderColor: 'var(--border-color-2)',
    effectBgColor: 'var(--border-color-2)',
  },
  {
    title: 'Fellowship',
    href: '/fellowship',
    description: "A selective cohort for UB's most committed builders.",
    image: '/myImages/Redbull.jpeg',
    borderColor: 'var(--border-color-3)',
    effectBgColor: 'var(--border-color-3)',
  },
]

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="relative w-full bg-[#f9f6f2] pb-24 pt-0 px-8 md:px-20 overflow-hidden scroll-mt-28">
      <DoodleCircle size={180} opacity={0.07} className="absolute bottom-8 right-8 pointer-events-none" />

      <div className="max-w-[1250px] mx-auto">
        <p className="text-[#888888] text-[11px] tracking-[0.2em] uppercase mb-16 text-center">
          What We Do
        </p>
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:items-start md:gap-6">
          {cards.map((card) => (
            <Link key={card.title} href={card.href} className="block">
              <InfoCard
                image={card.image}
                title={card.title}
                description={card.description}
                borderColor={card.borderColor}
                borderBgColor="#f9f6f2"
                cardBgColor="#f9f6f2"
                shadowColor="#f9f6f2"
                textColor="#111111"
                hoverTextColor="#ffffff"
                fontFamily="var(--font-family)"
                rtlFontFamily="var(--rtl-font-family)"
                effectBgColor={card.effectBgColor}
                imageStyle={card.imageStyle}
                patternColor1="transparent"
                patternColor2="transparent"
                contentPadding="14.3px 16px"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
