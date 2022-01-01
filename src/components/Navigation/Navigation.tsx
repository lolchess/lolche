import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Navigation(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/community")}>커뮤니티</button>
    </div>
  );
}

export default Navigation;
