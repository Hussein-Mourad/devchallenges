import { useState } from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";

export default function NavBar({ className, onBtnClick, filterByTerm }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={className}>
      <nav className="px-2 sm:px-5 py-4 flex justify-between ">
        <div className="flex">
          <img
            src="/my_unsplash_logo.svg"
            alt="logo"
            lazy="true"
            className="cursor-pointer"
            onClick={() => {
              filterByTerm("");
            }}
          />

          <SearchBar className="hidden sm:inline-flex sm:ml-2" filterByTerm={filterByTerm}/>
        </div>
        <Button
          className="hidden sm:block"
          color="primary"
          onClick={onBtnClick}
        >
          Add a photo
        </Button>
        <div className="sm:hidden">
          <button
            className="w-7 focus:outline-none"
            onClick={() => {
              setIsMenuOpen((isMenuOpen) => {
                return !isMenuOpen;
              });
            }}
          >
            {!isMenuOpen ? (
              <svg
                className="w-7 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-7 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <nav className="sm:hidden shadow-md px-2 py-5 w-full">
          <SearchBar className="w-full" filterByTerm={filterByTerm}/>
          <div className="flex justify-end">
            <Button
              className="block my-5 "
              color="primary"
              onClick={onBtnClick}
            >
              Add a photo
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
