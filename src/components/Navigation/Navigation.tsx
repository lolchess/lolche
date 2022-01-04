import { useNavigate } from "react-router";
import useInput from "../../hooks/useInput";

function Navigation(): JSX.Element {
  const navigate = useNavigate();
  const [input, setInput, onChangeInput] = useInput("");

  const onClickBtn = () => {
    if (!input.length) return;

    navigate("/UserPage/" + input);
    setInput("");
  };

  return (
    <div>
      <button onClick={() => navigate("/community")}>커뮤니티</button>
      <button onClick={() => navigate("/RankTable")}>순위표</button>
      <button onClick={() => navigate("/Chatting")}>채팅</button>
      <div>
        <input value={input} onChange={onChangeInput} />
        <button onClick={onClickBtn}>찾기</button>
      </div>
    </div>
  );
}

export default Navigation;
