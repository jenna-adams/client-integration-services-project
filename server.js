// connect to the database

// configure the application and create routes

// call the packages needed

import express from 'express';   // call express or us import express from 'express' if type (in package) is set to 'module'
const app = express();             // define app using express
import bodyParser from 'body-parser';
import routes from './routes/index.js';
// import dotenv from 'dotenv';
// dotenv.config();


const PORT = process.env.PORT || 5432;
app.use(bodyParser.json());  // will be using json data in the app

// middleware
app.use(express.json());
const router = express.Router();

router.use((req, res, next) => {
    const headers = req.headers
    const clientToken = headers["Eleos-Platform-Key"];
    const serverToken = process.env.ELEOS_PLATFORM_KEY;
    const verified = clientToken === serverToken;
    res.send("just checking it made it here");

    if (!verified) {
        return res.status(400).send("Invalid token.");
    }
    next();
});

// Make it pretty
// ======================================================================

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/appUI/index.html'));
    //__dirname : It will resolve to your project folder.
  });

// Routes for API
// ======================================================================

app.use('/api', routes);



// START THE SERVER
// ======================================================================

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));


