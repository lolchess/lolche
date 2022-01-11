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
}

function Community(): JSX.Element {
  const navigate = useNavigate();
  const [list, setList] = useState<Post[]>([]);
  const limitNumber = 10;
  const communityRef = collection(dbService, "community");

  useEffect(() => {
    const fetchData = async () => {
      const q = query(communityRef, orderBy("time"), limit(limitNumber));
      const querySnapshot = await getDocs(q);
      const items: Post[] = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          title: doc.data().title,
          nickname: doc.data().userNickname,
          time: doc.data().time,
        });
      });
      setList(items);
    };
    fetchData();
    // }, []);
  }); // NOTE: 에러때문에 일단 이렇게 처리

  const showNext = (item: Post) => {
    const fetchNextData = async () => {
      const q = query(
        communityRef,
        orderBy("time"),
        limit(limitNumber),
        startAfter(item.time)
      );
      const querySnapshot = await getDocs(q);
      const items: Post[] = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          title: doc.data().title,
          nickname: doc.data().userNickname,
          time: doc.data().time,
        });
      });
      setList(items);
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

      <StyledSection id="section-communityList" height="700px">
        <StyledButton onClick={() => navigate("/community/NewPostEditor")}>
          글 작성
        </StyledButton>
        <StyledStack
          column
          alignItem="center"
          width="90%"
          style={{ maxWidth: "1200px" }}
        >
          <StyledSection id="section-postList" height="500px">
            <StyledStack>
              <StyledLi color={"black"}>글 제목 </StyledLi>
              <StyledLi color={"black"}>닉네임 </StyledLi>
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

          {list.length < limitNumber ? (
            <div></div>
          ) : (
            <StyledButton
              style={{ margin: "20px" }}
              onClick={() => showNext(list[limitNumber - 1])}
            >
              다음페이지
            </StyledButton>
          )}
        </StyledStack>
      </StyledSection>
    </div>
  );
}

export default Community;
