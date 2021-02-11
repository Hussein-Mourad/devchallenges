import SearchBg from "../assets/backgroundImg.png";
import Icon from "@material-ui/core/Icon";
import { useState } from 'react';

function SearchBar() {
    const [value, setValue] = useState("")
    
  return (
    <div className="relative mt-8">
      <img className="h-36 md:h-32 w-full rounded-md" src={SearchBg} alt="" />

      <div className="absolute inset-1/2 transform -translate-y-1/2 -translate-x-1/2 w-11/12 md:w-8/12 h-14 md:h-12 bg-white rounded-md flex items-center">
        <Icon className="text-gray-400 ml-3">work_outline</Icon>
        <input
          className="px-3 py-3 sm:py-2 w-full placeholder-gray-400"
          type="text"
          placeholder="Title, companies, expertise or benefits"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="px-8 py-3 sm:py-2 bg-blue-500 text-gray-200 rounded-md m-1">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
