import { useEffect, useState } from "react";
import { getLeagueByChallenger } from "../../apis/getLeagueByChallenger";
import { LeagueItemDTO } from "../../models/LeagueItemDTO";
import { LeagueListDTO } from "../../models/LeagueListDTO";

function RankTable(): JSX.Element {
  const [list, setList] = useState<null | LeagueItemDTO[]>(null);

  useEffect(() => {
    const getRank = async () => {
      const challenger: LeagueListDTO = await getLeagueByChallenger();
      setList(
        challenger.entries.sort((a, b) => b.leaguePoints - a.leaguePoints)
      );
    };

    getRank();
  }, []);

  return (
    <div>
      {list &&
        list.map((val) => {
          return (
            <div key={val.summonerId}>
              소환사명: {val.summonerName} LP: {val.leaguePoints}
            </div>
          );
        })}
    </div>
  );
}

export default RankTable;
