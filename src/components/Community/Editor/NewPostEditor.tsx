import TestEditorForm from "./PostEditor";
import {
  StyledButton,
  StyledStack,
  StyledSection,
} from "../../../styles/styles.component";
import { useNavigate } from "react-router";

function NewPostEditor(): JSX.Element {
  const navigate = useNavigate();

  return (
    <StyledSection height="900px">
      {/* <StyledStack
        alignItem="center"
        justifyContent="space-between"
        width="90%"
        height="900px"
        style={{ maxWidth: "1200px" }}
      > */}
      <form action=" ">
        <input type="text" placeholder="제목" />
        <input type="text" placeholder="닉네임" />
      </form>

      <TestEditorForm />
      <StyledButton onClick={() => navigate("/Community/NewPostEditor")}>
        글 작성
      </StyledButton>
    </StyledSection>
  );
}

export default NewPostEditor;
