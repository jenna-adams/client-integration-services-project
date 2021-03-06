import express from 'express';

import {getUsers, createUser, getUser, deleteUser, putUser} from '../controllers/usersControllers.js';


const router = express.Router();    //initalize router

// all routes in here are starting with /users
router.get('/', getUsers);


// overrides old info or creates new info
router.post('/', createUser);


router.get('/:id', getUser);


router.delete('/:id', deleteUser);


// patch updates a user
router.put('/:id', putUser);



//router.get('/key', getAuthentication);


export default router;