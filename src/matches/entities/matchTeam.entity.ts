import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Match } from './match.entity';

@Entity({ schema: 'matches', name: 'match_team' })
export class MatchTeam {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  teamId: string;

  @Column({ type: 'enum', enum: ['home', 'away'] })
  role: 'home' | 'away';

  @ManyToOne(() => Match, match => match.teams, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'match_id' })
  match: Match;
}
