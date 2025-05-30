import {
  Check,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Match } from '../../matches/entities';
import { Sport } from '../../sports/entities';
import { Tournament } from '../../tournaments/entities';

@Check(
  `"periodCount" > 0 AND "periodDuration" > 0 AND "playersOnFieldPerTeam" > 0`,
)
@Check(
  `"hasOvertime" = false OR ("overtimeCount" > 0 AND "overtimeDuration" > 0)`,
)
@Check(
  `"hasTieBreaker" = false OR ("overtimeCount" IS NOT NULL AND "overtimeDuration" IS NOT NULL)`,
)
@Check(
  `"isFromTournament" = false OR ("isFromTournament" = true AND "tournamentId" IS NOT NULL)`,
)
@Entity({ name: 'ruleset' })
export class RuleSet {
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

  @OneToOne(() => Tournament, tournament => tournament.ruleset, {
    nullable: true,
  })
  @JoinColumn({ name: 'tournamentId' })
  tournament?: Tournament;

  @ManyToOne(() => Sport, sport => sport.ruleSets, { nullable: false })
  @JoinColumn({ name: 'sportId' })
  sport: Sport;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  @OneToMany(() => Match, match => match.ruleset)
  matches: Match[];
}
