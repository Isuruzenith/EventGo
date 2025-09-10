// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#005a9e',
          green: '#6dbb45',
          'blue-dark': '#003d6b',
          'green-dark': '#4b8b24',
        },
        secondary: {
          green: '#4b8b24',
        },
        accent: '#E5E7EB',
        background: {
          dark: '#0A101A',
          light: '#F9FAFB',
        },
        glass: 'rgba(255, 255, 255, 0.1)',
        text: {
          light: '#E5E7EB',
          dark: '#111827',
          muted: '#9CA3AF',
        },
        feedback: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        scale: 'scale 0.2s ease-in-out forwards',
      },
    },
  },
};