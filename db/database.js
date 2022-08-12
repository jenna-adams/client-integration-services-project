import pg from 'pg';
import dotenv from 'dotenv';
// const {Pool} = pg;
// dotenv.config();
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "postgres",
//   password: "jenna",
//   port: 8080
// });

// export default pool;


const {Client} = pg;
dotenv.config();
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

export default client;