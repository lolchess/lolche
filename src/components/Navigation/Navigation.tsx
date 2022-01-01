import { useNavigate } from "react-router";

function Navigation(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/community")}>커뮤니티</button>
      <button onClick={() => navigate("/RankTable")}>순위표</button>
    </div>
  );
}

export default Navigation;
