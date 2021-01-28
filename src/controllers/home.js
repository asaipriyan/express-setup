/* eslint-disable no-useless-constructor */
/* eslint-disable padded-blocks */
/* eslint-disable no-empty-function */
import { testEnvironmentVariable } from '../setting';

export const indexPage = (_req, res) => res.status(200).json({ message: testEnvironmentVariable });
