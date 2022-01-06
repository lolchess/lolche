import { LeagueItemDTO } from "./LeagueItemDTO";

export interface LeagueListDTO {
  leagueId: string;
  entries: LeagueItemDTO[];
  tier: string;
  name: string;
  queue: string;
}
