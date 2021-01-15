module.exports = {
  purge: {
    enabled: false,
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
      backgroundColor: ["active"],
      display: ["group-hover"],
    },
  },
  plugins: [],
};
