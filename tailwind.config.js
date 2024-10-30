/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        navbarBottomBorder: "rgba(var(--navbarBottomBorder),0.1)",
        navbarButtonText: "rgba(var(--navbarButtonText))",
        bodyBG: "rgba(var(--bodyBG))",
        floatingNavbarBG: "rgba(var(--floatingNBBackground), 0.05)",
      },
    },
  },
  plugins: [require("daisyui")],
};
