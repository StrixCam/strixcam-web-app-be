import type { Sport } from '../../sports/entities/sport.entity';
import { MatchRuleSet } from './matchRuleSet.entity';

export const MatchRuleSetSeed = {
  entity: MatchRuleSet,
  name: 'MatchRuleSet',
  data: [
    {
      name: 'Fútbol 8',
      playersOnFieldPerTeam: 8,
      isTeamBased: true,
      periodCount: 2,
      periodDuration: 45,
      hasOvertime: true,
      overtimeCount: 2,
      overtimeDuration: 15,
      hasTieBreaker: true,
      isFromTournament: true,
      sport: { id: 'uuid-soccer' } as Partial<Sport>,
    },
  ] as Partial<MatchRuleSet>[],
};
