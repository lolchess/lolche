import { useEffect, useState } from "react";
import { getLeagueByChallenger } from "../../apis/getLeagueByChallenger";
import { LeagueItemDTO } from "../../models/LeagueItemDTO";
import { LeagueListDTO } from "../../models/LeagueListDTO";
import {
  StyledTh,
  StyledTd,
  StyledTr,
  StyledSection,
  StyledButton,
} from "../../styles/styles.component";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledBox = styled.div`
  padding: 20px;
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
`;

function RankTable(): JSX.Element {
  const navigate = useNavigate();
  const [list, setList] = useState<null | LeagueItemDTO[]>(null);
  const [index, setIndex] = useState<number>(50);

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
    <div>
      <StyledSection height="180px" color="#f5f5f5">
        {/* <h1 data-aos="fade-up" data-aos-delay="200"> */}
        <h1>KR 서버의 소환사들.</h1>
      </StyledSection>
      {/* <StyledBox data-aos="flip-left"> */}
      <StyledBox>
        <table
          id="container"
          style={{
            width: "700px",
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
              list.slice(0, index).map((val, index) => {
                return (
                  <StyledTr
                    key={val.summonerId}
                    onClick={() => {
                      navigate("/UserPage/" + val.summonerName);
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <StyledTd>{index + 1}</StyledTd>
                    <StyledTd style={{}}>{val.summonerName}</StyledTd>
                    <StyledTd> {val.leaguePoints} </StyledTd>
                  </StyledTr>
                );
              })}
          </tbody>
        </table>
        {index >= 300 ? (
          <></>
        ) : (
          <StyledButton
            style={{ margin: "20px" }}
            onClick={() => setIndex(index + 50)}
          >
            더 보기
          </StyledButton>
        )}
      </StyledBox>
    </div>
  );
}

export default RankTable;
