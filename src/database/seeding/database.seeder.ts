import { Logger } from '@nestjs/common';
import type {
  DataSource,
  DeepPartial,
  EntityTarget,
  ObjectLiteral,
  Repository,
} from 'typeorm';

export interface SeedData<T extends ObjectLiteral> {
  entity: EntityTarget<T>;
  name?: string;
  data: DeepPartial<T>[];
}

export async function seeder<T extends ObjectLiteral>(
  dataSource: DataSource,
  seed: SeedData<T>,
): Promise<void> {
  const { entity, name, data } = seed;
  const logger = new Logger(`Seed:${name}`);
  const repo: Repository<T> = dataSource.getRepository(entity);

  if (!data || data.length === 0) {
    logger.warn(`⚠️ No data found for ${name ?? 'entity'}. Skipping.`);
    return;
  }

  const count = await repo.count();
  if (count > 0) {
    logger.log(`ℹ️ ${name ?? 'Entity'} already has data. Skipping.`);
    return;
  }

  try {
    await repo.save(data);
    logger.log(`✅ Seeded ${data.length} ${name ?? 'records'} successfully.`);
  } catch (err: unknown) {
    if (err instanceof Error) {
      logger.error(`❌ Failed to seed ${name ?? 'entity'}`, err.stack);
    } else {
      logger.error(`❌ Failed to seed ${name ?? 'entity'}`, err);
    }
  }
}
