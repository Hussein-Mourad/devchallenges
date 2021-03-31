const Image = require("../models/ImageModel");

// handle errors
const handleErrors = (err) => {
    console.log(err);
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
            res.status(400).json({ errors: handleErrors(err) });
        });
};

module.exports.filterImages = (req, res, next) => {
    const query = req.params.query;

    Image.find({ label: { $regex: query, $options: "i" } })
        .then((result) => {
            res.json({ images: result });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ error: err });
        });
};

module.exports.saveImage = (req, res, next) => {
    const image = new Image(req.body);
    console.log(req.body);
    image
        .save()
        .then((result) => {
            res.json({ image: result });
        })
        .catch((err) => {
            res.status(400).json({ errors: handleErrors(err) });
        });
};
module.exports.deleteImage = (req, res, next) => {
    const password = req.params.password;
    console.log(password, process.env.PASSWORD);
    if (password === process.env.PASSWORD) {
        const id = req.params.id;
        Image.findByIdAndDelete(id)
            .then((result) => {
                res.json({ result });
            })
            .catch((err) => {
                res.status(400).json({ error: "Item not found" });
            });
    } else {
        res.status(400).json({ error: "Invalid Password" });
    }
};
