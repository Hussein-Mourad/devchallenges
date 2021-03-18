import { useEffect } from "react";

const useFetch = (link, params, state, setState) => {
  var url = new URL(link);
  var params = params;
  url.search = new URLSearchParams(params).toString();


  const loadData = () => {

    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setState((state) => {
          return { ...state, data: data, isLoading: false, error: null };
        });
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.info("fetch aborted");
        } else {
          // auto catches network / connection error
          setState((state) => {
            return { ...state, isLoading: false, error: err.message };
          });
        }
      });
    return abortCont;
  };
  useEffect(() => {
    const abortCont = loadData();
    // abort the fetch
    return () => abortCont.abort();
    // eslint-disable-next-line
  }, [link, state.searchTerm, state.location, state.fullTime]);

  return {
    loadData,
  };
};

export default useFetch;
