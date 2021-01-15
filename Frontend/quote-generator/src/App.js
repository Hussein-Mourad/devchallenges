import "./css/base.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Author from "./pages/Author";
import Home from "./pages/Home";
import { useState } from "react";
import Footer from './components/Footer';

function App() {
  const [author, setAuthor] = useState("");
  return (
    <Router>
      <div className="relative container mx-auto py-5 min-h-screen">
        <Switch>
          <Route exact path="/">
            <Home setAuthor={setAuthor} />
          </Route>
          <Route path="/author">
            <Author author={author} setAuthor={setAuthor} />
          </Route>
        </Switch>
      <Footer className="absolute bottom-0 w-full" />
      </div>
    </Router>
  );
}

export default App;
