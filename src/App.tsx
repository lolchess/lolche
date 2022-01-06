import React from "react";
import Community from "./components/Community";
import NewPostEditor from "./components/Community/Editor";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Rank from "./components/Rank";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import RankTable from "./components/RankTable";
import UserPage from "./components/UserPage";
import Chatting from "./components/Chatting";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/NewPostEditor" element={<NewPostEditor />} />
        <Route path="/UserPage/:name" element={<UserPage />} />
        <Route path="/Chatting" element={<Chatting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
