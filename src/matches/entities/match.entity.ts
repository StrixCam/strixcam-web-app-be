import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Sport } from '../../sports/entities';
import { Tournament } from '../../tournaments/entities';
import { MatchRuleSet, MatchTeam } from './';

@Entity({ name: 'match' })
export class Match {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  matchId: string;

  @Column({ type: 'timestamp' })
  scheduledAt: Date;

  @Column({ default: false })
  isKnockout: boolean;

  @Column({ default: false })
  isTournamentMatch: boolean;

  @ManyToOne(() => Tournament, { nullable: true })
  @JoinColumn({ name: 'tournamentId' })
  tournament?: Tournament;

  @ManyToOne(() => MatchRuleSet, { nullable: true })
  @JoinColumn({ name: 'rulesetId' })
  ruleset?: MatchRuleSet;

  @ManyToOne(() => Sport, sport => sport.matches, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sportId' })
  sport: Sport;

  @OneToMany(() => MatchTeam, matchTeam => matchTeam.matches, { cascade: true })
  matchTeam: MatchTeam[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
