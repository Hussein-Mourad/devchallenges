import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
                setIsLoading(false);
                setData(data);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    // auto catches network / connection error
                    setIsLoading(false);
                    setError(err.message);
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

    return { data, error, isLoading, setIsLoading, loadData };
};

export default useFetch;
