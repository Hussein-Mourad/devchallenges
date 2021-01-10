import Button from "./Button.js"

function SearchSmall({
  handleLocationButton,
  handleGuestButton,
  city,
  guests
}) {
  return (
    <div className="flex flex-col justify-center mt-3 sm:hidden">
      <Button
        className="flex-col items-left w-full rounded-b-none px-9"
        onClick={handleLocationButton}
      >
        <span className="font-extrabold mb-1">Location</span>
        <div className="block">{city},Finland</div>
      </Button>
      <Button
        className="flex-col items-left w-full rounded-t-none -mt-px px-9 "
        onClick={handleGuestButton}
      >
        <span className="font-extrabold mb-1">Guests</span>
        <div className="text-gray-400">{guests}</div>
      </Button>
    </div>
  );
}
export default SearchSmall