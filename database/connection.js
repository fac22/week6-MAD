const pg = require('pg');

const DB_URL = process.env.DATABASE_URL;

if (!DB_URL) {
  throw new Error('Please set the DATABASE_URL environment variable');
}

const options = {
  connectionString: DB_URL,
};

const db = new pg.Pool(options);

export default db;
