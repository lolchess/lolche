import { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { StyledStack, StyledSection } from "../../styles/styles.component";
import { useNavigate } from "react-router";

function Home(): JSX.Element {
  const navigate = useNavigate();
  AOS.init();
  return (
    <div>
      <StyledSection id="section-homeSearch" color="#f5f5f5" height="600px">
        <h1 data-aos="fade-up" data-aos-delay="200">
          전장의 역사를 확인하세요.
        </h1>
        <div data-aos="fade-in" data-aos-delay="200">
          searchvar
        </div>
      </StyledSection>
      <StyledSection
        id="section-homeRank"
        justifyContent="space-between"
        height="700px"
        padding="50px"
      >
        <h1 data-aos="fade-up" data-aos-delay="300">
          강함을 증명하세요.
        </h1>
        <div data-aos="flip-left">table</div>
        <span id="li-rank" onClick={() => navigate("/rank")}>
          {">"} 자세히 보기
        </span>
      </StyledSection>
      <StyledStack>
        <StyledSection
          id="section-homeCommunity"
          width="50%"
          color="#f5f5f5"
          margin="10px"
        >
          <h3>커뮤니티.</h3>
          <span id="li-community" onClick={() => navigate("/community")}>
            {">"} 시작하기
          </span>
        </StyledSection>
        <StyledSection
          id="section-homeChat"
          width="50%"
          color="#f5f5f5"
          margin="10px"
        >
          <h3>실시간 채팅.</h3>
          <span id="li-chat" onClick={() => navigate("/chat")}>
            {">"} 시작하기
          </span>
        </StyledSection>
      </StyledStack>
      <StyledSection height="300px">
        <span>만든사람들</span>
      </StyledSection>
    </div>
  );
}

export default Home;
