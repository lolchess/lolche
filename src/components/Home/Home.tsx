import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  top: 50px;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  width: 100%;
  height: 500px;
`;

function Home(): JSX.Element {
  return (
    <div>
      <StyledSection style={{ backgroundColor: "#f5f5f5" }}>
        <span>자신을 챙기는 것도 잊지 마세요.</span>
      </StyledSection>
      <StyledSection>
        <span>강함을 증명하세요.</span>
      </StyledSection>
    </div>
  );
}

export default Home;
