import { createContext, useEffect, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "setSearchTerm":
      return { ...state, searchTerm: action.payload, isLoading: true };
    case "setFullTime":
      return { ...state, fullTime: action.payload, isLoading: true };
    case "setLocation":
      return { ...state, location: action.payload, isLoading: true };
    case "setIsLoading":
      return { ...state, isLoading: true };
    case "setError":
      return { ...state, error: true };
    case "setData":
      return { ...state, data: action.payload, isLoading: false, error: null };
    default:
      throw new Error();
  }
}

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  const { data, isLoading, error, loadData } = useFetch(
    `https://obscure-mesa-98003.herokuapp.com/https://jobs.github.com/positions.json?description=${searchTerm}`
  );

  return (
    <DataContext.Provider value={(state, dispatch)}>
      {children}
    </DataContext.Provider>
  );
};
