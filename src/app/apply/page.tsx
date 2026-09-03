'use client'

import Navbar from '../../components/Navbar'
import Script from 'next/script'

export default function Apply() {
  return (
    <div className="w-full min-h-screen bg-[#f9f6f2]">
      <Navbar />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && (window as { Tally?: { loadEmbeds: () => void } }).Tally) {
            (window as { Tally?: { loadEmbeds: () => void } }).Tally?.loadEmbeds()
          }
        }}
      />
      <div className="pt-20 max-w-3xl mx-auto px-4">
        <iframe
          data-tally-src="https://tally.so/embed/pb2EOZ?hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="1438"
          style={{ border: 'none', margin: 0 }}
          title="F26 Forge Fellowship Application"
        />
      </div>
    </div>
  )
}
