import daisyui from "daisyui";
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Green: "#64B479",
        GreenLight: "#CFE8D5",
        SemiGreen: "#E8F4EB",
        DarkGreen: "#233F2A",
        FooterGreen : "#4B875B",
        GreenLogin : "#3C6C49",
        loginLight : "#F0F8F2"
      },
    },
  },
  plugins: [
    daisyui,
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-stroke-white': {
          '-webkit-text-stroke': '0.5px white',
        },
       
      })
    })
  ],
}
