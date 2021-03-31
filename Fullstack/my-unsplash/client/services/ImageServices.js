export const getImages = async (callback) => {
    var error, data;
    try {
        const res = await fetch("/api/images");
        data = await res.json();
    } catch (err) {
        error = err;
    }
    callback(error, data);
};

export const addImage = async (image, callback) => {
    var error, data;
    try {
        const res = await fetch("/api/image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(image),
        });
        data = await res.json();
    } catch (err) {
        error = err;
    }
    callback(error, data);
};

export const deleteImage = async (id, callback) => {
    var error, data;
    try {
        const res = await fetch(`/api/delete/${id}`);
        data = await res.json();
    } catch (err) {
        error = err;
    }
    callback(error,data);
};

export const filterImages = async (term, callback) => {
    var error, data;
    try {
        const res = await fetch(`/api/images/${term}`);
        data= await res.json()
    } catch (err) {
        error = err;
    }
    console.log(error, data)
}

export const getMeta = (url) => {
    return new Promise((resolve, reject) => {
        var img = new Image();
        img.src = url;
        img.onerror = img.onabort = function () {
            reject("Please enter a valid url");
        };
        img.onload = function () {
            resolve({
                width: this.naturalWidth,
                height: this.naturalHeight,
            });
        };
    });
};