/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx, scss}"],
  prefix: "tw-",
  theme: {
    extend: {
      fontFamily: {
        yourFontName: ["Mona Sans Regular", "sans-serif", "font-sans"],
      },
      colors: {
        primary: "#7e2e97",
        secondary: "#53b7a5",
        offBlack: "#1e2010",
      },
      screens: {
        xxs: "364px",
        xs: "450px",
      },
    },
  },
  plugins: [],
};
