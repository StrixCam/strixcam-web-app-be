import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EventEntities } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(EventEntities)],
})
export class EventsModule {}
