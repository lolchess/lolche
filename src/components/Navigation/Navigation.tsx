import { useState } from "react";
import { useNavigate } from "react-router";

function Navigation(): JSX.Element {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState<string>("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const onClickBtn = () => {
    // console.log(searchInput);
    if (!searchInput.length) return;

    navigate("/UserPage/" + searchInput);
    setSearchInput("");
  };

  return (
    <div>
      <button onClick={() => navigate("/community")}>커뮤니티</button>
      <button onClick={() => navigate("/RankTable")}>순위표</button>
      <div>
        <input value={searchInput} onChange={onChangeInput} />
        <button onClick={onClickBtn}>찾기</button>
      </div>
    </div>
  );
}

export default Navigation;
