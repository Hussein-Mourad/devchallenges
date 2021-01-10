import Icon from "@material-ui/core/Icon";
import Button from "./Button.js";
import stays from "../assets/stays.json";
import Guests from "./Guests.js";
import SearchFull from "./SearchFull.js";
import SearchSmall from "./SearchSmall.js";

export default function HeaderOpen({
  toggleMenu,
  handleLocationButton,
  handleGuestButton,
  handleSearchButton,
  handleMinusButton,
  handlePlusButton,
  isGuestMenuOpen,
  uuid,
  setCity,
  city,
  adultGuests,
  childrenGuests,
}) {
  const guests = adultGuests + childrenGuests;
  const searchProps = {
    handleLocationButton,
    handleGuestButton,
    handleSearchButton,
    city,
    setCity,
    guests
  };
  const getUniqueCities = (data) => {
    var lookup = {};
    var items = data;
    var result = [];

    for (var item, i = 0; (item = items[i++]); ) {
      var city = item.city;

      if (!(city in lookup)) {
        lookup[city] = 1;
        result.push(city);
      }
    }
    return result;
  };

  return (
    <header className="fixed top-0 left-0 w-full h-screen transition ease-in-out duration-200 overflow-hidden z-50">
      <div className="relative p-3 sm:px-10 sm:py-5 w-full bg-gray-50 sm:min-h-max h-9/10 sm:h-3/4 z-50 shadow-2xl">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <h1 className="font-bold">Edit your search</h1>
            <button className="focus:outline-none" onClick={toggleMenu}>
              <Icon>close</Icon>
            </button>
          </div>
          <SearchFull {...searchProps} />
          <SearchSmall {...searchProps} />

          <div className="mx-9">
            {isGuestMenuOpen ? (
              <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-12">
                <Guests
                  type={"Adult"}
                  description={"Age 13 or above"}
                  handleMinusButton={() => {
                    handleMinusButton("Adult");
                  }}
                  handlePlusButton={() => {
                    handlePlusButton("Adult");
                  }}
                >
                  {adultGuests}
                </Guests>
                <Guests
                  type={"Children"}
                  description={"Age 2-12"}
                  handleMinusButton={() => {
                    handleMinusButton("Children");
                  }}
                  handlePlusButton={() => {
                    handlePlusButton("Children");
                  }}
                >
                  {childrenGuests}
                </Guests>
              </div>
            ) : (
              <div className="flex flex-col mt-5">
                {getUniqueCities(stays).map((city) => (
                  <button
                    key={uuid()}
                    className="inline-flex items-center text-gray-600 my-3 p-2 rounded-xl focus:outline-none hover:bg-gray-200  hover:bg-opacity-60 w-max active:bg-gray-300"
                    onClick={() => {
                      setCity(city);
                    }}
                  >
                    <Icon className="mr-2">room</Icon>{" "}
                    <span>{city}, Finland</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="absolute bottom-6 flex justify-center w-full sm:hidden">
            <Button className="bg-primary bg-opacity-90 active:bg-primary active:bg-opacity-80 px-6 font-bold items-center" onClick={handleSearchButton}>
              <Icon className="text-white mr-2 font-semibold">search</Icon>
              <span className="text-white">Search</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-black bg-opacity-20"></div>
    </header>
  );
}
