import useInput from "../../hooks/useInput";
import { ref, set } from "firebase/database";
import { realtimeDb } from "../../myFirebase";
export default function Chatting(): JSX.Element {
  const [input, setInput, onChangeInput] = useInput("");

  const chatMsg = () => {
    set(ref(realtimeDb, "chat"), { text: input });
  };

  const onClickBtn = () => {
    chatMsg();
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={onChangeInput} />
      <button onClick={onClickBtn}>채팅</button>
    </div>
  );
}
