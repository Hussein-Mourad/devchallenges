import Icon from "@material-ui/core/Icon";
import { useState } from "react";
const SearchItem = ({ children, onClick }) => {
    return (
        <button
            className="group px-2 py-4 my-2 w-full inline-flex items-center justify-between text-coolGray-200 border border-transparent hover:border-coolGray-500 transition duration-100 cursor-pointer"
            onClick={onClick}
        >
            <span>{children}</span>{" "}
            <Icon className="hidden group-hover:block transition duration-100 text-coolGray-500">
                chevron_right
            </Icon>
        </button>
    );
};

function LocationMenu({
    isMenuClosed,
    setIsMenuClosed,
    setWoeid,
    setIsLoading,
}) {
    const [choices, setChoices] = useState([]);
    const [value, setValue] = useState("");

    const getPlaces = async (query) => {
        const res = await fetch(
            "https://obscure-mesa-98003.herokuapp.com/https://www.metaweather.com/api/location/search/?query=" +
                query
        );
        const data = await res.json();
        setChoices(data);
    };

    return (
        <div
            className="fixed top-0 left-0 w-full h-screen sm:w-1/5 md:w-4/12 bg-blueGray-800  py-2 px-3 z-50 overflow-y-scroll"
            hidden={isMenuClosed}
        >
            <button
                className="w-full flex justify-end text-coolGray-200 mb-4"
                onClick={() => setIsMenuClosed(true)}
            >
                <Icon>close</Icon>
            </button>
            <div className="inline-flex justify-between items-center w-full">
                <div className="p-2 mr-3 w-full inline-flex items-center border border-coolGray-400">
                    <Icon className="text-coolGray-500 mr-2">search</Icon>
                    <input
                        type="text"
                        className="text-coolGray-200 placeholder-gray-500 bg-transparent w-full"
                        placeholder="search location"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <button
                    className="px-4 py-2 text-coolGray-200 bg-indigo-600 hover:bg-opacity-80 active:bg-indigo-700"
                    onClick={() => {
                        getPlaces(value);
                    }}
                >
                    Search
                </button>
            </div>
            <ul className="mt-4">
                {choices.map((choice) => (
                    <SearchItem
                        key={choice.woeid}
                        onClick={() => {
                            setWoeid(choice.woeid);
                            setIsMenuClosed(true);
                            setChoices([]);
                            setIsLoading(true);
                        }}
                    >
                        {choice.title}
                    </SearchItem>
                ))}
            </ul>
        </div>
    );
}

export default LocationMenu;
