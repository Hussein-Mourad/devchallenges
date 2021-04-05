export default function SearchAutoComplete({ className, onClick, data }) {
  return (
    <>
      {data && (
        <div
          className={`mt-3 max-h-56 rounded-2xl absolute bg-white p-2 ${className}`}
        >
          <div className="search-autocomplete w-full max-h-40 overflow-y-scroll">
            {data.map((item, index) => (
              <button
                key={item.id}
                className="block px-2 hover:bg-gray-200 active:bg-gray-300 w-full focus:outline-none text-left p-1 my-1"
                value={item.id}
                onClick={onClick}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
