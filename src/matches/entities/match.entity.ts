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
import { MatchTeam } from './matchTeam.entity';

@Entity({ name: 'match' })
export class Match {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp' })
  scheduledAt: Date;

  @Column({ type: 'uuid' })
  matchId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => MatchTeam, matchTeam => matchTeam.matches, { cascade: true })
  matchTeam: MatchTeam[];

  @ManyToOne(() => Sport, sport => sport.matches, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sportId' })
  sport: Match;
}
