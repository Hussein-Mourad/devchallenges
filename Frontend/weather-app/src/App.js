import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";
import HighlightsCards from "./components/HighlightsCards";
import SideDrawer from "./components/SideDrawer";

// import useFetch from "./api/useFetch";
// import getUserLocation from "./utils/getUserLocation";
import { info } from "./data";
import formatDate from "./utils/formatDate";

function App() {
    // getUserLocation();
    // const { data, isLoading, error, loadData } = useFetch(
    //   "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/1522006"
    // );
    const data = info;
    const weatherData = data.consolidated_weather;
    console.log(data);
    return (
        <div>
            <SideDrawer data={data}></SideDrawer>
            <div className="sm:absolute sm:top-0 sm:right-0 sm:w-4/5 md:w-8/12 px-5 py-10   ">
                <div className="sm:max-w-min sm:mx-auto">
                    <div className="grid grid-cols-2 gap-3 mx-auto max-w-max sm:flex  sm:justify-center">
                        {weatherData.slice(1).map((weather, index) => {
                            const date = formatDate(weather.applicable_date);
                            return (
                                <WeatherCard
                                    key={weather.id}
                                    day={
                                        index === 0
                                            ? "Tomorrow"
                                            : date.dayName +
                                              ", " +
                                              date.dayNum +
                                              " " +
                                              date.month
                                    }
                                    imgAbbr={weather.weather_state_abbr}
                                    maxDegree={parseInt(weather.max_temp)}
                                    minDegree={parseInt(weather.min_temp)}
                                    unit="C"
                                />
                            );
                        })}
                    </div>

                    <h1 className="font-semibold text-white text-2xl mt-10 mb-5">
                        Today's Highlights
                    </h1>
                    <HighlightsCards data={weatherData[0]} />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
