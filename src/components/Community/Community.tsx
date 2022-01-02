import { StyledStack, StyledSection } from "../../styles/styles.component";

function Community(): JSX.Element {
  return (
    <div>
      <StyledSection
        id="section-communityHeader"
        color="#f5f5f5"
        height="400px"
        style={{
          background:
            "linear-gradient(0deg, rgba(34,193,195,0.5) 0%, rgba(244,220,170,0.5) 100%)",
        }}
      ></StyledSection>
      <StyledSection id="section-communityList" height="800px">
        <StyledStack
          column
          alignItem="center"
          width="90%"
          style={{ maxWidth: "1200px" }}
        >
          <div
            style={{
              height: "50px",
              width: "100%",
              backgroundColor: "blue",
              borderBottom: "solid 1px grey",
            }}
          />
          <div
            style={{
              height: "50px",
              width: "100%",
              backgroundColor: "blue",
              borderBottom: "solid 1px grey",
            }}
          />
        </StyledStack>
      </StyledSection>
    </div>
  );
}

export default Community;
