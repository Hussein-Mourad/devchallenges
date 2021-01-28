function getUserLocation() {
  const url =
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=";
  let woeid;

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      fetch(url + latitude + "," + longitude)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          woeid = data[0].woeid;
        });
      console.log(woeid)
      return woeid;
    });
  } else {
    return "error";
  }
}

export default getUserLocation;
