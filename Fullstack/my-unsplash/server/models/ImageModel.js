const mongoose = require("mongoose");
const isValidImg = require("../utils/isValidImg");
const requestImageSize = require("request-image-size");

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
        type: String,
    },
    { timestamps: true }
);

imageSchema.pre("save", function (next) {
    requestImageSize(this.url)
        .then((result) => {
            this.width = result.width;
            this.height = result.height;
            this.type = result.type;
        })
        .catch((err) => console.error(err));
    next();
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
