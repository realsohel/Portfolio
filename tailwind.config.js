/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      // => @media (min-width: 576px) { ... }

      'md': '700px',
      // => @media (min-width: 960px) { ... }

      'lg': '900px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
