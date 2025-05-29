import {
  Check,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Sport } from '../../sports/entities/';
import { Tournament } from '../../tournaments/entities';

@Check(
  `"isFromTournament" = false OR ("isFromTournament" = true AND "tournamentId" IS NOT NULL)`,
)
@Entity({ name: 'match_ruleset' })
export class MatchRuleSet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'int' })
  playersOnFieldPerTeam: number;

  @Column({ default: true })
  isTeamBased: boolean;

  @Column({ type: 'int' })
  periodCount: number;

  @Column({ type: 'int' })
  periodDuration: number;

  @Column({ default: false })
  hasOvertime: boolean;

  @Column({ type: 'int', nullable: true })
  overtimeCount?: number;

  @Column({ type: 'int', nullable: true })
  overtimeDuration?: number;

  @Column({ default: false })
  hasTieBreaker: boolean;

  @Column({ default: false })
  isFromTournament: boolean;

  @ManyToOne(() => Tournament, tournament => tournament.ruleset, {
    nullable: true,
  })
  @JoinColumn({ name: 'tournamentId' })
  tournament?: Tournament;

  @ManyToOne(() => Sport, { nullable: false })
  @JoinColumn({ name: 'sportId' })
  sport: Sport;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
