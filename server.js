// connect to the database

// configure the application and create routes

// call the packages needed

import express from 'express';   // call express or us import express from 'express' if type (in package) is set to 'module'
const app = express();             // define app using express
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import authRoutes from '.routes/auth.js'


const PORT = process.env.PORT || 5432;
app.use(bodyParser.json());  // will be using json data in the app

// middleware
app.use(express.json());

app.use('/users', usersRoutes);

app.use('authenticate', authRoutes);

// Routes for API
// ======================================================================

app.get('/', (req, res) => res.send('Hello from Homepage.'));


// START THE SERVER
// ======================================================================

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));

