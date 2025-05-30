import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TeamEntities } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(TeamEntities)],
  exports: [TypeOrmModule],
})
export class TeamsModule {}
