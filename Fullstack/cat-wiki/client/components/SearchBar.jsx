import { useState, useEffect } from "react";
import Input from "./Input";
import SearchAutoComplete from "./SearchAutoComplete";
import { useRouter } from "next/router";

export default function SearchBar({ className, suggestions, ...props }) {
  const [value, setValue] = useState("");
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

  useEffect(() => {
    filterSugg(value);
  }, [value]);

  return (
    <>
      <div
        className={
          "border border-gray-300 rounded-3xl hover:border-gray-400 hover:shadow-sm  px-3  focus-within:border-black focus-within:hover:border-black bg-white items-center mt-3 w-64 lg:w-96" +
          " " +
          className
        }
      >
        <Input
          className="w-full rounded-3xl"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onFocus={() => {
            setIsSuggOpen(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              setIsSuggOpen(false);
            }, 100);
          }}
          {...props}
        />
        <div className="w-5 text-gray-800 hover:text-gray-800 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      {isSuggOpen && (
        <SearchAutoComplete
          className="w-64 lg:w-96"
          data={sugg}
          onClick={(e) => {
            console.log(e.target.value)
            search(e.target.value);
          }}
        />
      )}
    </>
  );
}
