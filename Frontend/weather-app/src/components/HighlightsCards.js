import Icon from "@material-ui/core/Icon";

const Card = ({ name, unit, children, text, className }) => {
    return (
        <div
            className={
                "flex flex-col items-center bg-blueGray-800 w-full md:w-52 lg:w-80 xl:w-96 p-5 font-medium text-coolGray-200 my-2 " +
                className
            }
        >
            <p className="text-xl">{name}</p>
            <p className="font-bold text-6xl my-5 inline-flex items-end">
                {text}
                <span className="font-normal text-4xl ml-2 mb-2">{unit}</span>
            </p>
            {children}
        </div>
    );
};
function HighlightsCards({ data }) {
    return (
        <div className="md:max-w-max  md:mx-auto">
            <h1 className="font-semibold text-white text-2xl mt-10 mb-5">
                Today's Highlights
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center md:place-items-stretch">
                <Card
                    name="Wind Status"
                    text={parseInt(data.wind_speed)}
                    unit={" mph"}
                >
                    <div className="flex items-center w-20 mt-3 mb-5">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-coolGray-500">
                            <Icon
                                style={{
                                    transform: `rotate(${data.wind_direction}deg)`,
                                }}
                            >
                                navigation
                            </Icon>
                        </div>
                        <p className="ml-5">{data.wind_direction_compass}</p>
                    </div>
                </Card>
                <Card name="Humidity" text={parseInt(data.humidity)} unit={"%"}>
                    <div className="mt-3 text-lg flex justify-between w-5/6 px-1">
                        <div>0</div>
                        <div>50</div>
                        <div>100</div>
                    </div>
                    <div className="my-1 w-5/6 h-3 rounded-xl bg-coolGray-200">
                        <div
                            className="h-3 bg-yellow-200 rounded-xl"
                            style={{
                                width: `${data.humidity}%`,
                            }}
                        ></div>
                    </div>
                    <div className="mb-5 text-lg w-5/6 flex justify-end px-1">
                        %
                    </div>
                </Card>
                <Card
                    name="Visibility"
                    text={data.visibility.toFixed(1)}
                    unit={"miles"}
                />
                <Card
                    name="Air Pressure"
                    text={parseInt(data.air_pressure)}
                    unit={"mb"}
                />
            </div>
        </div>
    );
}

export default HighlightsCards;
