const Image = require("../models/ImageModel");

// handle errors
const handleErrors = (err) => {
    let errors = { label: "", url: "" };
    if (err.message === "Please enter a valid url") {
        errors.url = err.message;
    }
    // validation errors
    if (err.message.includes("Image validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

module.exports.getImages = (req, res, next) => {
    Image.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.json({ images: result });
        })
        .catch((err) => {
            console.log(err);
            res.json("Error getting Images");
        });
};

module.exports.saveImage = (req, res, next) => {
    const image = new Image(req.body);

    image
        .save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json({ ...handleErrors(err) });
        });
};
module.exports.deleteImage = (req, res, next) => {
    const id = req.params.id;
    Image.findByIdAndDelete(id)
        .then((result) => {
            res.json({ result });
        })
        .catch((err) => {
            res.json({ ...handleErrors(err) });
        });
};
