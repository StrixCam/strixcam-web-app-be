import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { databaseProvidersPostgres } from './database.providers';
@Module({
  imports: [TypeOrmModule.forRoot(databaseProvidersPostgres)],
})
export class DatabaseModule {}
