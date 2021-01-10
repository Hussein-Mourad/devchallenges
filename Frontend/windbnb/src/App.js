import "./css/tailwind.css";
import { useState } from "react";
import uuid from "react-uuid";
import stays from "./assets/stays.json";
import Header from "./components/Header.js";
import HeaderOpen from "./components/HeaderOpen.js";
import TitleBar from "./components/TitleBar.js";
import CardWrapper from "./components/CardWrapper.js";
import Footer from "./components/Footer.js";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGuestMenuOpen, setIsGuestMenuOpen] = useState(false);
  const [city, setCity] = useState("Whole");
  const [adultGuests, setAdultGuests] = useState(0);
  const [childrenGuests, setChildrenGuests] = useState(0);
  const [filteredStays, setFilteredStays] = useState(stays);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLocationButton = () => {
    setIsGuestMenuOpen(false);
  };
  const handleGuestButton = () => {
    setIsGuestMenuOpen(true);
  };

  const handleSearchButton = () => {
    if (city === "Whole") {
      return 0;
    }
    const filterLocation = stays.filter((stay) => stay.city.includes(city));
    const filterGuests = filterLocation.filter(
      (stay) => stay.maxGuests >= adultGuests + childrenGuests
    );
    if (filterGuests) {
      setFilteredStays(filterGuests);
    } else {
      setFilteredStays([]);
    }
    toggleMenu();
  };
  const handleMinusButton = (param) => {
    if (param === "Adult") {
      setAdultGuests(adultGuests - 1);
    } else if (param === "Children") {
      setChildrenGuests(childrenGuests - 1);
    }
  };
  const handlePlusButton = (param) => {
    if (param === "Adult") {
      setAdultGuests(adultGuests + 1);
    } else if (param === "Children") {
      setChildrenGuests(childrenGuests + 1);
    }
  };
  const headerProps = {
    toggleMenu,
    handleLocationButton,
    handleGuestButton,
    handleSearchButton,
    handleMinusButton,
    handlePlusButton,
    setIsGuestMenuOpen,
    setAdultGuests,
    setCity,
    setChildrenGuests,
    uuid,
    isGuestMenuOpen,
    city,
    adultGuests,
    childrenGuests,
  };
  return (
    <>
      {isMenuOpen ? <HeaderOpen {...headerProps} /> : ""}
      <div className="relative container mx-auto px-4 py-5 sm:px-8">
        <Header {...headerProps} />
        <main className="w-full">
          <TitleBar stays={filteredStays} />
          <CardWrapper stays={filteredStays} />
          {filteredStays.length === 0 ? (
            <div className="flex justify-center items-center w-full h-80">
              <h1 className="font-medium text-2xl text-gray-800">
                No result found.
              </h1>
            </div>
          ) : (
            " "
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
