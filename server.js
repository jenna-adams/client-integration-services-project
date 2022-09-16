// connect to the database

// configure the application and create routes

// call the packages needed

import express from 'express';   // call express or us import express from 'express' if type (in package) is set to 'module'
const app = express();             // define app using express
import bodyParser from 'body-parser';
import routes from './routes/index.js';


const PORT = process.env.PORT || 5432;
app.use(bodyParser.json());  // will be using json data in the app

// middleware
app.use(express.json());
const router = express.Router();

router.use((req, res, next) => {
    const headers = req.headers
    const clientToken = headers["authorization"] || headers["x-access-token"];
    const serverToken = process.env.TOKEN;
    const verified = clientToken === serverToken;

    if (!verified) {
        return res.status(400).send("Invalid token.");
    }
    next();
});

app.use('/api', routes);

// Routes for API
// ======================================================================

app.get('/', (req, res) => res.send('Hello from Homepage.'));


// START THE SERVER
// ======================================================================

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));

