/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue:'#0c2d57',
        customOrange:'#fc6736',
        customWhite:'#EFECEC',
      }
    },
  },
  plugins: [],
}

