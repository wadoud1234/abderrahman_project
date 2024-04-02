/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { primary: "Poppins,sans-serif" },
      colors: {
        customBlue: "#0c2d57",
        customOrange: "#fc6736",
        customWhite: "#EFECEC",
        customGray:"rgb(241 245 249)"
      },
    },
  },
  plugins: [],
};
