import {
  addDoc,
  collection,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import { dbService } from "../../myFirebase";

interface message {
  id: string;
  text?: string;
} // TODO: 에러를 피하기 위해서... 제대로(?) 하려면 다시 봐야할 듯

export default function Chatting(): JSX.Element {
  const [input, setInput, onChangeInput] = useInput("");
  const [messages, setMessages] = useState<message[]>([]);

  useEffect(() => {
    if (!dbService) return;

    const q = query(
      collection(dbService, "messages"),
      orderBy("createdAt"),
      limitToLast(10) // NOTE: 현재는 테스트를 위해 10개만 보이도록... 실제로는 채팅 줄 수에 따라 변경하면 될 듯
    );

    onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(data);
    });
  }, []);

  const chatMsg = () => {
    addDoc(collection(dbService, "messages"), {
      createdAt: serverTimestamp(),
      text: input,
    });
  };

  const onClickBtn = () => {
    chatMsg();
    setInput("");
  };

  return (
    <div>
      <ul>
        {messages.map((val) => {
          return <li key={val.id}>{val.text}</li>;
        })}
      </ul>

      <input value={input} onChange={onChangeInput} />
      <button onClick={onClickBtn}>채팅</button>
    </div>
  );
}
