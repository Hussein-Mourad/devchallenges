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

export const deleteImage = async (id, password, callback) => {
    var error, data;
    try {
        const res = await fetch(`/api/delete/${id}/${password}`, {
            method: "DELETE",
        });
        data = await res.json();
    } catch (err) {
        error = err;
    }
    callback(error, data);
};

export const filterImages = async (term, callback) => {
    var error, data;
    try {
        const res = await fetch(`/api/images/${term}`);
        data = await res.json();
    } catch (err) {
        error = err;
    }
    callback(error, data);
};
