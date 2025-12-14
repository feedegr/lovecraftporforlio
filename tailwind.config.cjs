module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Felipa', 'serif'],
        sans: ['Merienda', 'sans-serif'],
      },
      keyframes: {
        'float-subtle': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-5px) translateX(8px)' },
          '50%': { transform: 'translateY(0px) translateX(-8px)' },
          '75%': { transform: 'translateY(5px) translateX(5px)' },
        },
        'float-breathe': {
          '0%': { transform: 'translateY(0px) translateX(0px) scale(1)', opacity: '0.30' },
          '20%': { transform: 'translateY(-10px) translateX(6px) scale(1.03)', opacity: '0.34' },
          '40%': { transform: 'translateY(0px) translateX(-6px) scale(1.01)', opacity: '0.32' },
          '60%': { transform: 'translateY(8px) translateX(4px) scale(1.025)', opacity: '0.33' },
          '80%': { transform: 'translateY(-4px) translateX(-4px) scale(1.015)', opacity: '0.31' },
          '100%': { transform: 'translateY(0px) translateX(0px) scale(1)', opacity: '0.30' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'breath': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.02)' },
        },
        tabletPulse: {
          '0%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-4px) scale(1.01)' },
          '100%': { transform: 'translateY(0px) scale(1)' },
        },
      },
      animation: {
        'float-breathe': 'float-breathe 8s ease-in-out infinite',
        'float-subtle': 'float-subtle 15s ease-in-out infinite alternate',
        'fade-in': 'fade-in 0.6s ease forwards', // ✅ CORREGIDO: antes decía 'fadeIn'
        'breath': 'breath 3s ease-in-out infinite', // ✅ AGREGADO
        tabletPulse: 'tabletPulse 12s ease-in-out infinite',
      },
      // Añadimos colores personalizados SIN sobrescribir la paleta base
      colors: {
        'cosmic-black': '#0a0a0a',
        'eldritch-red': '#cc3333',
        'cheldrit-red': '#cc3333', // alias por si quedó alguna clase vieja
        'parchment-white': '#f9f6e5',
      },
    },
  },
  plugins: [],
};