import pg from 'pg';
import dotenv from 'dotenv';
const {Pool} = pg;
dotenv.config();
const pool = new Pool({
  user: process.env.USER || "postgres",
  host: process.env.HOST || "localhost",
  database: process.env.DATABASE || "postgres",
  password: process.env.PASSWORD || "jenna",
  port: process.env.PORT || 5432
});

export default pool;

/*
router.get('/', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
});
*/