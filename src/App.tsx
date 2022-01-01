import React from "react";
import Community from "./components/Community";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/Community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
