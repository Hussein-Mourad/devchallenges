module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}, ./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // colors: {
      //   def: "#828282",
      //   defHover: "#333",
      //   defFocus: "#2962FF",
      // },
    },
  },
  variants: {
    extend: {
      textColor: ["group-focus"],
    },
  },
  plugins: [],
};
