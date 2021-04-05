import { useState } from "react";
import SearchSmall from "./SearchSmall";
import SearchBar from "./SearchBar";

export default function Hero({
  className,
  children,
  suggestions,
  setSuggestions,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="absolute top-1/2 transform -translate-y-1/2 sm:-translate-y-2/3 pl-3 md:px-10 w-1/2">
        <img
          className="w-28 sm:w-44 md:w-64"
          src="/icons/CatLogoWhite.svg"
          alt="cat logo"
        />
        <p className="text-white">Get to know more about your cat breed</p>
        <button
          className="px-3 py-1 sm:py-2 mt-3 inline-flex md:hidden items-center bg-white rounded-3xl focus:outline-none"
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <p className="mr-5">Search</p>
          <img
            className="w-5"
            src="/icons/searchIcon.svg"
            alt="searchIcon.svg"
          />
        </button>
        <div>
          <SearchBar
            className="hidden md:inline-flex"
            type="text"
            placeholder="Enter your breed"
            suggestions={suggestions}
          />
        </div>
      </div>
      <SearchSmall
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        suggestions={suggestions}
      />

      <img
        className="rounded-t-3xl"
        src="/images/HeroImagesm.png"
        srcSet="/images/HeroImagemd.png 1024w, /images/HeroImagelg.png 1440w"
        alt="A Cat"
      />
    </div>
  );
}
