const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
    {
        label: {
            type: String,
            required: [true, "Please enter a label"],
        },
        url: {
            type: String,
            required: [true, "Please enter a url"],
        },
        width: Number,
        height: Number,
    },
    { timestamps: true }
);


const Image = mongoose.model("Image", imageSchema);
module.exports = Image;