import axios from "axios";
import { apiKey, endpoint } from "./endpoint";

const summonerByNameEndpoint: string = "tft/summoner/v1/summoners/by-name/";
const summonerIdEndpoint: string = "tft/league/v1/entries/by-summoner/";

// const getSummoner = async (name: string) => {
//   try {
//     const { data: summoner } = await axios.get(
//       endpoint + summonerByNameEndpoint + name + apiKey
//     );

//     return summoner;
//   } catch (e) {
//     const err = e as AxiosError;

//     console.log("서머너 에러", err.response?.data);
//   }
// };

// const getLeague = async (summoner: SummonerDTO) => {
//   try {
//     const { data: league } = await axios.get(
//       endpoint + summonerIdEndpoint + summoner.id + apiKey
//     );

//     return league;
//   } catch (e) {
//     console.log("리그 에러");
//   }
// };

export const getSummonerByName = async (name: string) => {
  try {
    const { data: summoner } = await axios.get(
      endpoint + summonerByNameEndpoint + name + apiKey
    );

    const { data: league } = await axios.get(
      endpoint + summonerIdEndpoint + summoner.id + apiKey
    );

    return league;
  } catch (e) {
    // console.log("error! 💢", e);
  }

  // try {
  //   const summoner = await getSummoner(name);
  //   const league = await getLeague(summoner);

  //   return league;
  // } catch (e) {
  //   console.log("총 에러");
  // }
};

export {};
