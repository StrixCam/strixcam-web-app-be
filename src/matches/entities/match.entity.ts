import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { MatchEvent } from './matchEvent.entity';
import { MatchTeam } from './matchTeam.entity';

@Entity({ schema: 'matches', name: 'match' })
export class Match {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'timestamp' })
  scheduledAt: Date;

  @Column({ nullable: true })
  location?: string;

  @Column({ default: false })
  isLive: boolean;

  @Column({ default: false })
  isFinished: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => MatchTeam, mt => mt.match)
  teams: MatchTeam[];

  @OneToMany(() => MatchEvent, event => event.match)
  events: MatchEvent[];
}
