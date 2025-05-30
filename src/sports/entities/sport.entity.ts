import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Event } from '../../events/entities/event.entity';
import { Match } from '../../matches/entities';
import { RuleSet } from '../../rulesets/entities/ruleSet.entity';
import { Tournament } from '../../tournaments/entities/tournament.entity';

@Entity({ name: 'sport' })
export class Sport {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ type: 'jsonb', nullable: true })
  nameISO?: Record<string, string>;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Match, match => match.sport, { cascade: true })
  matches: Match[];

  @OneToMany(() => Event, event => event.sport, { cascade: true })
  events: Event[];

  @OneToMany(() => RuleSet, ruleSet => ruleSet.sport, {
    cascade: true,
  })
  ruleSets: RuleSet[];

  @OneToMany(() => Tournament, tournament => tournament.sport, {
    cascade: true,
  })
  tournaments: Tournament[];
}
