import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = () => {
    setData(null);
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          // error coming back from server
          throw Error(`Oh no something went wrong!`);
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data.data);
        setError(null);
      })

      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, isLoading, error, loadData };
}

export default useFetch;
