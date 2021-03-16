export const initialState = {
  searchTerm: "",
  fullTime: false,
  location: "",
  isLoading: true,
  error: null,
  data: [],
};
export function init() {
  return initialState;
}

export function reducer(state, action) {
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
      return { ...state, isLoading:false, error: action.payload };
    case "setData":
      return { ...state, data: action.payload, isLoading: false, error: null };
    default:
      throw new Error();
  }
}
