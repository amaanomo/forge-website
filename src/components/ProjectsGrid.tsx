'use client'

import React from 'react'
import Link from 'next/link'

const projects = [
  {
    name: 'Atlas',
    desc: 'Hackathon project tracker, built live at CalHacks.',
    tag: 'Hackathon',
  },
  {
    name: 'YokiLabs',
    desc: 'AI productivity tools. 200k+ users.',
    tag: 'SaaS',
  },
  {
    name: 'Lift Card',
    desc: 'Fitness tracking app with 50k+ downloads.',
    tag: 'Mobile',
  },
  {
    name: 'UB Hacking Win',
    desc: 'Winning project from UB Hacking F25.',
    tag: 'Hackathon',
  },
  {
    name: 'SunSesh Board',
    desc: 'Internal community attendance + project tracker.',
    tag: 'Internal',
  },
  {
    name: null,
    desc: 'The next one is yours.',
    tag: 'CTA',
    cta: true,
  },
]

const tagColors: Record<string, string> = {
  Hackathon: 'bg-[#5b9cf6]/10 text-[#5b9cf6]',
  SaaS: 'bg-emerald-50 text-emerald-700',
  Mobile: 'bg-violet-50 text-violet-700',
  Internal: 'bg-amber-50 text-amber-700',
}

const ProjectsGrid = () => {
  return (
    <section className="w-full bg-[#f9f6f2] py-28 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#888888] text-[11px] tracking-[0.2em] uppercase mb-4">What We Build</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-16">
          Projects from the community.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) =>
            project.cta ? (
              <Link
                key={i}
                href="/fellowship"
                className="group rounded-2xl border-2 border-dashed border-[#111111]/20 p-7 flex flex-col justify-between min-h-[160px] hover:border-[#5b9cf6]/50 transition-colors duration-200"
              >
                <div className="flex items-center justify-center h-full flex-col gap-3 text-center">
                  <span className="text-3xl text-[#111111]/20 group-hover:text-[#5b9cf6]/40 transition-colors">+</span>
                  <p className="text-[#5a5a5a] text-sm group-hover:text-[#5b9cf6] transition-colors">
                    {project.desc}
                  </p>
                  <span className="text-[#5b9cf6] text-xs font-medium group-hover:underline">
                    Start building with us →
                  </span>
                </div>
              </Link>
            ) : (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 flex flex-col justify-between min-h-[160px] border border-[#111111]/6 hover:border-[#111111]/15 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-xl font-bold text-[#111111]">{project.name}</h3>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagColors[project.tag] || 'bg-gray-100 text-gray-600'}`}>
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-[#444444] text-sm leading-relaxed">{project.desc}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid
