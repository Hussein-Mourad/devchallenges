import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import { useContext } from "react";
import { GlobalState } from "./GlobalState";

function App() {
  const { state } = useContext(GlobalState);

  if (state.error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 font-medium text-lg ">
        Oops... somethings went wrong!
      </div>
    );
  }

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:jobId" component={Info} />
    </Switch>
  );
}

export default App;
