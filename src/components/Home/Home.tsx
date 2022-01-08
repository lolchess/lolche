import { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  StyledStack,
  StyledTh,
  StyledTd,
  StyledTr,
  StyledSection,
  StyledButton,
} from "../../styles/styles.component";
import { useNavigate } from "react-router";
import useInput from "../../hooks/useInput";
import { getLeagueByChallenger } from "../../apis/getLeagueByChallenger";
import { LeagueItemDTO } from "../../models/LeagueItemDTO";
import { LeagueListDTO } from "../../models/LeagueListDTO";

const StyledHomeInput = styled.input`
  padding: 3px 10px;
  width: 85%;
  height: 40px;
  font-size: 15px;
  max-width: 300px;
  outline: none;
  border: 2px solid #bbb;
  border-radius: 1px;
  display: inline-block;
  box-sizing: border-box;
  transition: 0.2s ease all;
`;
function Home(): JSX.Element {
  const navigate = useNavigate();
  AOS.init();
  const [input, setInput, onChangeInput] = useInput("");

  const onClickBtn = () => {
    if (!input.length) return;

    navigate("/UserPage/" + input);
    setInput("");
  };

  const RankTable = () => {
    const [list, setList] = useState<null | LeagueItemDTO[]>(null);

    useEffect(() => {
      const getRank = async () => {
        const challenger: LeagueListDTO = await getLeagueByChallenger();
        setList(
          challenger.entries.sort((a, b) => b.leaguePoints - a.leaguePoints)
        );
      };

      getRank();
    }, []);

    return (
      <StyledSection
        height="270px"
        justifyContent="flex-start"
        style={{
          // overflow: "scroll",
          overflow: "hidden",
        }}
        data-aos="flip-left"
      >
        <table
          style={{
            minWidth: "100%",
          }}
        >
          <thead>
            <tr>
              <StyledTh>순위</StyledTh>
              <StyledTh>
                <h3>소환사명</h3>
              </StyledTh>
              <StyledTh>
                <h3>LP</h3>
              </StyledTh>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((val, index) => {
                return (
                  <StyledTr key={val.summonerId}>
                    <StyledTd>{index + 1}</StyledTd>

                    <StyledTd style={{}}>{val.summonerName}</StyledTd>
                    <StyledTd> {val.leaguePoints} </StyledTd>
                  </StyledTr>
                );
              })}
          </tbody>
        </table>
      </StyledSection>
    );
  };
  return (
    <div>
      <StyledSection id="section-homeSearch" color="#f5f5f5" height="600px">
        <h1 data-aos="fade-up" data-aos-delay="200">
          전장의 역사를 확인하세요.
        </h1>
        <StyledStack width="300px" data-aos="fade-in" data-aos-delay="200">
          <StyledHomeInput value={input} onChange={onChangeInput} />
          <StyledButton
            height="40px"
            borderRadius="2px"
            lineHeight="3.45555"
            onClick={onClickBtn}
          >
            찾기
          </StyledButton>
        </StyledStack>
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
        <RankTable></RankTable>
        <span
          id="li-rank"
          onClick={() => navigate("/rank")}
          style={{
            cursor: "pointer",
          }}
        >
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
          <span
            id="li-community"
            onClick={() => navigate("/community")}
            style={{
              cursor: "pointer",
            }}
          >
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
          <span
            id="li-chat"
            onClick={() => navigate("/chat")}
            style={{
              cursor: "pointer",
            }}
          >
            {">"} 시작하기
          </span>
        </StyledSection>
      </StyledStack>
      <StyledSection height="300px">
        <span>만든사람들</span>
        <a>seohee-choi</a>
        <a>gua-moon</a>
      </StyledSection>
    </div>
  );
}

export default Home;
