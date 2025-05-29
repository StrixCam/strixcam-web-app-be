import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Event } from '../../events/entities/event.entity';
import { Match, MatchRuleSet } from '../../matches/entities';

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

  @OneToMany(() => MatchRuleSet, matchRuleSet => matchRuleSet.sport, {
    cascade: true,
  })
  matchRuleSets: MatchRuleSet[];
}
