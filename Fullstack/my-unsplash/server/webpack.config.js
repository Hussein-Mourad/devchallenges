const path = require("path");

module.exports = {
    entry: "./bin/www",
    mode: "production",
    target: "node",
    output: {
        path: path.resolve(__dirname, "."),
        filename: "app.bundle.js",
    },
};
