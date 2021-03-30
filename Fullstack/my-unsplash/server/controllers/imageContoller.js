const Image = require("../models/ImageModel");
const request = require("request");
const isImageUrl = require("is-image-url");

// handle errors
const handleErrors = (err) => {
    let errors = { label: "", url: "" };

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

const validateImg = (url) => {
    return new Promise((resolve, reject) => {
        const magic = {
            jpg: "ffd8ffe0",
            png: "89504e47",
            gif: "47494638",
        };
        const options = {
            method: "GET",
            url,
            encoding: null, // keeps the body as buffer
        };

        request(options, function (err, res, body) {
            if (!err && res.statusCode == 200) {
                const magigNumberInBody = body.toString("hex", 0, 4);
                if (
                    magigNumberInBody === magic.jpg ||
                    magigNumberInBody === magic.png ||
                    magigNumberInBody === magic.gif
                ) {
                    console.log("hi");
                    resolve(true);
                }
            } else {
                resolve(false);
            }
        });
    });
};

module.exports.getImages = async (req, res, next) => {
    // try {
    //     var result = await validateImg(req.body.url);
    // } catch (err) {
    //     console.log(err);
    // }

    res.send(isImageUrl(req.body.url));

    // console.log(req.body.url)
    // Image.find()
    //     .sort({ createdAt: -1 })
    //     .then((result) => {
    //         res.json({ images: result });
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         res.json("Error getting Images");
    //     });
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
