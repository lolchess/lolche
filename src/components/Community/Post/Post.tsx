import { useNavigate, useLocation } from "react-router";
import React, { useState, useEffect } from "react";
import {
  StyledSection,
  StyledStack,
  StyledDivider,
  StyledSpan,
  StyledButton,
} from "../../../styles/styles.component";
import { dbService } from "../../../myFirebase";
import { doc, getDoc } from "firebase/firestore";

interface IPost {
  id: string;
  title: string;
  nickname: string;
  time: string;
  value: string;
}

function Post(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const [item, setItem] = useState<IPost>();

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(
        dbService,
        "community",
        location.pathname.substring(11, 31)
      );
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data: IPost = {
          id: docSnap.id,
          title: docSnap.data().title,
          nickname: docSnap.data().userNickname,
          time: docSnap.data().time,
          value: docSnap.data().value,
        };
        setItem(data);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    fetchData();
  }, [location.pathname]); // const { value } = location.state as locationState;

  return (
    <>
      <StyledSection
        id="section-communityHeader"
        color="#f5f5f5"
        height="300px"
        style={{
          background:
            "linear-gradient(0deg, rgba(201,201,201,1) 0%, rgba(219,219,219,1) 100%)",
        }}
      ></StyledSection>

      <StyledSection justifyContent="flex-start" padding="30px">
        <StyledStack
          column
          alignItem="flex-start"
          width="80%"
          style={{ maxWidth: "1200px" }}
        >
          <StyledStack justifyContent="flex-start">
            <StyledButton
              style={{ marginRight: "10px" }}
              onClick={() => navigate("/community")}
            >
              목록
            </StyledButton>
            <StyledButton
              onClick={() => alert("현재는 글삭제 기능을 지원하지 않습니다.")}
            >
              글 삭제
            </StyledButton>
          </StyledStack>
          <StyledDivider style={{ margin: "10px" }} />

          <StyledSpan color="black">타이틀 : {item?.title}</StyledSpan>
          <StyledDivider style={{ margin: "10px" }} />
          <StyledSpan color="black">닉네임 : {item?.nickname}</StyledSpan>
          <StyledDivider style={{ margin: "10px", marginBottom: "30px" }} />

          {item && (
            <StyledSpan
              color="black"
              style={{ minHeight: "800px" }}
              dangerouslySetInnerHTML={{ __html: item.value }}
            ></StyledSpan>
          )}
        </StyledStack>
      </StyledSection>
    </>
  );
}

export default Post;
