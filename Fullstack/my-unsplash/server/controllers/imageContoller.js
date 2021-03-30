const Image = require("../models/ImageModel");

// handle errors
const handleErrors = (err) => {
    console.log(err.message);
    let errors = { label: "", url: "" };

    //   // incorrect label
    //   if (err.message === 'incorrect label') {
    //     errors.label = 'That email is not registered';
    //   }

    //   // incorrect url
    //   if (err.message === 'incorrect password') {
    //     errors.url = 'That password is incorrect';
    //   }

    //   // duplicate email error
    //   if (err.code === 11000) {
    //     errors.email = 'that email is already registered';
    //     return errors;
    //   }

    // validation errors
    if (err.message.includes("Image validation failed")) {
        // console.log(err);
        Object.values(err.errors).forEach(({ properties }) => {
            // console.log(val);
            // console.log(properties);
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
            console.log(handleErrors(err));
            res.json("Error Item can't be created");
        });
};
module.exports.deleteImage = (req, res, next) => {
    const id = req.params.id;
    Image.findByIdAndDelete(id)
        .then((result) => {
            res.json({ result });
        })
        .catch((err) => {
            console.log(handleErrors(err));
            res.json("Error deleting item");
        });
};
