import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const StyledHeader = styled.header`
  color: white;
  background-color: #424245;
  font-size: 20px;
  text-align: center;
  position: absolute;
  left: 0;
  width: 100%;
  height: 40px;
  z-index: 9998;
`;

const StyledNav = styled.ul`
  cursor: default;
  margin: 0;
  width: auto;
  height: 44px;
  display: flex;
  justify-content: flex-start;
  user-select: none;
  list-style: none;
`;

const StyledLi = styled.li`
  font-size: 12px;
  line-height: 3.66667;
  font-weight: 400;
  color: #f5f5f7;
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0 8px;
  height: 44px;
  opacity: 0.8;
  cursor: pointer;
`;

function Navigation(): JSX.Element {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLi onClick={() => navigate("/rank")}>순위표</StyledLi>
        <StyledLi onClick={() => navigate("/community")}>커뮤니티</StyledLi>
        <StyledLi onClick={() => navigate("/chat")}>채팅</StyledLi>
      </StyledNav>
    </StyledHeader>
  );
}

export default Navigation;
