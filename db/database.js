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
  connectionString: "postgres://integration_db_o7gq_user:QHluCBFd49yHzULXAQ7FPaPWz2P5t2wO@dpg-ccqc8kpgp3jkaoub4sb0-a.ohio-postgres.render.com/integration_db_o7gq",
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

export default client;