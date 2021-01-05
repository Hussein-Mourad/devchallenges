module.exports = {
  purge: [],
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        def: " #E0E0E0",
        primary: "#2962FF",
        secondary: "#455A64",
        danger: "#D32F2F",
        defhover: "#AEAEAE",
        primaryhover: "#0039CB",
        secondaryhover: "#1C313A",
        dangerhover: "#9A0007",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

