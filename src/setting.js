import dotenv from 'dotenv';

dotenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
// Postgres URL
export const connectionString = process.env.CONNECTION_STRING;
