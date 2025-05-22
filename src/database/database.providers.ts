import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { envs } from '../config';

export const databaseProvidersPostgres: TypeOrmModuleOptions = {
  type: 'postgres',
  host: envs.DB_PG_HOST,
  port: envs.DB_PG_PORT,
  username: envs.DB_PG_USER,
  password: envs.DB_PG_PASSWORD,
  database: envs.DB_PG_DATABASE,
  synchronize: true,
  logging: true,
  logger: 'advanced-console',
  autoLoadEntities: true,
};
