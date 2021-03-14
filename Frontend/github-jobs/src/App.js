import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Home from "./pages/Home";
import Info from "./pages/Info";
import useFetch from "./api/useFetch";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data,
    isLoading,
    error,
    loadData,
  } = useFetch(
    "https://obscure-mesa-98003.herokuapp.com/https://jobs.github.com/positions.json",
    { description: searchTerm }
  );
  const props = { jobs: data, isLoading, error, loadData, setSearchTerm };

  if (error) {
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
          {!isLoading && <Info {...props} />}
          {isLoading && (
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
