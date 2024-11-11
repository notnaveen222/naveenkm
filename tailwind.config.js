/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        graya1: "#a1a1a1",
        gray14: "#141414",
        gray2e: "#2e2e2e",
        BodyBGBlack: "#070707",
      },
      fontFamily: {
        interT: ["Inter Tight", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
