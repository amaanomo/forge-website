import React from 'react'

type DoodleType = 'circle' | 'underline' | 'star'

interface DoodleAccentProps {
  type: DoodleType
  color?: string
  opacity?: number
  size?: number
  className?: string
}

export const DoodleCircle = ({
  color = '#005bbb',
  opacity = 0.2,
  size = 80,
  className = '',
}: Omit<DoodleAccentProps, 'type'>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={className}
    style={{ opacity }}
    aria-hidden="true"
  >
    <circle
      cx="50"
      cy="50"
      r="44"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeDasharray="8 5"
      strokeLinecap="round"
    />
    <circle cx="50" cy="50" r="30" fill={color} opacity="0.25" />
  </svg>
)

export const DoodleUnderline = ({
  color = '#005bbb',
  opacity = 0.5,
  size = 260,
  className = '',
}: Omit<DoodleAccentProps, 'type'>) => (
  <svg
    width={size}
    height={20}
    viewBox="0 0 260 20"
    className={className}
    style={{ opacity }}
    aria-hidden="true"
  >
    <path
      d="M4 12 C30 4, 60 18, 90 10 C120 2, 150 16, 180 9 C210 2, 230 14, 256 8"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const DoodleStar = ({
  color = '#005bbb',
  opacity = 0.4,
  size = 32,
  className = '',
}: Omit<DoodleAccentProps, 'type'>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    className={className}
    style={{ opacity }}
    aria-hidden="true"
  >
    {/* 6-pointed asterisk / star */}
    <line x1="20" y1="4" x2="20" y2="36" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="20" x2="36" y2="20" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="8" x2="32" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="8" x2="8" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const DoodleAccent = ({ type, color, opacity, size, className }: DoodleAccentProps) => {
  if (type === 'circle') return <DoodleCircle color={color} opacity={opacity} size={size} className={className} />
  if (type === 'underline') return <DoodleUnderline color={color} opacity={opacity} size={size} className={className} />
  if (type === 'star') return <DoodleStar color={color} opacity={opacity} size={size} className={className} />
  return null
}

export default DoodleAccent
