import { useState } from "react";
import useFetch from "./api/useFetch";
import WeatherApp from "./components/WeatherApp";
import Loader from "react-loader-spinner";
import Error from "./components/Error";
import getWoeid from "./utils/getWoeid";
import getLatLong from "./utils/getLatLong";

function App() {
    let tmp;
    if (localStorage.getItem("woeid")) {
        tmp = parseInt(localStorage.getItem("woeid"));
    } else {
        tmp = 2487956;
    }
    const [woeid, setWoeid] = useState(tmp);

    const { data, error, isLoading, setIsLoading } = useFetch(
        "https://obscure-mesa-98003.herokuapp.com/https://www.metaweather.com/api/location/" +
            woeid
    );

    const getUserLocation = () => {
        // checks if the user grants permission and then changes woeid
        navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
                if (result.state === "granted") {
                    setIsLoading(true);
                    getLatLong((lat_lng) => {
                        getWoeid(lat_lng.latitude, lat_lng.longitude).then(
                            (data) => {
                                localStorage.setItem("woeid", data);
                                setWoeid(data);
                            }
                        );
                    });
                } else if (result.state === "denied") {
                    alert("Make sure your location permission is enabled");
                }
            });
    };

    const props = { data, getUserLocation, setWoeid, setIsLoading };

    return (
        <>
            {isLoading && (
                <div className="flex flex-col justify-center items-center h-screen">
                    <Loader
                        type="Oval"
                        color="#F2F2F2"
                        height={50}
                        width={50}
                        timeout={8000}
                    />
                </div>
            )}
            {error && (
                <div className="flex flex-col justify-center items-center h-screen text-red-400 text-xl font-semibold">
                    <Error timeout={1000}>Oops something has gone wrong!</Error>
                    <Error timeout={1000}>Try refreshing the page</Error>
                </div>
            )}
            {data && !isLoading && !error && <WeatherApp {...props} />}
        </>
    );
}

export default App;
