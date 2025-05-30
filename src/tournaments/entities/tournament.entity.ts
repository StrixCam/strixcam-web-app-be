import {
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
import { RuleSet } from '../../rulesets/entities';
import { Sport } from '../../sports/entities';

@Entity({ name: 'tournament' })
export class Tournament {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Sport, { nullable: false })
  @JoinColumn({ name: 'sportId' })
  sport: Sport;

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Match, match => match.tournament)
  matches: Match[];

  @OneToOne(() => RuleSet, ruleset => ruleset.tournament, { nullable: false })
  ruleset: RuleSet;
}
