import { Logger } from '@nestjs/common';
import type { DataSource, EntityTarget, ObjectLiteral } from 'typeorm';

export interface SeedData<T extends ObjectLiteral> {
  entity: EntityTarget<T>;
  name?: string;
  data: Partial<T>[];
}

export async function seeder<T extends ObjectLiteral>(
  dataSource: DataSource,
  seed: SeedData<T>,
): Promise<void> {
  const { entity, name, data } = seed;
  const logger = new Logger(`Seed:${name ?? entity.toString()}`);
  const repo = dataSource.getRepository(entity);

  const count = await repo.count();
  if (count > 0) {
    logger.log(`ℹ️ ${name ?? 'Entity'} already has data. Skipping.`);
    return;
  }

  await repo.save(data);
  logger.log(`✅ Seeded ${data.length} ${name ?? 'records'} successfully.`);
}
