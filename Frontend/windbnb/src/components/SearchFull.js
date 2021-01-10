import SearchWrapper from "./SearchWrapper.js";
import Button from "./Button.js";
import Icon from "@material-ui/core/Icon";

function SearchFull({
  handleLocationButton,
  handleGuestButton,
  handleSearchButton,
  city,
  guests
}) {
  return (
    <div className="mt-5 hidden sm:block ">
      <SearchWrapper className="w-full">
        <Button
          className="flex-col items-left w-full rounded-b-none sm:rounded-2xl px-9 py-2 "
          onClick={handleLocationButton}
        >
          <span className="font-extrabold mb-1">Location</span>
          <div className="block">{city},Finland</div>
        </Button>

        <Button
          className="flex-col items-left w-full rounded-t-none sm:rounded-2xl -mt-px px-9"
          onClick={handleGuestButton}
        >
          <span className="font-extrabold mb-1">Guests</span>
          <div className="text-gray-400">{guests}</div>
        </Button>

        <Button
          className="bg-primary bg-opacity-90 active:bg-primary active:bg-opacity-80 px-6 font-bold items-center w-3/12"
          onClick={handleSearchButton}
        >
          <Icon className="text-white mr-2 font-semibold">search</Icon>
          <span className="text-white">Search</span>
        </Button>
      </SearchWrapper>
    </div>
  );
}
export default SearchFull;
