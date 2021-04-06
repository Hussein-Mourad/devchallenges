import { useState } from "react";
import { useRouter } from "next/router";
import SearchSmall from "./SearchSmall";
import SearchBar from "./SearchBar";
import SearchAutoComplete from "./SearchAutoComplete";

export default function Hero({ className, children, suggestions }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSuggOpen, setIsSuggOpen] = useState(false);
  const [sugg, setSugg] = useState(suggestions);

  const router = useRouter();

  const search = (breed_id) => {
    router.push(`/breeds/${encodeURIComponent(breed_id)}`);
  };
  const filterSugg = (val) => {
    if (val === "") {
      setSugg(suggestions);
    }
    var tmp = suggestions;
    setSugg(
      tmp.filter((item) => {
        return item.name.toLowerCase().includes(val.toLowerCase());
      })
    );
  };

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
            className="hidden md:inline-flex w-64 lg:w-96"
            type="text"
            placeholder="Enter your breed"
            suggestions={suggestions}
            filterSugg={filterSugg}
            onFocus={() => {
              setIsSuggOpen(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setIsSuggOpen(false);
              }, 100);
            }}
          >
            {isSuggOpen && (
              <SearchAutoComplete
                className="w-64 lg:w-96"
                data={sugg}
                onClick={(e) => {
                  search(e.target.value);
                }}
              />
            )}
          </SearchBar>
        </div>
      </div>
      <SearchSmall
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        filterSugg={filterSugg}
        suggestions={suggestions}
      >
        <div className="mt-5 overflow-y-scroll search-autocomplete h-4/5">
          {sugg.map((item, index) => (
            <button
              key={item.id}
              className="block p-2 my-2 text-lg hover:bg-gray-200 active:bg-gray-300 w-full focus:outline-none text-left"
              value={item.id}
              onClick={(e) => {
                search(e.target.value);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </SearchSmall>

      <img
        className="rounded-t-3xl"
        src="/images/HeroImagesm.png"
        srcSet="/images/HeroImagemd.png 1024w, /images/HeroImagelg.png 1440w"
        alt="A Cat"
      />
    </div>
  );
}
