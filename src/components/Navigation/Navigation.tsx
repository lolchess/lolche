import { useNavigate } from "react-router";
import styled from "styled-components";
import { StyledLi } from "../../styles/styles.component";
import useInput from "../../hooks/useInput";

function Navigation(): JSX.Element {
  const navigate = useNavigate();
  const [input, setInput, onChangeInput] = useInput("");

  const onClickBtn = () => {
    if (!input.length) return;

    navigate("/UserPage/" + input);
    setInput("");
  };

  const onKeyPress = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      onClickBtn();
    }
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

        <InputContainer>
          <StyledInput2
            value={input}
            onChange={onChangeInput}
            onKeyPress={onKeyPress}
          />
          <StyledIcon className="fas fa-search" onClick={onClickBtn} />
        </InputContainer>
      </StyledNav>
    </StyledHeader>
  );
}

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

const Logo = styled.span`
  /* font-family: "SongMyung"; */
  font-family: "OrelegaOne";
  font-size: 27px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  width: 250px;
  height: 33px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-radius: 10px;
`;

const StyledInput2 = styled.input`
  height: 80%;
  width: calc(95%);
  border: none;
  font-size: 15px;

  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled.i`
  font-size: 17px;
  cursor: pointer;
  color: #404040;
`;

export default Navigation;
