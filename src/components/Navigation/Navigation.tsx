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
  height: 40px;
  z-index: 9998;
`;

const StyledNav = styled.ul`
  cursor: default;
  margin: 0;
  width: auto;
  height: 44px;
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
        <StyledLi id="li-home" onClick={() => navigate("/")}>
          home
        </StyledLi>
        <StyledLi id="li-rank" onClick={() => navigate("/rank")}>
          순위표
        </StyledLi>
        <StyledLi id="li-community" onClick={() => navigate("/community")}>
          커뮤니티
        </StyledLi>
        <StyledLi id="li-chat" onClick={() => navigate("/chat")}>
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

export default Navigation;
