import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Team } from '../../teams/entities';
import { Match } from './match.entity';

@Entity({ name: 'match_team' })
export class MatchTeam {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Team, team => team.matchTeams, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'teamId' })
  team: Team;

  @ManyToOne(() => Match, match => match.matchTeam, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'matchId' })
  matches: Match;
}
