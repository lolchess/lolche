import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { firebase, dbService } from "./myFirebase";
import GlobalStyle from "./styles/styles.global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
