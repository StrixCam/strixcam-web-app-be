import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Sport } from '../../sports/entities';
import { EventType } from './event_type.entity';

@Entity({ schema: 'events', name: 'event' })
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => EventType, eventType => eventType.events, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'eventTypeId' })
  eventType: EventType;

  @ManyToOne(() => Sport, sport => sport.matchEvents, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sportId' })
  sport: Sport;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
