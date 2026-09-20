/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0b0e13',
          100: '#111319',
          200: '#191c21'
        },
        saffron: {
          DEFAULT: '#f97316',
          dark: '#ea580c'
        },
        antiqueGold: '#eab308',
        celestialBlue: '#06b6d4'
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        indic: ['"Rozha One"', '"Noto Sans Devanagari"', 'serif']
      }
    },
  },
  plugins: [],
}
