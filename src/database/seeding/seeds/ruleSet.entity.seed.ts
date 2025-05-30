import type { DeepPartial } from 'typeorm';

import { RuleSet } from '../../../rulesets/entities/ruleSet.entity';
import type { Sport } from '../../../sports/entities/sport.entity';
import type { Tournament } from '../../../tournaments/entities';
import type { SeedData } from '../database.seeder';

export const RuleSetSeed: SeedData<RuleSet> = {
  entity: RuleSet,
  name: 'RuleSet',
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
    {
      name: 'Futbol 8',
      playersOnFieldPerTeam: 8,
      isTeamBased: true,
      periodCount: 2,
      periodDuration: 10,
      hasOvertime: false,
      hasTieBreaker: false,
      isFromTournament: false,
      sport: { name: 'Soccer' } as DeepPartial<Sport>,
    },
  ],
};
