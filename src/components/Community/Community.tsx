import React, { useState, useEffect } from "react";
import {
  StyledStack,
  StyledSection,
  StyledLi,
  StyledButton,
  StyledDivider,
} from "../../styles/styles.component";
import { useNavigate } from "react-router";
import { dbService } from "../../myFirebase";
import {
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
} from "firebase/firestore";

interface Post {
  id: string;
  title: string;
  nickname: string;
  time: string;
  value: string;
}

const LIMIT_NUMBER = 10;

function Community(): JSX.Element {
  const navigate = useNavigate();
  const [Posts, setPosts] = useState<Post[]>([]);
  const [pagenum, setPagenum] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(dbService, "community"),
        orderBy("time", "desc"),
        limit(LIMIT_NUMBER)
      );

      const querySnapshot = await getDocs(q);
      const items: Post[] = [];

      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          title: doc.data().title,
          nickname: doc.data().userNickname,
          time: doc.data().time,
          value: doc.data().value,
        });
      });

      setPosts(items);
    };

    fetchData();
  }, []);

  const showPrev = (item: Post) => {
    const fetchPrevData = async () => {
      const q = query(
        collection(dbService, "community"),
        orderBy("time"),
        limit(LIMIT_NUMBER),
        startAfter(item.time)
      );

      const querySnapshot = await getDocs(q);
      const items: Post[] = [];

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          items.push({
            id: doc.id,
            title: doc.data().title,
            nickname: doc.data().userNickname,
            time: doc.data().time,
            value: doc.data().value,
          });
        });
        // items 정렬
        items.sort(function (a, b) {
          return +b.time - +a.time;
        });
        setPosts(items);
        setPagenum(pagenum - 1);
      }
    };

    fetchPrevData();
  };

  const showNext = (item: Post) => {
    const fetchNextData = async () => {
      const q = query(
        collection(dbService, "community"),
        orderBy("time", "desc"),
        limit(LIMIT_NUMBER),
        startAfter(item.time)
      );

      const querySnapshot = await getDocs(q);
      const items: Post[] = [];

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          items.push({
            id: doc.id,
            title: doc.data().title,
            nickname: doc.data().userNickname,
            time: doc.data().time,
            value: doc.data().value,
          });
        });
        setPosts(items);
        setPagenum(pagenum + 1);
      } else alert("마지막 페이지입니다.");
    };

    fetchNextData();
  };

  return (
    <>
      <StyledSection
        id="section-communityHeader"
        color="#f5f5f5"
        height="180px"
      >
        <h1>의견을 나누세요.</h1>
      </StyledSection>

      <StyledSection
        id="section-communityList"
        justifyContent="flex-start"
        // data-aos="flip-left"
      >
        <StyledStack
          column
          alignItem="center"
          width="90%"
          style={{ maxWidth: "1200px" }}
        >
          <StyledButton
            onClick={() => navigate("/community/NewPostEditor")}
            style={{ margin: "20px" }}
          >
            글 작성
          </StyledButton>

          <StyledSection
            id="section-postList"
            // height="100%"
            justifyContent="start"
            height="550px"
            style={
              {
                // border: "1px solid #F0F0F0",
                // borderRadius: "20px",
                // backgroundColor: "red",
              }
            }
          >
            <StyledStack>
              <StyledLi color={"black"} style={{ cursor: "auto" }}>
                <b>글 제목</b>
              </StyledLi>
              <StyledLi color={"black"} style={{ cursor: "auto" }}>
                <b>닉네임</b>
              </StyledLi>
            </StyledStack>

            <StyledDivider />

            {Posts.map((post) => {
              return (
                <StyledStack key={post.id} column alignItem="center">
                  <StyledStack>
                    <StyledLi
                      onClick={() => navigate(`/community/${post.id}`)}
                      color={"black"}
                    >
                      {post.title}
                    </StyledLi>
                    <StyledLi color={"black"}>{post.nickname}</StyledLi>
                  </StyledStack>
                  <StyledDivider />
                </StyledStack>
              );
            })}
          </StyledSection>

          <StyledStack justifyContent="center">
            {pagenum <= 1 ? (
              <div></div>
            ) : (
              <StyledButton
                style={{ margin: "20px" }}
                onClick={() => showPrev(Posts[0])}
              >
                이전 페이지
              </StyledButton>
            )}
            {/* NOTE pagenum을 미리 구해서 현재 페이지가 마지막페이지면 다음페이지 버튼 삭제해야함... */}
            <span style={{ fontSize: "16px" }}>{pagenum}</span>
            {Posts.length < LIMIT_NUMBER ? (
              <div></div>
            ) : (
              <StyledButton
                style={{ margin: "20px" }}
                onClick={() => showNext(Posts[LIMIT_NUMBER - 1])}
              >
                다음 페이지
              </StyledButton>
            )}
          </StyledStack>
        </StyledStack>
      </StyledSection>
    </>
  );
}

export default Community;
