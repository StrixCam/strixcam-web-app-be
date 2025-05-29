import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { databaseProvidersPostgres } from './database.providers';
import { DatabaseService } from './database.service';
@Module({
  imports: [TypeOrmModule.forRoot(databaseProvidersPostgres)],
  providers: [DatabaseService],
})
export class DatabaseModule {}
