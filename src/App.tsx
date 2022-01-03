import React from "react";
import Community from "./components/Community";
import NewPostEditor from "./components/Community/Editor";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Rank from "./components/Rank";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Community/NewPostEditor" element={<NewPostEditor />} />
        <Route path="/Rank" element={<Rank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
