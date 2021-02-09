import background from "../assets/Cloud-background.png";
import Icon from "@material-ui/core/Icon";
import getWeatherImg from "./../utils/getWeatherImg";
import formatDate from "./../utils/formatDate";
import celsius_fahrenheit from "./../utils/celsius_fahrenheit";
import getUserLocation from './../utils/getUserLocation';

function SideDrawer({ data, setIsMenuClosed, degSystem, setWoeid }) {
    const weatherData = data.consolidated_weather[0];
    const date = formatDate(weatherData.applicable_date);

    return (
        <div className="sm:fixed sm:top-0 sm:left-0 w-full sm:w-1/5 md:w-4/12 h-screen bg-blueGray-800 py-4 overflow-x-hidden relative">
            <div className="px-3 flex items-center justify-between">
                <button
                    className="px-4 py-2 bg-gray-500 text-coolGray-200"
                    onClick={() => setIsMenuClosed(false)}
                >
                    Search for places
                </button>
                <button className="rounded-full bg-gray-500 text-coolGray-200 w-10 h-10 inline-flex items-center justify-center"
                onClick={()=>{}}
                >
                    <Icon>gps_fixed</Icon>
                </button>
            </div>
            <div className="transform scale-150 absolute top-32">
                <img className="opacity-5 w-full" src={background} alt="" />
            </div>

            <div
                className="flex flex-col items-center justify-evenly w-full text-center"
                style={{ height: "90%" }}
            >
                <img
                    className="w-36"
                    src={getWeatherImg(weatherData.weather_state_abbr)}
                    alt=""
                />

                <div className="text-white text-8xl">
                    <span>
                        {celsius_fahrenheit(weatherData.the_temp, degSystem)}
                    </span>
                    <span className="text-5xl text-coolGray-400">
                        &deg;{degSystem}
                    </span>
                    <h4 className=" text-bold text-3xl text-coolGray-400 mt-16">
                        {weatherData.weather_state_name}
                    </h4>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-coolGray-400 pt-5 font-medium">
                        Today<span className="mx-3">.</span>
                        {date.dayName + ", " + date.dayNum + " " + date.month}
                    </p>
                    <p className="flex items-center text-coolGray-400 font-medium mt-8">
                        <Icon className="mr-2">location_on</Icon>
                        {data.title}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SideDrawer;
