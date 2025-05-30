import type { DeepPartial } from 'typeorm';

import type { Sport } from '../../../sports/entities';
import { Tournament } from '../../../tournaments/entities';
import type { SeedData } from '../database.seeder';

export const TournamentSeed: SeedData<Tournament> = {
  entity: Tournament,
  name: 'Tournament',
  data: [
    {
      name: 'Torneo Ex Alumnos MTN 2025',
      isActive: true,
      startDate: new Date('2025-05-31'),
      endDate: new Date('2028-08-13'),
      maxPlayersPerTeam: 16,
      overrideMatchRuleset: true,
      hasOvertime: false,
      hasTieBreaker: true,
      onlyForKnockouts: true,
      sport: { name: 'Soccer' } as DeepPartial<Sport>,
    },
  ],
};
