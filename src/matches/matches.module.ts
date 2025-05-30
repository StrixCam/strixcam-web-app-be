import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MatchEntities } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(MatchEntities)],
  exports: [TypeOrmModule],
})
export class MatchModule {}
