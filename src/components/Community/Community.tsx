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
  const [list, setList] = useState<Post[]>([]);
  const [pagenum, setPagenum] = useState<number>(1);
  const communityRef = collection(dbService, "community");

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        communityRef,
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

      setList(items);
    };

    fetchData();
  }, [communityRef]);

  const showPrev = (item: Post) => {
    const fetchPrevData = async () => {
      const q = query(
        communityRef,
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

        setList(items);
        setPagenum(pagenum - 1);
      }
    };

    fetchPrevData();
  };

  const showNext = (item: Post) => {
    const fetchNextData = async () => {
      const q = query(
        communityRef,
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
        setList(items);
        setPagenum(pagenum + 1);
      } else alert("마지막 페이지입니다.");
    };

    fetchNextData();
  };
  //   const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  //   console.log("last");
  //   const next = query(
  //     communityRef,
  //     orderBy("time"),
  //     startAfter(lastVisible),
  //     limit(5)
  //   );
  //   const nextSnapshot = await getDocs(next);
  //   nextSnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${JSON.stringify(doc.data().userNickname)}`);
  //   });
  // };

  return (
    <>
      <StyledSection
        id="section-communityHeader"
        color="#f5f5f5"
        height="180px"
        // style={{
        //   background:
        //     "linear-gradient(0deg, rgba(201,201,201,1) 0%, rgba(219,219,219,1) 100%)",
        // }}
      >
        {/* <h1 data-aos="fade-up" data-aos-delay="200"> */}
        <h1>의견을 나누세요.</h1>
      </StyledSection>

      <StyledSection
        id="section-communityList"
        // height="800px"
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

            {list.map((post) => {
              return (
                <StyledStack column alignItem="center">
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
                onClick={() => showPrev(list[0])}
              >
                이전 페이지
              </StyledButton>
            )}
            {/* NOTE pagenum을 미리 구해서 현재 페이지가 마지막페이지면 다음페이지 버튼 삭제해야함... */}
            <span style={{ fontSize: "16px" }}>{pagenum}</span>
            {list.length < LIMIT_NUMBER ? (
              <div></div>
            ) : (
              <StyledButton
                style={{ margin: "20px" }}
                onClick={() => showNext(list[LIMIT_NUMBER - 1])}
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
