import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalFonts from "./styles/styles.fonts";
import GlobalStyle from "./styles/styles.global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
