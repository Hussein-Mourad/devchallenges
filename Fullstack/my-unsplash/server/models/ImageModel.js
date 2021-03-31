const mongoose = require("mongoose");
const isValidImg = require("../utils/isValidImg");
const probe = require("probe-image-size");

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
// imageSchema.index({ label: "text" });
// imageSchema.index({ label: "text", width: "text", heigth: "text" });
imageSchema.pre("save", async function (next) {
    console.log(this);
    const res = await probe(this.url);
    console.log(res);
    if (res.width && res.height) {
        this.width = res.width;
        this.height = res.height;
    }
    next();
});
const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
