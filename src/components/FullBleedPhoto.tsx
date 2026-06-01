import React from 'react'
import Image from 'next/image'

const FullBleedPhoto = () => {
  return (
    <section className="w-full overflow-hidden" style={{ height: 'clamp(360px, 50vw, 640px)' }}>
      <div className="relative w-full h-full">
        <Image
          src="/myImages/f25_hackathon.jpg"
          alt="Forge community"
          fill
          className="object-cover object-center"
          style={{ filter: 'grayscale(100%)', mixBlendMode: 'multiply' }}
          priority
        />
        {/* Subtle cream fade at top and bottom to blend with page */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #f9f6f2 0%, transparent 12%, transparent 88%, #f9f6f2 100%)',
          }}
        />
      </div>
    </section>
  )
}

export default FullBleedPhoto
