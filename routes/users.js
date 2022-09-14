import express from 'express';

import {getUsers, getUser, deleteUser, putUser} from '../controllers/usersControllers.js';


const router = express.Router();    //initalize router

// all routes in here are starting with /users
router.get('/', getUsers);


// creates new info
//router.post('/', createUser);


router.get('/:username', getUser);


router.delete('/:username', deleteUser);


// patch updates a user
router.put('/:id', putUser);



//router.get('/key', getAuthentication);


export default router;