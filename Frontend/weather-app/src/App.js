import { useState } from "react";
import useFetch from "./api/useFetch";
import WeatherApp from "./WeatherApp";
import Loader from "react-loader-spinner";
import Error from "./components/Error";
import getWoeid from "./utils/getWoeid";
import getLatLong from "./utils/getLatLong";

function App() {
    const [woeid, setWoeid] = useState(2487956);

    const { data, error, isLoading, setIsLoading } = useFetch(
        "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/" +
            woeid
    );

    const getUserLocation = () => {
        if (navigator) {
            setIsLoading(true);
            getLatLong((lat_lng) => {
                getWoeid(lat_lng.latitude, lat_lng.longitude).then((data) => {
                    setWoeid(data);
                });
            });
        } else {
            console.log("hi");
            return undefined;
        }
    };

    const props = { data, getUserLocation };

    return (
        <>
            {isLoading && (
                <div className="flex flex-col justify-center items-center h-screen">
                    <Loader
                        type="Oval"
                        color="#F2F2F2"
                        height={50}
                        width={50}
                        timeout={3000}
                    />
                </div>
            )}
            {error && (
                <div className="flex flex-col justify-center items-center h-screen text-red-400 text-xl font-semibold">
                    <Error timeout={5000}>Oops something has gone wrong!</Error>
                    <Error timeout={5000}>Try refreshing the page</Error>
                </div>
            )}
            {data && !isLoading && !error && <WeatherApp {...props} />}
        </>
    );
}

export default App;
