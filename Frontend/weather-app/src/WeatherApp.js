import { useState } from "react";
import WeatherCards from "./components/WeatherCards";
import Footer from "./components/Footer";
import HighlightsCards from "./components/HighlightsCards";
import SideDrawer from "./components/SideDrawer";
import LocationMenu from "./components/LocationMenu";
import DegreeButtons from "./components/DegreeButtons";

function WeatherApp({ data, getUserLocation }) {
    const [isMenuClosed, setIsMenuClosed] = useState(true);
    const [degSystem, setDegSystem] = useState("C");
    const props = {
        data,
        getUserLocation,
        isMenuClosed,
        setIsMenuClosed,
        degSystem,
        setDegSystem,
    };
    return (
        <div>
            <LocationMenu {...props} />
            <SideDrawer {...props}></SideDrawer>
            <div className="md:absolute md:top-0 md:right-0  md:w-8/12 px-5 pb-10 pt-5   ">
                <DegreeButtons {...props} />
                <WeatherCards {...props} />

                
                <HighlightsCards data={data.consolidated_weather[0]} />
                <Footer />
            </div>
        </div>
    );
}

export default WeatherApp;
