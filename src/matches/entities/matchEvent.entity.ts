import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Match } from './match.entity';

@Entity({ schema: 'matches', name: 'match_event' })
export class MatchEvent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Match, match => match.events, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'match_id' })
  match: Match;

  @Column()
  eventType: string;

  @Column({ type: 'uuid', nullable: true })
  playerId?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ type: 'timestamp' })
  occurredAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
