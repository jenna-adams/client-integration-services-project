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

// Routes for API
// ======================================================================

app.use('/api', routes);

// Make it pretty
// ======================================================================

app.get('/', (req, res) => res.type('html').send(html));


// START THE SERVER
// ======================================================================

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));



const html = `
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style/stylesheet.css">
<title>Jenna's Demo Service
</title>
</head>
<body>
    <h1>Jenna's Demo Service</h1>
    <for action="/api/user" method="POST">
        <label for="fame">Full name:</label>
        <input type="text" id="fname" name="fname"><br>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br>
        <label for="token">Token:</label>
        <input type="text" id="token" name="token"><br>
        <input type="submit" value="Submit">
      </form>

</body>
<footer>
    <a href="https://github.com/jen000/client-integration-services-project" alt = "Link to source code" > </a>
    ©Copyright 2022 by Jenna Adams. All rights reversed.
</footer>
</html>
`