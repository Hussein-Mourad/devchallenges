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
      state.searchTerm = action.payload;
      state.isLoading = true;
      return state;
    case "setFullTime":
      state.fullTime = action.payload;
      state.isLoading = true;
      return state;
    case "setLocation":
      state.location = action.payload;
      state.isLoading = true;
      return state;
    case "setIsLoading":
      state.isLoading = true;
      return state;
    case "setError":
      state.isLoading = false;
      state.error = action.payload;
      return state;
    case "setData":
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
      return state;
    default:
      throw new Error();
  }
}
