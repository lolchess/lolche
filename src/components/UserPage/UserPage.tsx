import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSummonerByName } from "../../apis/getSummonerByName";
import {
  StyledStack,
  StyledSection,
  StyledCard,
  CardText,
} from "../../styles/styles.component";
import AOS from "aos";
import "aos/dist/aos.css";

interface UserDataProps {
  tier: string;
  wins: number;
  losses: number;
  leaguePoints: number;
  rank: string;
}

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function UserPage(): JSX.Element {
  AOS.init();

  const { name } = useParams();
  const [userData, setUserData] = useState<UserDataProps>();
  const [percent, setPercent] = useState({
    rate: CIRCUMFERENCE,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      setPercent({
        rate: CIRCUMFERENCE * (1 - userData.wins / userData.losses),
      });
    }
  }, [userData]);

  useEffect(() => {
    const getSummoner = async () => {
      if (!name) return;

      try {
        const [data] = await getSummonerByName(name);
        setUserData(data);
      } catch (e) {
        navigate("/UserPageError");
      }
    };

    getSummoner();
  }, [name, navigate]);

  return (
    <StyledStack
      column
      alignItem="center"
      height="100%"
      style={{ padding: "0 0 15px" }}
    >
      <StyledSection
        id="section-communityHeader"
        color="#f5f5f5"
        height="180px"
        style={{
          margin: "0 0 15px",
        }}
      >
        {/* <h1 data-aos="fade-up" data-aos-delay="200"> */}
        <h1 style={{ margin: "0 0 10px" }}>{name}</h1>
        <span style={{ margin: 0, fontSize: "20px" }}>
          소환사님의 정보입니다.
        </span>
      </StyledSection>

      {/* 
      <StyledSection
        height="100px"
        width="100%"
        justifyContent="flex-end"
        style={{ alignItems: "flex-start", maxWidth: "600px" }}
      >
        <h1> {name}</h1>
      </StyledSection> */}

      <StyledCard>
        <CardText>
          {" "}
          TIER: {userData?.tier} {userData?.rank}
        </CardText>
      </StyledCard>

      <StyledCard>
        <CardText>LP: {JSON.stringify(userData?.leaguePoints)}</CardText>
      </StyledCard>

      <StyledCard data-aos="fade-up">
        <CardText>
          전체 전투:{" "}
          {JSON.stringify(userData?.wins && userData?.wins + userData?.losses)}
        </CardText>
      </StyledCard>

      <StyledCard data-aos="fade-up">
        <CardText>승리: {JSON.stringify(userData?.wins)}</CardText>
      </StyledCard>

      <StyledCard data-aos="fade-up">
        <CardText>패배: {JSON.stringify(userData?.losses)}</CardText>
      </StyledCard>

      <StyledCard data-aos="fade-up" id="card-rate">
        <div
          id="circle-rate-percent"
          style={{
            position: "relative",
            width: "113px",
            height: "113px",
            borderRadius: "50%",
            background: "#222",
            display: "flex",
            boxShadow: " inset 0 0 50px #000",
            justifyContent: "center",
            overflow: "visible",
            alignItems: "center",
          }}
        >
          <svg
            style={{
              zIndex: 9999,
              // transform: "rotate(-90deg)",
              width: "100%",
              height: "100%",
            }}
          >
            <circle
              style={{ width: "100%", height: "100%", zIndex: "9999" }}
              id="circle"
              cx="54"
              cy="55"
              fill="none"
              r="54"
              stroke="#222"
              strokeWidth="7"
            />
            <circle
              id="progress__ing"
              cx="54"
              cy="54"
              r="54"
              fill="none"
              stroke="#00ff43"
              strokeWidth="8"
              style={{
                strokeDasharray: CIRCUMFERENCE,
                strokeDashoffset: percent.rate,
                width: "100%",
                height: "100%",
                zIndex: 9999,
                strokeLinecap: "round",
              }}
            />
          </svg>
          <h2
            id="num"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              color: "#777",
              fontWeight: "700",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0",
              zIndex: 9999,
            }}
          >
            {userData?.wins &&
              ((userData?.wins / userData?.losses) * 100).toFixed(1)}
            %
          </h2>
        </div>
        <CardText id="card-rate-text">승률</CardText>
      </StyledCard>
    </StyledStack>
  );
}
// win lose lp tier  승률(win,lose로 계산)
