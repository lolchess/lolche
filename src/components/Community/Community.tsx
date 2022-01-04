import React, { useState, useEffect } from "react";
import { StyledStack, StyledSection } from "../../styles/styles.component";
import { StyledButton } from "../../styles/styles.component";
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
import { async } from "@firebase/util";

interface Post {
  id: string;
  title: string;
  nickname: string;
  time: string;
}

function Community(): JSX.Element {
  const navigate = useNavigate();
  const [list, setList] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const limitNumber = 5;
  useEffect(() => {
    const fetchData = async () => {
      const communityRef = collection(dbService, "community");

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
  }, []);

  const showNext = (item: Post) => {
    //use this to show hide buttons if there is no records
    const fetchNextData = async () => {
      const communityRef = collection(dbService, "community");
      console.log(item);

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
        setList(items);
        setPage(page + 1); //in case you like to show current page number you can use this
      });
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

      <StyledSection id="section-communityList" height="800px">
        <StyledStack
          column
          alignItem="center"
          width="90%"
          style={{ maxWidth: "1200px" }}
        >
          {list.map((post) => {
            return (
              <div>
                {post.title}
                {post.nickname}
              </div>
            );
          })}
          {list.length < limitNumber ? (
            <div></div>
          ) : (
            <button onClick={() => showNext(list[limitNumber - 1])}>
              다음페이지
            </button>
          )}

          <StyledButton onClick={() => navigate("/Community/NewPostEditor")}>
            글 작성
          </StyledButton>
        </StyledStack>
      </StyledSection>
    </div>
  );
}

export default Community;
