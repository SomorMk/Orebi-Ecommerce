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
        headerBg: '#F5F5F3',
        footerBg: '#F5F5F3'
      },
      fontFamily: {
        'dm': ['DM Sans', 'sans-serif']
      },
      // backgroundImage: {
      //   'banner-bg': "url('/images/hero-bg.png')"
      // }
    },
  },
  plugins: [],
}