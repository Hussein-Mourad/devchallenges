module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
      "./src/*.{js,jsx,ts,tsx}",
    ],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active", "disabled"],
      textColor: ["disabled"],
      display: ["group-hover"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
