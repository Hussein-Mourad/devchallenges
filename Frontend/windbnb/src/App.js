import "./css/tailwind.css";
import { useState } from "react";
import uuid from "react-uuid";
import stays from "./assets/stays.json";
import Header from "./components/Header.js";
import HeaderOpen from "./components/HeaderOpen.js";
import Card from "./components/Card.js";
import TitleBar from "./components/TitleBar.js";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGuestMenuOpen, setIsGuestMenuOpen] = useState(false);
  const [city, setCity] = useState('');
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLocationButton = () => {
    setIsGuestMenuOpen(false);
  };
  const handleGuestButton = () => {
    setIsGuestMenuOpen(true);
  };
  const headerProps = {
    toggleMenu,
    handleLocationButton,
    handleGuestButton,
    setIsGuestMenuOpen,
    setCity,
    uuid,
    isGuestMenuOpen,
    city,
  };
  return (
    <>
      {isMenuOpen ? <HeaderOpen {...headerProps} /> : ""}
      <div
        className="relative container mx-auto px-3 py-5 sm:px-6"
      >
        <Header {...headerProps} />
        <main>
          <TitleBar/>
          <div className="grid grid-cols-3 gap-10">
            {stays.map(
              ({
                city,
                country,
                superhost,
                title,
                rating,
                maxGuests,
                type,
                beds,
                photo,
              }) => {
                const stayProps = {
                  city,
                  country,
                  superhost,
                  title,
                  rating,
                  maxGuests,
                  type,
                  beds,
                  photo,
                };
                return <Card key={uuid()} {...stayProps} />;
              }
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
