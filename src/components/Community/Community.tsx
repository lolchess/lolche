import { StyledStack, StyledSection } from "../../styles/styles.component";
import React, { Component } from "react";
import { StyledButton } from "../../styles/styles.component";
import { useNavigate } from "react-router";

function Community(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div>
      <StyledSection
        id="section-communityHeader"
        color="#f5f5f5"
        height="300px"
        style={{
          background:
            "linear-gradient(0deg, rgba(201,201,201,1) 0%, rgba(219,219,219,1) 100%)",
        }}
      ></StyledSection>
      <StyledSection id="section-communityList" height="800px">
        <StyledStack
          column
          alignItem="center"
          width="90%"
          style={{ maxWidth: "1200px" }}
        >
          <StyledButton onClick={() => navigate("/Community/NewPostEditor")}>
            글 작성
          </StyledButton>
        </StyledStack>
      </StyledSection>
    </div>
  );
}

export default Community;
