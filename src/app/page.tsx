import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FullBleedPhoto from '../components/FullBleedPhoto'
import StatementSection from '../components/StatementSection'
import WhatWeDo from '../components/WhatWeDo'
import CommunitySection from '../components/CommunitySection'
import FellowshipTeaser from '../components/FellowshipTeaser'
// import ScrollingBanner from '../components/ScrollingBanner'
import GetInvolved from '../components/GetInvolved'
import ClosingSection from '../components/ClosingSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#f9f6f2]">
      <Navbar />

      {/* 1 - Hero (cream, full viewport) */}
      <Hero />

      {/* 1b - Full-bleed B&W photo */}
      <FullBleedPhoto />

      {/* 2 - Statement (cream) */}
      <StatementSection />

      {/* 3 - What We Do (cream, glowing orbs) */}
      <WhatWeDo />

      {/* 5 - Companies Banner (cream) */}
      {/* <ScrollingBanner /> */}

      {/* 8 - Closing (cream) */}
      <ClosingSection />

      {/* 9 - Footer */}
      <Footer />
    </div>
  )
}
