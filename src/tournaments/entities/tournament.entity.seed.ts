import type { MatchRuleSet } from '../../matches/entities';
import type { Sport } from '../../sports/entities';
import { Tournament } from './tournament.entity';

export const TournamentSeed = {
  entity: Tournament,
  name: 'Tournament',
  data: [
    {
      name: 'Torneo Ex Alumnos 2025',
      description: 'Torneo organizado por los ex alumnos de la escuela uemtn',
      isActive: true,
      startDate: new Date('2025-05-31'),
      endDate: new Date('2028-08-13'),
      maxPlayersPerTeam: 16,
      overrideMatchRuleset: true,
      hasOvertime: false,
      hasTieBreaker: true,
      onlyForKnockouts: true,
      sport: { id: 'uuid-soccer' } as Partial<Sport>,
      ruleset: { id: 'uuid-ruleset' } as Partial<MatchRuleSet>,
    },
  ] as Partial<Tournament>[],
};
