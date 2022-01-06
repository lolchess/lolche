import axios from "axios";
import { apiKey, endpoint } from "./endpoint";

const leagueByChallengerEndpoint: string = "tft/league/v1/challenger/";

export const getLeagueByChallenger = async () => {
  const res = await axios.get(endpoint + leagueByChallengerEndpoint + apiKey);

  return res.data;
};

export {};
