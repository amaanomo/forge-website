/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forge: {
          cream: {
            DEFAULT: '#f9f6f2',
            deep: '#ede8df',
            text: '#111111',
            muted: '#888888',
          },
          blue: {
            DEFAULT: '#005bbb',
            hover: '#3b82f6',
          },
          footer: '#1a1a1a',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'scroll-left': 'scroll-left 60s linear infinite',
        'forge-glow': 'forge-glow 2s ease-in-out infinite alternate',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-down': 'fade-down 0.8s ease-out forwards',
        'slide-left': 'slide-left 0.8s ease-out forwards',
        'slide-right': 'slide-right 0.8s ease-out forwards',
        'zoom-in': 'zoom-in 0.8s ease-out forwards',
        'scale-up': 'scale-up 0.8s ease-out forwards',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'scale-up': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'forge-glow': {
          '0%': { boxShadow: '0 0 60px rgba(0,91,187,0.15)' },
          '100%': { boxShadow: '0 0 90px rgba(0,91,187,0.30)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.hover\\:pause:hover': {
          'animation-play-state': 'paused',
        },
      })
    },
  ],
}
