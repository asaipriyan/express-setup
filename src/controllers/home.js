import { testEnvironmentVariable } from '../setting';

export const indexPage = (_req, res) => res.status(200).json({ message: testEnvironmentVariable });
