import {
  addDoc,
  collection,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { dbService } from "../../myFirebase";
import makeNickname from "../../utils/makeNickname";

interface message {
  id: string;
  text?: string;
  nickname?: string;
} // TODO: 에러를 피하기 위해서... 제대로(?) 하려면 다시 봐야할 듯

export default function Chatting(): JSX.Element {
  const [input, setInput, onChangeInput] = useInput("");
  const [messages, setMessages] = useState<message[]>([]);
  const [nickname, setNickname] = useState<string>("");
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // NOTE: localStorage 닉네임 얻어오기
  useEffect(() => {
    let storedNickname = localStorage.getItem("loltoGGNickname");

    if (!storedNickname) {
      // storedNickname = new Date().getTime().toString(); // 임시
      storedNickname = makeNickname();
      localStorage.setItem("loltoGGNickname", storedNickname);
    }

    setNickname(storedNickname);
  }, []);

  // NOTE: messages firestore 읽기
  useEffect(() => {
    if (!dbService) return;

    const q = query(
      collection(dbService, "messages"),
      orderBy("createdAt"),
      limitToLast(100) // NOTE: 현재는 100개만 보이도록 설정... 추후 변경 가능
    );

    onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(data);
    });
  }, []);

  useEffect(() => {
    // messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  const sendMessage = () => {
    addDoc(collection(dbService, "messages"), {
      createdAt: serverTimestamp(),
      nickname,
      text: input,
    });
    setInput("");
  };

  const onKeyPress = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      await sendMessage();
    }
  };

  return (
    <Container>
      <StyledUl>
        {messages.map((val) => {
          return (
            <li key={val.id}>
              <b>{val.nickname}</b>: {val.text}
            </li>
          );
        })}
        <div ref={messagesEndRef} />
      </StyledUl>

      <InputContainer>
        <StyledInput
          value={input}
          onChange={onChangeInput}
          onKeyPress={onKeyPress}
        />
        <StyledIcon className="fas fa-paper-plane" onClick={sendMessage} />
        {/* <button onClick={onClickBtn}>채팅</button> */}
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  width: calc(100vw - 20px * 2);
  height: calc(100vh - 44px - 20px * 2);
  border: 1px solid grey;
  padding: 20px;
  margin: 20px;
  background-color: #dcdcdc;

  display: flex;
  flex-direction: column;
`;

const StyledUl = styled.ul`
  height: calc(100% - 45px - 10px);
  list-style: none;
  /* background-color: yellow; */
  overflow-y: scroll;
  margin: 0 0 10px 0;
  padding: 0;
`;

const InputContainer = styled.div`
  height: 45px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-radius: 10px;
`;

const StyledInput = styled.input`
  height: 80%;
  width: calc(95%);
  border: none;

  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled.i`
  font-size: 23px;
  cursor: pointer;
`;
