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

import { Match, MatchRuleSet } from '../../matches/entities';
import { Sport } from '../../sports/entities';

@Entity({ name: 'tournament' })
export class Tournament {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => Sport, { nullable: false })
  @JoinColumn({ name: 'sportId' })
  sport: Sport;

  @ManyToOne(() => MatchRuleSet, { nullable: false })
  @JoinColumn({ name: 'rulesetId' })
  ruleset: MatchRuleSet;

  @Column({ type: 'int', nullable: true })
  maxPlayersPerTeam?: number;

  @Column({ default: false })
  overrideMatchRuleset: boolean;

  @Column({ nullable: true })
  hasOvertime?: boolean;

  @Column({ nullable: true })
  hasTieBreaker?: boolean;

  @Column({ nullable: true })
  onlyForKnockouts?: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'date', nullable: true })
  startDate?: Date;

  @Column({ type: 'date', nullable: true })
  endDate?: Date;

  @OneToMany(() => Match, match => match.tournament)
  matches: Match[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
