/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: { custom: '2560px' },
      borderRadius: { shield: '51% 49% 49% 51% / 10% 10% 60% 60%' },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translatey(-10px)', opacity: '0' },
          '100%': { transform: 'translatey(0px)', opacity: '1' }
        },
        opacity: {
          '0%': { opacity: '50%' },
          '100%': { opacity: '100%' }
        }
      },
      animation: {
        'slide-down': 'slideDown 0.6s linear',
        opacity: 'opacity 0.4s linear'
      }
    }
  },
  plugins: []
}
