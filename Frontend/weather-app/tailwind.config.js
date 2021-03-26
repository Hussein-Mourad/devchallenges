const colors = require("tailwindcss/colors");
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
                blueGray: colors.blueGray,
                coolGray: colors.coolGray,
            },
            minWidth: {
                96: "24rem",
            },
        },
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
