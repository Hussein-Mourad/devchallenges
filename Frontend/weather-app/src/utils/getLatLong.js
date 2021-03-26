function getLatLong(callback) {
    if (navigator.geolocation) {
        // eslint-disable-next-line
        var lat_lng = navigator.geolocation.getCurrentPosition((position) => {
            var user_position = {};
            user_position.latitude = position.coords.latitude;
            user_position.longitude = position.coords.longitude;
            callback(user_position);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
export default getLatLong;
