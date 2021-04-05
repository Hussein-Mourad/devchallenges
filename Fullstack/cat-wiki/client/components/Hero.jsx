import { useState } from "react";
import SearchSmall from "./SearchSmall";
import SearchBar from "./SearchBar";
import SearchAutoComplete from "./SearchAutoComplete";
import { useRouter } from "next/router";

export default function Hero({
  className,
  children,
  suggestions,
  setSuggestions,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSuggOpen, setIsSuggOpen] = useState(false);
  const router = useRouter();
  
  const search = (value) => {
    router.push(`/breeds/${encodeURIComponent(value)}`);
  };
  const filterSugg = (value) => {
    console.log(init);
    setSuggestions(
      init.filter((item) => {
        return item.name.includes(value);
      })
    );
  };
  return (
    <div className="relative">
      <div className="absolute top-1/2 transform -translate-y-2/3  px-5 sm:px-10 w-1/2">
        <img
          className="sm:w-44 md:w-64"
          src="/icons/CatLogoWhite.svg"
          alt="cat logo"
        />
        <p className="text-white">Get to know more about your cat breed</p>
        <button
          className="px-4 py-2 mt-3 inline-flex md:hidden items-center bg-white rounded-3xl focus:outline-none"
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
        <div className="">
          <SearchBar
            className="bg-white hidden md:inline-flex mt-3 w-64 lg:w-96"
            type="text"
            placeholder="Enter your breed"
            search={search}
            filterSugg={filterSugg}
            onFocus={() => {
              setIsSuggOpen(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setIsSuggOpen(false);
              }, 100);
            }}
          />
          {isSuggOpen && (
            <SearchAutoComplete
              className="w-64 lg:w-96"
              data={suggestions}
              onClick={(e) => {
                console.log(e.target.innerText);
                
              }}
            />
          )}
        </div>
      </div>
      <SearchSmall isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <img
        className="rounded-t-3xl"
        src="/images/HeroImagesm.png"
        srcSet="/images/HeroImagemd.png 1024w, /images/HeroImagelg.png 1440w"
        alt="A Cat"
      />
    </div>
  );
}
