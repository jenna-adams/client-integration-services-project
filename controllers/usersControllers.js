import { v4 as uuidv4 } from 'uuid';
import client from '../db/database.js';
import queries from '../routes/queries.js';


// get all users
export const getUsers = (req, res) => {
    client.query(queries.getUsers, (error, results) => {
        if (error) {
            res.send("There is an error/ users");
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

// make a new user
export const createUser = (req, res) => {
    const { fullName, api_token, menu_code, dashboard_code, custom_settings_form_code, theme, username } = req.body;
    //check if id exists
    client.query(queries.checkUserId, [username], (error, results) => {
        if (results.rows.length) {
            res.send("id already exists.");
        }
        else{
            //add user to db
            client.query(queries.addUserToDb, [fullName, api_token, menu_code, dashboard_code, custom_settings_form_code, theme, username], (error, results) => {
                if (error) {
                    res.send("There is an error/ create user");
                    throw error;
                }
                res.status(201).send(`Created User ${username}`);
            })
        }
    });
};


// get a specific user based on username
export const getUser = (req, res) => {
    const username = req.params.username;
    client.query(queries.getUser, [username], (error, results) => {
        if (error) {
            res.send(error);
            throw error;
        }
        //console.log ( username )
        res.status(200).json(results.rows);
    })
};

// delete user per username
export const deleteUser = (req, res) => {
    const username = req.params.username;
    // does the student no exist?
    client.query(queries.checkUserUsername, [username], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist.");
        }

        client.query(queries.removeUser, [username], (error, results) => {
            if (error) {
                res.send("There is an error/ delete user");
                throw error;
            }
            res.status(200).send("User removed, well done!");
        })
    });
};


// edit a user
export const putUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { firstName } = req.body;

    client.query(queries.checkUserId, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exsit.");
        }

        client.query(queries.updateUser, [firstName, id], (error, results) =>{
            if (error) {
                res.send("There is an error/ put user");
                throw error;
            }
            res.status(200).send(`User with the id ${id} has been updated`);
        });
    });

    //const user = users.find((user) => user.id === id);
/*
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
*/
};



//export const getAuthentication = (req, res) => {
//    const { key } = req.params;

//};