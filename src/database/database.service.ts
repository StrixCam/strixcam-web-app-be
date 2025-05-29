import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { seeder } from './database.seeder';
import { DatabaseEntitySeeds } from './database.seeds';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(private readonly dataSource: DataSource) {}

  async onModuleInit() {
    if (!this.dataSource.isInitialized) {
      await this.dataSource.initialize();
    }

    for (const seed of DatabaseEntitySeeds) {
      await seeder(this.dataSource, seed);
    }
  }
}
