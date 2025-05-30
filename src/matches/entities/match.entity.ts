import {
  Check,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { RuleSet } from '../../rulesets/entities';
import { Sport } from '../../sports/entities';
import { Tournament } from '../../tournaments/entities';
import { MatchTeam } from './matchTeam.entity';

@Check(`
  ("isTournamentMatch" = true AND "tournamentId" IS NOT NULL AND "rulesetId" IS NULL)
  OR ("isTournamentMatch" = false AND "tournamentId" IS NULL AND "rulesetId" IS NOT NULL)
`)
@Entity({ name: 'match' })
export class Match {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'timestamp' })
  scheduledAt: Date;

  @Column({ default: false })
  isKnockout: boolean;

  @Column({ default: false })
  isTournamentMatch: boolean;

  @ManyToOne(() => Tournament, { nullable: true })
  @JoinColumn({ name: 'tournamentId' })
  tournament?: Tournament;

  @ManyToOne(() => RuleSet, ruleSet => ruleSet.matches)
  @JoinColumn({ name: 'rulesetId' })
  ruleset?: RuleSet;

  @ManyToOne(() => Sport, sport => sport.matches, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sportId' })
  sport: Sport;

  @OneToMany(() => MatchTeam, matchTeam => matchTeam.match)
  matchTeams: MatchTeam[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
