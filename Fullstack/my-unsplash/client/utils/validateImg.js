export default function validateImg(url, timeoutT) {
    return new Promise(function (resolve, reject) {
        var timeout = timeoutT || 5000;
        var timer;
        var img = new Image();
        img.onerror = img.onabort = function () {
            clearTimeout(timer);
            reject("Invalid Image url");
        };
        img.onload = function () {
            clearTimeout(timer);
            resolve({ width: this.naturalWidth, height: this.naturalHeight });
        };
        timer = setTimeout(function () {
            // reset .src to invalid URL so it stops previous
            // loading, but doesn't trigger new load
            img.src = "//!!!!/test.jpg";
            reject("The image took to long to respond please try again!");
        }, timeout);
        img.src = url;
    });
}

// export default async function validateImg(url) {
//     try {
//         const res = await checkImgURL(url, 5000);
//         const data = { width: res.width, height: res.height };
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// export default function validateImg(url) {
//     var img = new Image();
//     img.src = url;
//     img.onerror = img.onabort = function () {
//         return { error: "Invalid Url" };
//     };
//     img.onload = function () {
//         return { width: this.naturalWidth, height: this.naturalHeight };
//     };
// }
