const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    enabled: false,
    content: [
      "./src/**/*. { js, jsx, ts, tsx }",
      "./public/index.html",
      "./src/*. { js, jsx, ts, tsx }",
    ],
  },
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
    },
    extend: {
      colors: {
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "disabled"],
      textColor: ["disabled"],
      display: ["group-hover"],
      cursor: ["disabled"],
      borderColor: ["disabled"],
    },
  },
  plugins: [],
};
