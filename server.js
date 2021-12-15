// configure the application and create routes

// call the packages needed

var express     =require('express');    // call express
var app         =require();             // define app using express
var bodyParset  =require('body-parser');
const bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;    // set port

// Routes for API
// ======================================================================

var router = express.Router();          // get an instance of the express Router

// test route to make sure everything is working
router.get('/', function(req, res)
{
    res.json({message: 'Yay!! Welcome to my api!'});
});

// more routes for the api

// RESISTER ROUTES
// all routes will be prefixed with /api
app.use('/jenna-api', router);

// START THE SERVER
// ======================================================================
app.listen(port);
console.log('Magic happens on port ' + port);