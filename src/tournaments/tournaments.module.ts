import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TournamentsEntities } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(TournamentsEntities)],
})
export class TournamentsModule {}
