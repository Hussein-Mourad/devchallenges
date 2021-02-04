import getWeatherImg from "./../utils/getWeatherImg";
function WeatherCard({ day, imgAbbr, maxDegree, minDegree, unit }) {
    return (
        <div className="flex flex-col items-center bg-blueGray-800 w-36 p-5 font-medium m-1">
            <h1 className="text-coolGray-200">{day}</h1>
            <img className="my-5 w-20" src={getWeatherImg(imgAbbr)} alt="" />
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
}

export default WeatherCard;
