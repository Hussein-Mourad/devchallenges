import Icon from "@material-ui/core/Icon";
import Button from "./Button.js";
import ButtonSmall from "./ButtonSmall.js";
import SearchWrapper from "./SearchWrapper.js";
import stays from "../assets/stays.json";

export default function HeaderOpen({
  toggleMenu,
  handleLocationButton,
  handleGuestButton,
  isGuestMenuOpen,
  uuid,
}) {
  const searchProps = { handleLocationButton, handleGuestButton };
  console.log("getUniqueCities(stays: ", getUniqueCities(stays));
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
                <Guests type={"Adult"} description={"Age 13 or above"} />
                <Guests type={"Children"} description={"Age 2-12"} />
              </div>
            ) : (
              <div className="flex flex-col mt-5">
                {getUniqueCities(stays).map((city) => (
                  <button
                    key={uuid()}
                    className="inline-flex items-center text-gray-600 my-3 p-2 rounded-xl focus:outline-none hover:bg-gray-200  hover:bg-opacity-60 w-max active:bg-gray-300"
                  >
                    <Icon className="mr-2">room</Icon>{" "}
                    <span>{city}, Finland</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="absolute bottom-6 flex justify-center w-full sm:hidden">
            <Button className="bg-primary bg-opacity-90 active:bg-primary active:bg-opacity-80 px-6 font-bold items-center">
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

function Guests({ type, description, className }) {
  return (
    <div className={`${className} my-8 sm:ml-1/2`}>
      <h1 className="font-extrabold text-gray-800">{type}</h1>
      <span className="text-gray-400">{description}</span>
      <div className="mt-2">
        <ButtonSmall className="mr-2"> &#xFF0D;</ButtonSmall>
        <span>0</span>
        <ButtonSmall className="ml-2">&#xFF0B;</ButtonSmall>
      </div>
    </div>
  );
}

function SearchFull({ handleLocationButton, handleGuestButton }) {
  return (
    <div className="mt-5 hidden sm:block ">
      <SearchWrapper className="w-full">
        <Button
          className="flex-col items-left w-full rounded-b-none sm:rounded-2xl px-9 py-2 "
          onClick={handleLocationButton}
        >
          <span className="font-extrabold mb-1">Location</span>
          <div className="block">Helsinki,Finland</div>
        </Button>

        <Button
          className="flex-col items-left w-full rounded-t-none sm:rounded-2xl -mt-px px-9"
          onClick={handleGuestButton}
        >
          <span className="font-extrabold mb-1">Guests</span>
          <div className="text-gray-400">Add Guests</div>
        </Button>

        <Button className="bg-primary bg-opacity-90 active:bg-primary active:bg-opacity-80 px-6 font-bold items-center w-3/12">
          <Icon className="text-white mr-2 font-semibold">search</Icon>
          <span className="text-white">Search</span>
        </Button>
      </SearchWrapper>
    </div>
  );
}

function SearchSmall({ handleLocationButton, handleGuestButton }) {
  return (
    <div className="flex flex-col justify-center mt-3 sm:hidden">
      <Button
        className="flex-col items-left w-full rounded-b-none px-9"
        onClick={handleLocationButton}
      >
        <span className="font-extrabold mb-1">Location</span>
        <div className="block">Helsinki,Finland</div>
      </Button>
      <Button
        className="flex-col items-left w-full rounded-t-none -mt-px px-9 "
        onClick={handleGuestButton}
      >
        <span className="font-extrabold mb-1">Guests</span>
        <div className="text-gray-400">Add Guests</div>
      </Button>
    </div>
  );
}

function getUniqueCities(data) {
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
}
