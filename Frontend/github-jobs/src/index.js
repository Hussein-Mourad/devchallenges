import React from "react";
import ReactDOM from "react-dom";
import "./css/base.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./ThemeContext";
import Layout from "./components/Layout";
import { GlobalStateProvider } from "./GlobalState";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <ThemeProvider>
        <Router>
          <Layout>
            <App />
          </Layout>
        </Router>
      </ThemeProvider>
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
