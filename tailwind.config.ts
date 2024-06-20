/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#101419',
        'custom-bg-transparent': '#101419d1',
        'custom-bg-second': '#171c21',
        'custom-blue': '#1A73E8',
        'custom-lightgray': '#979a9e',
      },
      boxShadow: {
        'custom-shadow-light': '0px 0px 19px -10px rgba(255, 255, 255, 1)',
      }
    },
    fontFamily: {
      sans: ['Ubuntu']
    },
  },
  plugins: [],
}

