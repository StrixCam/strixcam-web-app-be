import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { databaseProvidersPostgres } from './database.providers';
import { DatabaseSeedingService } from './seeding/database.seeding.service';
@Module({
  imports: [TypeOrmModule.forRoot(databaseProvidersPostgres)],
  providers: [DatabaseSeedingService],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
