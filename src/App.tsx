import React from "react";
import Community from "./components/Community";
import Post from "./components/Community/Post";
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
        <Route path="/community" element={<Community />} />
        <Route path="/community/NewPostEditor" element={<NewPostEditor />} />
        <Route path="/community/:postId" element={<Post />} />
        <Route path="/rank" element={<Rank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
