import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RuleSetEntities } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature(RuleSetEntities)],
})
export class RuleSetsModule {}
