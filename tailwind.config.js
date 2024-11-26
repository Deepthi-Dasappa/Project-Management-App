/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inputFontFamily: ["Roboto Slab", "serif"],
        noProjectFontFamily: ["Quicksand", "serif"],
      },
    },
  },
  plugins: [],
};
