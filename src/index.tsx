import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { firebase, dbService } from "./myFirebase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
