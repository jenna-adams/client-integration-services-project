import { v4 as uuidv4 } from 'uuid';
import pool from '../db/database.js';
import queries from '../routes/queries.js';

//let key = "DaMubrFe55czTp8zsORTdZU2LtwXMURs9EVI3i4x3s8";

export const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) {
            res.send("There is an error");
        }
            throw error;
        res.status(200).json(results.rows);
    });
};

export const createUser = (req, res) => {
    const { id, firstname, lastname, age } = req.body;
    //check if id exists
    pool.query(queries.checkUserId, [id], (error, results) => {
        if (results.rows.length) {
            res.send("id already exists.");
        }
        //add user to db
        pool.query(queries.addUserToDb, [id, firstname, lastname, age], (error, results) => {
            if (error) throw error;
            res.status(201).send("user created, well done!");
        })
    });
};

export const getUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUser, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

export const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    // does the student no exist?
    pool.query(queries.checkUserId, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist.");
        }

        pool.query(queries.removeUser, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("User removed, well done!");
        })
    });
};

export const putUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { firstName } = req.body;

    pool.query(queries.checkUserId, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exsit.");
        }

        pool.query(queries.updateUser, [firstName, id], (error, results) =>{
            if (error) throw error;
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