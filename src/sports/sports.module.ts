import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SportEntities } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(SportEntities)],
})
export class SportsModule {}
