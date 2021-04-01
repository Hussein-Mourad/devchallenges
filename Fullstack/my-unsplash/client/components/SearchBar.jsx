import { useState } from "react";
import Input from "./Input";

export default function SearchBar({ className, filterByTerm }) {
   const [value, setValue] = useState("");
  return (
    <div
      className={
        "border border-gray-300 rounded-md items-center relative hover:border-gray-400 hover:shadow-sm" + " " +
        className
      }
    >
      <button className="w-5 text-gray-400 hover:text-gray-800 absolute left-3 top-1/2 transform -translate-y-1/2 focus:outline-none" onClick={() => { filterByTerm(value) }}>
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

      <Input
        type="text"
        placeholder="Search by name"
        className="pl-11 w-full"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.keyCode === 13) {
            filterByTerm(value);
            setValue("");
          }
        }}
      />
    </div>
  );
}
