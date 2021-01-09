module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}', './public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#EB5757",
      },
      height: {
        "9/10": "90%",
      },
      minHeight: {
        min: "min-content",
        max: "max-content",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      // overflow: ["hover"],
    },
  },
  plugins: [],
};
