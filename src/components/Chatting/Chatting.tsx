import useInput from "../../hooks/useInput";

export default function Chatting(): JSX.Element {
  const [input, setInput, onChangeInput] = useInput("");

  const onClickBtn = () => {
    console.log(input);
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={onChangeInput} />
      <button onClick={onClickBtn}>채팅</button>
    </div>
  );
}
