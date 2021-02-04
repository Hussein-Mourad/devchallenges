import WeatherCards from "./components/WeatherCards";
import Footer from "./components/Footer";
import HighlightsCards from "./components/HighlightsCards";
import SideDrawer from "./components/SideDrawer";

// import useFetch from "./api/useFetch";
// import getUserLocation from "./utils/getUserLocation";
import { info } from "./data";
import LocationMenu from "./components/LocationMenu";
import { useState } from "react";
import DegreeButtons from "./components/DegreeButtons";

function App() {
    // getUserLocation();
    // const { data, isLoading, error, loadData } = useFetch(
    //   "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/1522006"
    // );
    const data = info;
    const weatherData = data.consolidated_weather;
    const [isMenuClosed, setIsMenuClosed] = useState(false);
    const [degSystem, setDegSystem] = useState("C");
    const props = {data, isMenuClosed, setIsMenuClosed, degSystem, setDegSystem};

    return (
        <div>
            <LocationMenu {...props} />
            <SideDrawer {...props}></SideDrawer>
            <div className="sm:absolute sm:top-0 sm:right-0 sm:w-4/5 md:w-8/12 px-5 pb-10 pt-5   ">
                <DegreeButtons {...props} />
                <WeatherCards data={weatherData} />

                <h1 className="font-semibold text-white text-2xl mt-10 mb-5">
                    Today's Highlights
                </h1>
                <HighlightsCards data={weatherData[0]} />
                <Footer />
            </div>
        </div>
    );
}

export default App;
