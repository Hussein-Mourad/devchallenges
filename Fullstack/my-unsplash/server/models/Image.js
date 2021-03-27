const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
    label: {
        type: String,
        required: [true, "Please enter a label"],
    }, url: {
        type: String,
        required:[true, "Please enter a url"]
    }, createdAt: {
        type: Date,
        default: new Date()
    }
})