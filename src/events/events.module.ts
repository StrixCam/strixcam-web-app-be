import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EventEntities } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(EventEntities)],
  exports: [TypeOrmModule],
})
export class EventsModule {}
