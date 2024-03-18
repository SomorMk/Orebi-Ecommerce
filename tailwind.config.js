/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#262626',
        secondary: '#767676',
      },
      fontFamily: {
        'dm': ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}