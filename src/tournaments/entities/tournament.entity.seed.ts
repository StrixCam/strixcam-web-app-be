import type { DeepPartial } from 'typeorm';

import type { SeedData } from '../../database/database.seeder';
import type { Sport } from '../../sports/entities';
import { Tournament } from './tournament.entity';

export const TournamentSeed: SeedData<Tournament> = {
  entity: Tournament,
  name: 'Tournament',
  data: [
    {
      name: 'Torneo Ex Alumnos MTN 2025',
      description: 'Torneo organizado por los ex alumnos de la escuela uemtn',
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
