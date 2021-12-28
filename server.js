// connect to the database

// https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database
import pg from 'pg';
import dotenv from 'dotenv';
const {Pool} = pg;
dotenv.config();
const databaseConfig = {connectionString: process.env.DATABASE_URL};
const pool = new Pool(databaseConfig);

export default pool;


// configure the application and create routes

// call the packages needed

import express from 'express';   // call express or us import express from 'express' if type (in package) is set to 'module'
const app = express();             // define app using express
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import dbRoutes from './routes/database.js';


const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());  // will be using json data in the app

app.use('/users', usersRoutes);
app.use('/db', dbRoutes);

// Routes for API
// ======================================================================

app.get('/', (req, res) => res.send('Hello from Homepage.'));


// START THE SERVER
// ======================================================================

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));

