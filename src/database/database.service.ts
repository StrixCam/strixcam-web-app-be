import { Injectable, OnModuleInit } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { MatchRuleSetSeed } from '../matches/entities/matchRuleSet.entity.seed';
import { Sport } from '../sports/entities';
import { SportSeed } from '../sports/entities/sport.entity.seed';
import { Tournament } from '../tournaments/entities';
import { TournamentSeed } from '../tournaments/entities/tournament.entity.seed';
import { seeder } from './database.seeder';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(private readonly dataSource: DataSource) {}

  private readonly logger = new Logger(DatabaseService.name);

  async onModuleInit() {
    if (!this.dataSource.isInitialized) {
      await this.dataSource.initialize();
    }

    // 1. Seed Sports
    this.logger.debug(`Seeding Sports... ${JSON.stringify(SportSeed.data)}`);

    await seeder(this.dataSource, SportSeed);

    this.logger.debug(
      `Seeding MatchRuleSets... ${JSON.stringify(MatchRuleSetSeed.data)}`,
    );
    this.logger.debug(
      `Seeding Tournaments... ${JSON.stringify(TournamentSeed.data)}`,
    );
    // 2. Seed Tournaments
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
    this.logger.debug(
      `Tournaments after processing: ${JSON.stringify(TournamentSeed.data)}`,
    );
    await seeder(this.dataSource, TournamentSeed);

    // 3. Seed MatchRuleSets
    for (const rule of MatchRuleSetSeed.data) {
      if (rule.sport?.name) {
        const sport = await this.dataSource
          .getRepository(Sport)
          .findOneBy({ name: rule.sport.name });
        if (!sport) throw new Error(`Sport "${rule.sport.name}" not found`);
        rule.sport = sport;
      }
    }

    for (const rule of MatchRuleSetSeed.data) {
      if (rule.tournament?.name) {
        const tournament = await this.dataSource
          .getRepository(Tournament)
          .findOneBy({ name: rule.tournament.name });
        if (!tournament)
          throw new Error(`Tournament "${rule.tournament.name}" not found`);
        rule.tournament = tournament;
      }
    }
    this.logger.debug(
      `MatchRuleSets after processing: ${JSON.stringify(MatchRuleSetSeed.data)}`,
    );
    await seeder(this.dataSource, MatchRuleSetSeed);
  }
}
