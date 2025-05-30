import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SportEntities } from './entities';
import { SportsController } from './sports.controller';
import { SportsService } from './sports.service';

@Module({
  imports: [TypeOrmModule.forFeature(SportEntities)],
  controllers: [SportsController],
  providers: [SportsService],
  exports: [TypeOrmModule],
})
export class SportsModule {}
