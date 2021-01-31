export const createMessageTable = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  message VARCHAR NOT NULL
  )
  `;

export const insertMessages = `
INSERT INTO messages(name, message)
VALUES ('chidimo', 'first message'),
      ('orji', 'second message')
`;

export const dropMessagesTable = 'DROP TABLE messages';

export const reflectionTable = `
CREATE TABLE IF NOT EXISTS
reflections(
  id UUID PRIMARY KEY,
  success TEXT NOT NULL,
  low_point TEXT NOT NULL,
  take_away TEXT NOT NULL,
  owner_id UUID NOT NULL,
  created_date TIMESTAMP,
  modified_date TIMESTAMP,
  FOREIGN KEY (owner_id) REFERENCES users (id) ON DELETE CASCADE
)`;

export const usersTable = `
CREATE TABLE IF NOT EXISTS
      users(
        id UUID PRIMARY KEY,
        email VARCHAR(128) UNIQUE NOT NULL,
        password VARCHAR(128) NOT NULL,
        created_date TIMESTAMP,
        modified_date TIMESTAMP
      )`;
