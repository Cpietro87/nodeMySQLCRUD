import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: procces.env.DB_HOST,
  user: procces.env.DB_USER,
  password: procces.env.DB_PASSWORD,
  port: procces.env.DB_PORT,
  database: procces.env.DB_NAME,
});