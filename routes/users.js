<<<<<<< HEAD
import express from 'express';

import {getUsers, createUser, getUser, deleteUser, patchUser} from '../controllers/usersControllers.js';


const router = express.Router();    //initalize router

// all routes in here are starting with /users
router.get('/', getUsers);


// overrides old info or creates new info
router.post('/', createUser);


router.get('/:id', getUser);


router.delete('/:id', deleteUser);


// patch updates a user
router.patch('/:id', patchUser);


//router.get('/key', getAuthentication);



=======
import express from 'express';

import {getUsers, createUser, getUser, deleteUser, patchUser} from '../controllers/usersControllers.js';


const router = express.Router();    //initalize router

// all routes in here are starting with /users
router.get('/', getUsers);


// overrides old info or creates new info
router.post('/', createUser);


router.get('/:id', getUser);


router.delete('/:id', deleteUser);


// patch updates a user
router.patch('/:id', patchUser);


//router.get('/key', getAuthentication);



>>>>>>> 26025f6a9f405a310d6115404d8beceb0ee5415f
export default router;