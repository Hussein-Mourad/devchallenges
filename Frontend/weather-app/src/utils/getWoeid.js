function getWoeid(latitude, longitude) {
    const url = "https://www.metaweather.com/api/location/search/?lattlong=";
    return fetch(url + latitude + "," + longitude)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data[0].woeid;
        });
}
export default getWoeid;
