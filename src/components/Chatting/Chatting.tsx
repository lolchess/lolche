import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import { dbService } from "../../myFirebase";

interface message {
  id: string;
  text?: string;
}

export default function Chatting(): JSX.Element {
  const [input, setInput, onChangeInput] = useInput("");

  const [messages, setMessages] = useState<message[]>([]);

  useEffect(() => {
    if (!dbService) return;

    const dbRef = collection(dbService, "messages");
    onSnapshot(dbRef, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setMessages(data);
    });
  }, []);

  const chatMsg = () => {
    addDoc(collection(dbService, "messages"), {
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
