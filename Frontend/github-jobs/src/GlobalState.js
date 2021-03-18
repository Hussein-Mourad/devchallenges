import { createContext, useState } from "react";
import useFetch from "./api/useFetch";

export const GlobalState = createContext();
export const initialState = {
  searchTerm: "",
  fullTime: false,
  location: "",
  isLoading: true,
  error: null,
  data: [],
};
export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const params = {
    description: state.searchTerm,
    full_time: state.fullTime,
    location: state.location,
  };

  const { loadData } = useFetch(
    "https://obscure-mesa-98003.herokuapp.com/https://jobs.github.com/positions.json",
    params,
    state,
    setState
  );
  return (
    <GlobalState.Provider value={{ state, setState }}>
      {children}
    </GlobalState.Provider>
  );
};
