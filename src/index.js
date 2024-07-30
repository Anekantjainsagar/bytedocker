import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./mockup.css";
import App from "./App";
import State from "./Context/State";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <State>
        <App />
      </State>
    </Router>
  </React.StrictMode>
);
