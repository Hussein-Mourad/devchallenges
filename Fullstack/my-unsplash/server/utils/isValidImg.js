const request = require("request");

module.exports=isValidImg = (url) => {
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
                    resolve(true);
                }
            } else {
                resolve(false);
            }
        });
    });
};
