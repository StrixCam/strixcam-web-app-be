import type { DeepPartial } from 'typeorm';

import type { SeedData } from '../../database/database.seeder';
import type { Sport } from '../../sports/entities/sport.entity';
import type { Tournament } from '../../tournaments/entities';
import { MatchRuleSet } from './matchRuleSet.entity';

export const MatchRuleSetSeed: SeedData<MatchRuleSet> = {
  entity: MatchRuleSet,
  name: 'MatchRuleSet',
  data: [
    {
      name: 'Ex Alumnos MTN 2025',
      playersOnFieldPerTeam: 8,
      isTeamBased: true,
      periodCount: 2,
      periodDuration: 25,
      hasOvertime: true,
      overtimeCount: 2,
      overtimeDuration: 10,
      hasTieBreaker: true,
      isFromTournament: true,
      tournament: {
        name: 'Torneo Ex Alumnos MTN 2025',
      } as DeepPartial<Tournament>,
      sport: { name: 'Soccer' } as DeepPartial<Sport>,
    },
  ],
};
