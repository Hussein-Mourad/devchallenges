import { useState, useEffect } from "react";

const useFetch = (link, params) => {
  var url = new URL(link);
  var params = params;

  url.search = new URLSearchParams(params).toString();
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });
  
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
        setState({ data: data, error: null, isLoading: false });
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.info("fetch aborted");
        } else {
          // auto catches network / connection error
          setState({ data: null, error: err.message, isLoading: false });
        }
      });
    return abortCont;
  };
  useEffect(() => {
    const abortCont = loadData();
    // abort the fetch
    return () => abortCont.abort();
    // eslint-disable-next-line
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
    loadData,
  };
};

export default useFetch;
