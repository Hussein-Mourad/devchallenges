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
    extend: {
      colors: {
        title: "#2F527B",
        btnhover: "#F9A826",
        lightgray: "#F2F2F2",
        lightpurple: "rgba(96, 102, 208, 0.8)",
        incorrect: "#EA8282",
        correct: "#60BF88",
        result: "#1D355D",
      },
      minHeight: {
        96: "24rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "disabled"],
      backgroundOpacity: ["disabled"],
      textColor: ["disabled"],
      display: ["group-hover", "group-focus"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
