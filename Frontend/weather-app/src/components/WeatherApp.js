import { useState } from "react";
import WeatherCards from "./WeatherCards";
import Footer from "./Footer";
import HighlightsCards from "./HighlightsCards";
import SideDrawer from "./SideDrawer";
import LocationMenu from "./LocationMenu";
import DegreeButtons from "./DegreeButtons";

function WeatherApp({ data, getUserLocation, setWoeid, setIsLoading }) {
    const [isMenuClosed, setIsMenuClosed] = useState(true);
    const [degSystem, setDegSystem] = useState("C");
    const props = {
        data,
        setWoeid,
        setIsLoading,
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
