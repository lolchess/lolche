import { useNavigate } from "react-router";
import styled from "styled-components";
import {
  StyledLi,
  StyledStack,
  StyledInput,
} from "../../styles/styles.component";

import useInput from "../../hooks/useInput";

const StyledHeader = styled.header`
  color: white;
  background-color: #404040;
  font-size: 20px;
  text-align: center;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 9998;
`;

const StyledNav = styled.ul`
  cursor: default;
  margin: 0;
  width: auto;
  height: 50px;
  display: flex;
  padding: 0 82px;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  list-style: none;
`;

function Navigation(): JSX.Element {
  const navigate = useNavigate();
  const [input, setInput, onChangeInput] = useInput("");

  const onClickBtn = () => {
    if (!input.length) return;

    navigate("/UserPage/" + input);
    setInput("");
  };

  return (
    <StyledHeader id="header-nav">
      <StyledNav id="ul-nav">
        <Logo onClick={() => navigate("/")}>loltoGG</Logo>
        {/* <StyledLi id="li-home">home</StyledLi> */}
        <StyledLi id="li-rank" onClick={() => navigate("/rank")}>
          순위표
        </StyledLi>
        <StyledLi id="li-community" onClick={() => navigate("/community")}>
          커뮤니티
        </StyledLi>
        <StyledLi id="li-chat" onClick={() => navigate("/Chatting")}>
          채팅
        </StyledLi>

        <StyledStack width="300px">
          <StyledInput value={input} onChange={onChangeInput} />
          <StyledLi onClick={onClickBtn}>찾기</StyledLi>
        </StyledStack>
      </StyledNav>
    </StyledHeader>
  );
}

const Logo = styled.span`
  /* font-family: "SongMyung"; */
  font-family: "OrelegaOne";
  font-size: 27px;
  cursor: pointer;
`;

export default Navigation;
