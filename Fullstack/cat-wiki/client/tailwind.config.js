const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        hero: "#E3E1DC",
        primary: "#291507",
        secondary:"#4D270C"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
