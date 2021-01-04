module.exports = {
  // purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        dark: "0 0 60px 0 rgba(0, 0, 0, 0.3)",
      },
    },
  },
  variants: {
    extend: { boxShadow: ["dark"] },
  },
  plugins: [],
};
