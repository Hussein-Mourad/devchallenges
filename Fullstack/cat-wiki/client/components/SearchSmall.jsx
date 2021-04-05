import SearchBar from "./SearchBar";

export default function SearchSmall({ isMenuOpen, setIsMenuOpen, children }) {
  return (
    <>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white p-3">
          <div className="flex justify-end mb-5">
            <button
              className=" inline-flex items-center justify-center bg-gray-100 w-10 h-10 rounded-md focus:outline-none hover:bg-gray-200 active:bg-gray-300"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <img
                className="w-6 block cursor-pointer"
                src="/icons/closeIcon.svg"
                alt="closeButton"
              />
            </button>
          </div>
          <SearchBar type="text" placeholder="Enter your breed" />
          <div>{ children}</div>
        </div>
      )}
    </>
  );
}
