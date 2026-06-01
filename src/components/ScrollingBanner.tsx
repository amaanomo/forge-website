'use client'

import React from 'react'

const companies = [
  'Amazon', 'Google', 'Meta', 'Microsoft', 'Apple', 'Netflix', 'Uber', 'Airbnb',
  'PayPal', 'Stripe', 'Notion', 'Figma', 'OpenAI', 'Discord', 'Dropbox', 'Atlassian',
  'Zoom', 'Databricks', 'Pinterest', 'Adobe', 'Spotify', 'Reddit', 'Robinhood',
  'GitHub', 'Salesforce', 'Nvidia', 'Intel', 'Twitch', 'Slack', 'Shopify', 'ByteDance',
  'Y Combinator', 'a16z', 'Sequoia', 'Greylock', 'Tesla', 'DeepMind',
  'Canva', 'Duolingo', 'Replit', 'Hugging Face', 'Vercel', 'Linear', 'Ramp', 'Deel',
  'Rippling', 'Brex', 'Asana', 'Intercom', 'Loom',
]

const ScrollingBanner = () => {
  return (
    <section className="w-full bg-[#f9f6f2] py-14 overflow-hidden border-t border-[#111111]/8">
      <p className="text-[#888888] text-xs tracking-[0.2em] uppercase text-center mb-8">
        Our community has built at
      </p>
      <div className="relative">
        <div className="flex animate-scroll-left hover:pause">
          {companies.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex-shrink-0 mx-8 text-[#888888]/60 font-medium text-base whitespace-nowrap"
            >
              {company}
            </div>
          ))}
          {companies.map((company, index) => (
            <div
              key={`${company}-dup-${index}`}
              className="flex-shrink-0 mx-8 text-[#888888]/60 font-medium text-base whitespace-nowrap"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScrollingBanner
