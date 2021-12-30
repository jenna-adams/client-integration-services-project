import pg from 'pg';
import dotenv from 'dotenv';
const {Pool} = pg;
dotenv.config();
const pool = new Pool({
  user: process.env.USER,// || "postgres",
  host: process.env.HOST,// || "localhost",
  database: process.env.DATABASE,// || "postgres",
  password: process.env.PASSWORD,// || "jenna",
  port: process.env.PORT,// || 5432
});

export default pool;
