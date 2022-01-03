import axios from "axios";
import { apiKey, endpoint } from "./endpoint";

const summonerByNameEndpoint: string = "tft/summoner/v1/summoners/by-name/";

export const getSummonerByName = async () => {
  const res = await axios.get(
    endpoint + summonerByNameEndpoint + "므그아" + apiKey
  );

  console.log(res);
};

export {};
