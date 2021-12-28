// connect to the database

// https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database
/*const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
*/

// configure the application and create routes

// call the packages needed

import express from 'express';   // call express or us import express from 'express' if type (in package) is set to 'module'
const app = express();             // define app using express
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';


const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());  // will be using json data in the app

app.use('/users', usersRoutes);

// Routes for API
// ======================================================================

app.get('/', (req, res) => res.send('Hello from Homepage.'));

// START THE SERVER
// ======================================================================

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));

