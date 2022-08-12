import { v4 as uuidv4 } from 'uuid';
import client from '../db/database.js';
import queries from '../routes/queries.js';

//let key = "DaMubrFe55czTp8zsORTdZU2LtwXMURs9EVI3i4x3s8";

export const getUsers = (req, res) => {
    client.query(queries.getUsers, (error, results) => {
        if (error) {
            res.send("There is an error/ users");
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

export const createUser = (req, res) => {
    const { id, firstName, lastName, age } = req.body;
    //check if id exists
    client.query(queries.checkUserId, [id], (error, results) => {
        if (results.rows.length) {
            res.send("id already exists.");
        }
        else{
            //add user to db
            client.query(queries.addUserToDb, [id, firstName, lastName, age], (error, results) => {
                if (error) {
                    res.send("There is an error/ create user");
                    throw error;
                }
                res.status(201).send(`Created User ${firstName}`);
            })
        }
    });
};

export const getUser = (req, res) => {
    const id = parseInt(req.params.id);
    client.query(queries.getUser, [id], (error, results) => {
        if (error) {
            res.send("There is an error/ get user");
            throw error;
        }
        res.status(200).json(results.rows);
    })
};

export const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    // does the student no exist?
    client.query(queries.checkUserId, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist.");
        }

        client.query(queries.removeUser, [id], (error, results) => {
            if (error) {
                res.send("There is an error/ delete user");
                throw error;
            }
            res.status(200).send("User removed, well done!");
        })
    });
};

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