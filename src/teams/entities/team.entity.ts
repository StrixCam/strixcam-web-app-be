import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { MatchTeam } from '../../matches/entities';

@Entity({ name: 'team' })
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ length: 3 })
  shortName: string;

  @Column()
  logoUrl: string;

  @Column()
  primaryColor: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => MatchTeam, matchTeam => matchTeam.team, {
    cascade: true,
  })
  matchTeams: MatchTeam[];
}
