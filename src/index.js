/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NavContext from "./components/context/NavContext";

ReactDOM.render(
  <NavContext>
    <App />
  </NavContext>,
  document.getElementById("root")
);
