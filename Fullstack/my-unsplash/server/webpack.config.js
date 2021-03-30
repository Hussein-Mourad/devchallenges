const path = require("path");

module.exports = {
    entry: "./app.js",
    mode: "production",
    target: "node",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.bundle.js",
    },
};
