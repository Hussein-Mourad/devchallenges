import getWeatherImg from "../utils/getWeatherImg";
import formatDate from "./../utils/formatDate";
import celsius_fahrenheit from "./../utils/celsius_fahrenheit";

const Card = ({ day, imgAbbr, maxDegree, minDegree, unit }) => {
    return (
        <div className="flex flex-col items-center justify-evenly bg-blueGray-800 w-36 p-5 font-medium m-1">
            <h1 className="text-coolGray-200">{day}</h1>
            <div className="my-5 h-20">
                <img className="w-20" src={getWeatherImg(imgAbbr)} alt="" />
            </div>
            <div className="flex justify-evenly w-full">
                <p className="text-coolGray-200">
                    {maxDegree} &deg;{unit}
                </p>
                <p className="text-coolGray-400">
                    {minDegree} &deg;{unit}
                </p>
            </div>
        </div>
    );
};
function WeatherCards({ data, degSystem }) {
    return (
        <div className="grid grid-cols-2 gap-3 mx-auto max-w-max sm:flex sm:justify-center md:grid md:grid-col-3 lg:flex lg:justify-center">
            {data.consolidated_weather.slice(1).map((weather, index) => {
                const date = formatDate(weather.applicable_date);
                return (
                    <Card
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
                        maxDegree={celsius_fahrenheit(
                            weather.max_temp,
                            degSystem
                        )}
                        minDegree={celsius_fahrenheit(
                            weather.min_temp,
                            degSystem
                        )}
                        unit={degSystem}
                    />
                );
            })}
        </div>
    );
}

export default WeatherCards;
