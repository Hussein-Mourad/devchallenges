import { useEffect } from "react";

const useFetch = (link, params, dispatch) => {
  var url = new URL(link);
  var params = params;
  url.search = new URLSearchParams(params).toString();
  console.log(url);
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
        dispatch({ type: "setData", payload: data });
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.info("fetch aborted");
        } else {
          // auto catches network / connection error
          dispatch({ type: "setError", payload: err.message });
        }
      });
    return abortCont;
  };
  useEffect(() => {
    const abortCont = loadData();
    // abort the fetch
    return () => abortCont.abort();
    // eslint-disable-next-line
  }, [link]);

  return {
    loadData,
  };
};

export default useFetch;
