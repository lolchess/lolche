import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
//NOTE 함수형 컴포넌트 (styled-component)에서 ref을 사용하기 위함
import styled from "styled-components";
import { StyledLi } from "../../styles/styles.component";
import useInput from "../../hooks/useInput";
import { useLocation } from "react-router";

function Navigation(): JSX.Element {
  const navigate = useNavigate();
  const [input, setInput, onChangeInput] = useInput("");
  const location = useLocation();
  const NavLi = () => {
    const [activeRank, setActiveRank] = useState("");
    const [activeCommunity, setActiveCommunity] = useState("");
    const [activeChat, setActiveChat] = useState("");
    useEffect(() => {
      if (location.pathname.indexOf("/rank") === 0) setActiveRank("black");
      if (location.pathname.indexOf("/community") === 0)
        setActiveCommunity("black");
      if (location.pathname.indexOf("/Chatting") === 0) setActiveChat("black");
    }, []);

    return (
      <LiContainer>
        <StyledLi
          id="li-rank"
          onClick={() => navigate("/rank")}
          style={{ backgroundColor: activeRank }}
        >
          순위표
        </StyledLi>
        <StyledLi
          id="li-community"
          onClick={() => navigate("/community")}
          style={{ backgroundColor: activeCommunity }}
        >
          커뮤니티
        </StyledLi>
        <StyledLi
          id="li-chat"
          onClick={() => navigate("/Chatting")}
          style={{ backgroundColor: activeChat }}
        >
          채팅
        </StyledLi>
      </LiContainer>
    );
  };

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
        <MenuContainer>
          <Logo onClick={() => navigate("/")}>loltoGG</Logo>
          {/* <StyledLi id="li-home">home</StyledLi> */}
          <NavLi />
        </MenuContainer>

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
  margin: auto;
  width: auto;
  height: 50px;
  display: flex;
  padding: 0 82px;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  list-style: none;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LiContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  /* background-color: red; */
`;

const Logo = styled.span`
  /* font-family: "SongMyung"; */
  font-family: "OrelegaOne";
  font-size: 27px;
  cursor: pointer;
  margin: 0 50px 0 0;
`;

const InputContainer = styled.div`
  width: 250px;
  height: 30px;
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
