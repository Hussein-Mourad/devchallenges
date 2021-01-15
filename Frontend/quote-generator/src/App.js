import "./css/base.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Author from "./pages/Author";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [author, setAuthor] = useState("");
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home setAuthor={setAuthor} />
        </Route>
        <Route path="/author">
          <Author author={author} setAuthor={setAuthor} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
