import React from "react";
import Community from "./components/Community";
import NewPostEditor from "./components/Community/Editor";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import RankTable from "./components/RankTable";
import UserPage from "./components/UserPage";
import Chatting from "./components/Chatting";
import styled from "styled-components";
import UserPageError from "./components/UserPageError";
import Post from "./components/Community/Post";

function App() {
  return (
    <StyledDiv>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/NewPostEditor" element={<NewPostEditor />} />
          <Route path="/UserPage/:name" element={<UserPage />} />
          <Route path="/Chatting" element={<Chatting />} />
          <Route path="/community/:postId" element={<Post />} />
          <Route path="/rank" element={<RankTable />} />
          <Route path="/UserPageError" element={<UserPageError />} />
        </Routes>
      </BrowserRouter>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  font-family: "NOTO Sans KR Thin";
`;

export default App;
