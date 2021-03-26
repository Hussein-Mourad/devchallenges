function DegreeButtons({ degSystem, setDegSystem }) {

    const getStyles = (button) => {
        const clickedStyle =
            "flex items-center justify-center w-8 h-8 rounded-full font-medium disabled:cursor-not-allowed bg-coolGray-200 text-blueGray-800";
        const normalStyle =
            "flex items-center justify-center w-8 h-8 rounded-full font-medium disabled:cursor-not-allowed bg-coolGray-500 hover:bg-opacity-80";

        if (degSystem === "C" && button === "C") return clickedStyle;
        else if (degSystem === "F" && button === "F") return clickedStyle;
        else return normalStyle;
    };

    return (
        <div className="flex justify-end w-full text-coolGray-200 pr-8 mb-8">
            <button
                className={getStyles("C")}
                disabled={degSystem === "C"}
                onClick={() => {
                    setDegSystem("C");
                }}
            >
                &deg;C
            </button>
            <button
                className={`${getStyles("F")} ml-3`}
                onClick={() => {
                    setDegSystem("F");
                }}
                disabled={degSystem === "F"}
            >
                &deg;F
            </button>
        </div>
    );
}

export default DegreeButtons;
