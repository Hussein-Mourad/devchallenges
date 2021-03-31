const mongoose = require("mongoose");
const isValidImg = require("../utils/isValidImg");

const imageSchema = new mongoose.Schema(
    {
        label: {
            type: String,
            required: [true, "Please enter a label"],
        },
        url: {
            type: String,
            required: [true, "Please enter a url"],
            validate: [
                async (url) => {
                    return await isValidImg(url);
                },
                "Please enter a valid url",
            ],
        },
        width: Number,
        height: Number,
    },
    { timestamps: true }
);
imageSchema.index({ label: "text", width: "text", heigth: "text" });
const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
