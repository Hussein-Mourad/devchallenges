import Icon from "@material-ui/core/Icon";
import { countries } from "../data/countries";
import { useState, useContext, useEffect } from "react";
import { GlobalState } from "../GlobalState";
const ListItem = ({ children }) => {
  return (
    <li className="flex items-center my-3 ">
      {" "}
      <input className="mr-2 transform scale-125" type="radio" />{" "}
      <label className="text-gray-600 dark:text-gray-500 text-lg">
        {children}
      </label>
    </li>
  );
};

export default function SearchFilter() {
  const { state, setState } = useContext(GlobalState);
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    setState((state) => {
      return { ...state, fullTime: checked, isLoading: true, error: null };
    });
  }, [checked]);
  useEffect(() => {
    setState((state) => {
      return { ...state, location: inputValue, isLoading: true, error: null };
    });
  }, [inputValue]);

  return (
    <aside className="mt-8 md:mt-4 font-medium">
      <div className="align-middle">
        {" "}
        <input
          className="transform scale-125 mr-2 bg-red-200"
          type="checkbox"
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />{" "}
        <label className="text-gray-600 dark:text-gray-500 text-lg">
          Full time
        </label>{" "}
      </div>
      <div className="mt-6">
        <h2 className="font-bold text-gray-400 text-lg uppercase">Location</h2>
        <div className="flex items-center bg-white rounded-md mt-4">
          <Icon className="text-gray-400 ml-2 mt-1">public</Icon>
          <input
            className="px-2 py-4 placeholder-gray-400 w-full rounded-md"
            type="text"
            list="countries"
            placeholder="City, state, zip code or country"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <datalist id="countries">
            {countries.map((country, index) => (
              <option key={index} value={country} />
            ))}
          </datalist>
        <button
          className="px-3 py-3 sm:py-2 bg-blue-500 text-gray-200 rounded-md m-1"
          onClick={() => {
            setState((state) => {
              return {
                ...state,
                location: inputValue,
                isLoading: true,
                error: null,
              };
            });
            setInputValue("");
          }}
        >
          Go
        </button>
          </div>

        <ul className="mt-6">
          <ListItem>London</ListItem>
          <ListItem>Amsterdam</ListItem>
          <ListItem>New York</ListItem>
          <ListItem>Berlin</ListItem>
        </ul>
      </div>
    </aside>
  );
}
