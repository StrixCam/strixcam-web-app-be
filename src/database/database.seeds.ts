import { MatchRuleSetSeed } from '../matches/entities/matchRuleSet.entity.seed';
import { SportSeed } from '../sports/entities/sport.entity.seed';
import { TournamentSeed } from '../tournaments/entities/tournament.entity.seed';

export const DatabaseEntitySeeds = [
  SportSeed,
  MatchRuleSetSeed,
  TournamentSeed,
];
