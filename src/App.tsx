import React from "react";
import Community from "./components/Community";
import Navigation from "./components/Navigation";
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
        <Route path="/" element={<></>} />
        <Route path="/Community" element={<Community />} />
        <Route path="/RankTable" element={<RankTable />} />
        <Route path="/UserPage/:name" element={<UserPage />} />
        <Route path="/Chatting" element={<Chatting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
