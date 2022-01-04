import axios from "axios";
import { SummonerDTO } from "../models/SummonerDTO";
import { apiKey, endpoint } from "./endpoint";

const summonerByNameEndpoint: string = "tft/summoner/v1/summoners/by-name/";
const summonerIdEndpoint: string = "tft/league/v1/entries/by-summoner/";

export const getSummonerByName = async (name: string) => {
  try {
    const summonerRes = await axios.get(
      endpoint + summonerByNameEndpoint + name + apiKey
    );

    const summoner: SummonerDTO = summonerRes.data;

    const leagueRes = await axios.get(
      endpoint + summonerIdEndpoint + summoner.id + apiKey
    );

    return leagueRes.data;
  } catch (e) {
    console.log("error! 💢", e);
  }

  // return res.data;
};

export {};
