import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { Sport } from '../../sports/entities';
import { Tournament } from '../../tournaments/entities';
import { seeder } from './database.seeder';
import { RuleSetSeed } from './seeds/ruleSet.entity.seed';
import { SportSeed } from './seeds/sport.entity.seed';
import { TournamentSeed } from './seeds/tournament.entity.seed';

@Injectable()
export class DatabaseSeedingService implements OnApplicationBootstrap {
  constructor(private readonly dataSource: DataSource) {}

  private readonly logger = new Logger();

  async onApplicationBootstrap() {
    if (!this.dataSource.isInitialized) {
      await this.dataSource.initialize();
    }

    // 1. Seed Sports
    await seeder(this.dataSource, SportSeed);

    // 2. Resolve sport for TournamentSeed (needed before creating RuleSetSeed)
    for (const tournament of TournamentSeed.data) {
      if (tournament.sport?.name) {
        const sport = await this.dataSource
          .getRepository(Sport)
          .findOneBy({ name: tournament.sport.name });
        if (!sport)
          throw new Error(`Sport "${tournament.sport.name}" not found`);
        tournament.sport = sport;
      }
    }

    // 3. Seed Tournaments (after resolving sport, but before RuleSet needs them)
    await seeder(this.dataSource, TournamentSeed);

    // 4. Resolve sport + tournament for RuleSetSeed
    for (const rule of RuleSetSeed.data) {
      if (rule.sport?.name) {
        const sport = await this.dataSource
          .getRepository(Sport)
          .findOneBy({ name: rule.sport.name });
        if (!sport) throw new Error(`Sport "${rule.sport.name}" not found`);
        rule.sport = sport;
      }
      if (rule.tournament?.name) {
        const tournament = await this.dataSource
          .getRepository(Tournament)
          .findOneBy({ name: rule.tournament.name });
        if (!tournament)
          throw new Error(`Tournament "${rule.tournament.name}" not found`);
        rule.tournament = tournament;
      }
    }

    // 5. Seed RuleSets (FKs to sport + tournament are now resolved)
    await seeder(this.dataSource, RuleSetSeed);
  }
}
