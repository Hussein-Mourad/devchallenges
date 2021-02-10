import Icon from "@material-ui/core/Icon";
const SearchItem = ({ children }) => {
    return (
        <button
            className="group px-2 py-4 my-2 w-full inline-flex items-center justify-between text-coolGray-200 border border-transparent hover:border-coolGray-500 transition duration-100 cursor-pointer"
        >
            <span>{children}</span>{" "}
            <Icon className="hidden group-hover:block transition duration-100 text-coolGray-500">
                chevron_right
            </Icon>
        </button>
    );
};
function LocationMenu({ isMenuClosed, setIsMenuClosed }) {
    return (
        <div
            className="sm:fixed sm:top-0 sm:left-0 w-full h-screen sm:w-1/5 md:w-4/12 bg-blueGray-800 fixed top-0 left-0 py-2 px-3 z-50"
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
                    />
                </div>
                <button className="px-4 py-2 text-coolGray-200 bg-indigo-600 hover:bg-opacity-80 active:bg-indigo-700">
                    Search
                </button>
            </div>
            <ul className="mt-4">
                <SearchItem>London</SearchItem>
            </ul>
        </div>
    );
}

export default LocationMenu;
