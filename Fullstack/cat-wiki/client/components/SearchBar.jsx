import { useState } from "react";
import Input from "./Input";

export default function SearchBar({
  className,
  search,
  filterSugg,
  ...props
}) {
  const [value, setValue] = useState("")
  return (
    <div
      className={
        "border border-gray-300 rounded-3xl hover:border-gray-400 hover:shadow-sm inline-flex items-center px-3  focus-within:border-black focus-within:hover:border-black" +
        " " +
        className
      }
    >
      <Input
        className="w-full rounded-3xl"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          filterSugg(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.keyCode === 13) {
            search(value);
            setValue("");
          }
        }}
        {...props}
      />
      <button
        className="w-5 text-gray-800 hover:text-gray-800 focus:outline-none"
        onClick={() => {
          search(value);
        }}
      >
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
      </button>
    </div>
  );
}
