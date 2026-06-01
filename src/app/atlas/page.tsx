// ATLAS PAGE — commented out for public launch, restore when ready
// ---------------------------------------------------------------
// 'use client'
//
// import { useState } from 'react'
// import dynamic from 'next/dynamic'
// import Navbar from '../../components/Navbar'
// import Footer from '../../components/Footer'
// import { LocationCard } from '../../components/ui/location-card'
// import type { PolaroidMarker } from '../../components/ui/cobe-globe-polaroids'
//
// const GlobePolaroids = dynamic(
//   () => import('../../components/ui/cobe-globe-polaroids').then(m => ({ default: m.GlobePolaroids })),
//   {
//     ssr: false,
//     loading: () => <div className="w-full aspect-square rounded-full bg-[#ede8df] animate-pulse" />,
//   }
// )
//
// const markers: PolaroidMarker[] = [
//   { id: 'berkeley', location: [37.87, -122.27], image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=120&h=120&fit=crop', caption: 'CalHacks', rotate: -4 },
//   { id: 'annarbor', location: [42.28, -83.74], image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=120&fit=crop', caption: 'MHacks', rotate: 3 },
//   { id: 'cambridge', location: [42.3744, -71.1169], image: 'https://images.unsplash.com/photo-1589330694653-a32f3f1e7e21?w=120&h=120&fit=crop', caption: 'HackHarvard', rotate: -3 },
//   { id: 'buffalo', location: [42.89, -78.88], image: 'https://images.unsplash.com/photo-1580674684081-a8a66f6a0166?w=120&h=120&fit=crop', caption: 'UB Hacking', rotate: 5 },
//   { id: 'waterloo', location: [46.5, -80.99], image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=120&h=120&fit=crop', caption: 'SpurHacks — Waterloo', rotate: -2 },
// ]
//
// const locationCards = [
//   { id: 'berkeley', imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=450&fit=crop', location: 'CalHacks', country: 'Berkeley, CA' },
//   { id: 'annarbor', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop', location: 'MHacks', country: 'Ann Arbor, MI' },
//   { id: 'cambridge', imageUrl: 'https://images.unsplash.com/photo-1589330694653-a32f3f1e7e21?w=600&h=450&fit=crop', location: 'HackHarvard', country: 'Cambridge, MA' },
//   { id: 'buffalo', imageUrl: 'https://images.unsplash.com/photo-1580674684081-a8a66f6a0166?w=600&h=450&fit=crop', location: 'UB Hacking', country: 'Buffalo, NY' },
//   { id: 'waterloo', imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=450&fit=crop', location: 'SpurHacks', country: 'Waterloo, ON' },
// ]
//
// export default function AtlasPage() {
//   const [activeId, setActiveId] = useState<string | null>(null)
//   return (
//     <div className="w-full min-h-screen bg-[#f9f6f2]">
//       <Navbar />
//       <section className="w-full pt-32 pb-8 px-8 md:px-20">
//         <div className="max-w-6xl mx-auto">
//           <p className="text-[#888888] text-[11px] tracking-[0.2em] uppercase mb-4">Atlas</p>
//           <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#111111] mb-4">Everywhere we&apos;ve been.</h1>
//           <p className="text-[#444444] text-lg max-w-lg">Hackathons, competitions, and events across North America.</p>
//         </div>
//       </section>
//       <section className="py-8 flex flex-col items-center">
//         <div className="w-full max-w-[560px] mx-auto px-4 mt-4">
//           <GlobePolaroids markers={markers} activeId={activeId} onActiveIdChange={setActiveId} speed={0.0015} />
//         </div>
//         <p className="text-[#aaaaaa] text-[10px] tracking-wide mt-3">floating cards are a chrome thing — globe works everywhere</p>
//       </section>
//       <section className="w-full py-6 px-8 md:px-20">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
//             {locationCards.map((card) => (
//               <LocationCard key={card.id} imageUrl={card.imageUrl} location={card.location} country={card.country} isActive={activeId === card.id} onClick={() => setActiveId(activeId === card.id ? null : card.id)} />
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   )
// }
// ---------------------------------------------------------------

import { notFound } from 'next/navigation'

export default function AtlasPage() {
  notFound()
}
