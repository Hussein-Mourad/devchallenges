import logo from "../assets/logo.svg";
import Icon from "@material-ui/core/Icon";
import SearchWrapper from "./SearchWrapper.js";
import Button from "./Button.js";

function Header({
  className,
  toggleMenu,
  handleLocationButton,
  handleGuestButton,
  handleSearchButton,
}) {
  return (
    <header
      className={`${className} sm:flex sm:justify-between sm:items-center`}
    >
      <div className="w-32">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <div className="flex justify-center mt-9 sm:m-0">
        <SearchWrapper className="">
          <Button
            className="items-center  py-4"
            onClick={() => {
              handleLocationButton();
              toggleMenu();
            }}
          >
            Helsinki, Finland
          </Button>

          <Button
            className="text-opacity-70 items-center py-4"
            textColor={"text-gray-400"}
            onClick={() => {
              handleGuestButton();
              toggleMenu();
            }}
          >
            Add guests
          </Button>
          <Button
            className="items-center py-4"
            onClick={() => {
              handleSearchButton();
              toggleMenu();
            }}
          >
            <Icon className="text-primary text-opacity-90">search</Icon>
          </Button>
        </SearchWrapper>
      </div>
    </header>
  );
}

export default Header;
