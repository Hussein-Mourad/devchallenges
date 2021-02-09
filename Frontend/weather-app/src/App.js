import { useState } from "react";
import useFetch from "./api/useFetch";
import WeatherApp from "./WeatherApp";
import Loader from "react-loader-spinner";
import Error from "./components/Error";
import cities from "all-the-cities"

function App() {
    // const { data, error, loadData } = useFetch(
    //     "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418"
    // );
    // console.log(data);
    // const [woeid, setWoeid] = useState(2487956);
    console.log(cities.filter(city => city.name.match('Albuquerque')))
    return (
        <>
            {/* {!data ||
                (error && (
                    <div className="flex flex-col justify-center items-center h-screen text-red-400 text-xl font-semibold">
                        <Loader
                            type="Oval"
                            color="#F2F2F2"
                            height={50}
                            width={50}
                            timeout={3000}
                        />
                        <Error timeout={5000}>
                            Oops something has gone wrong!
                        </Error>
                        <Error timeout={5000}>Try refreshing the page</Error>
                    </div>
                ))}

            {data && <WeatherApp data={data} />} */}
        </>
    );
}

export default App;
