import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Home from "./pages/Home";
import Info from "./pages/Info";
import useFetch from "./api/useFetch";
import { useReducer, useEffect } from "react";
import { reducer, initialState, init } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const params = {
    description: state.searchTerm,
    full_time: state.fullTime,
    location: state.location,
  };
  // const { loadData } = useFetch(
  //   "https://obscure-mesa-98003.herokuapp.com/https://jobs.github.com/positions.json", params, dispatch
  // );

  useEffect(() => {
     var url = new URL("https://obscure-mesa-98003.herokuapp.com/https://jobs.github.com/positions.json");
     url.search = new URLSearchParams(params).toString();
    fetch(url)
      .then((res) => {return res.json()})
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
  }, [state.searchTerm, state.fullTime, state.location])

  const props = {
    jobs: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
  
  console.log(state);

  if (state.error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 font-medium text-lg ">
        oops... somethings went wrong!
      </div>
    );
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home {...props} />
        </Route>
        <Route exact path="/:jobId">
          {!state.isLoading && <Info {...props} />}
          {state.isLoading && (
            <div className="flex items-center justify-center h-screen">
              <CircularProgress />
            </div>
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
