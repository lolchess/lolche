import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSummonerByName } from "../../apis/getSummonerByName";

export default function UserPage(): JSX.Element {
  const { name } = useParams();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getSummoner = async () => {
      if (!name) return;

      const [data] = await getSummonerByName(name);
      setUserData(data);
    };

    getSummoner();
  }, [name]);

  return (
    <div>
      <div>{name}</div>
      <div>{JSON.stringify(userData)}</div>
    </div>
  );
}
