import * as joi from 'joi';

interface EnvVars {
  DB_PG_USER: string;
  DB_PG_PASSWORD: string;
  DB_PG_HOST: string;
  DB_PG_PORT: number;
  DB_PG_DATABASE: string;
}

const envsSchema = joi
  .object({
    DB_PG_USER: joi.string().required(),
    DB_PG_PASSWORD: joi.string().required(),
    DB_PG_HOST: joi.string().default('localhost'),
    DB_PG_PORT: joi.number().default(5432),
    DB_PG_DATABASE: joi.string().default('postgres'),
  })
  .unknown()
  .required();

const validationSchema = envsSchema.validate(process.env);

if (validationSchema.error) {
  throw new Error(`Config validation error: ${validationSchema.error.message}`);
}

const envVars: EnvVars = validationSchema.value as EnvVars;

export const envs = {
  DB_PG_USER: envVars.DB_PG_USER,
  DB_PG_PASSWORD: envVars.DB_PG_PASSWORD,
  DB_PG_HOST: envVars.DB_PG_HOST,
  DB_PG_PORT: envVars.DB_PG_PORT,
  DB_PG_DATABASE: envVars.DB_PG_DATABASE,
};
