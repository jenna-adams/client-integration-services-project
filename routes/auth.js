import express from "express";
import jwt from "jsonwebtoken";
import client from '../db/database.js';
import queries from '../routes/queries.js';

import {getAuthToken, postAuth, putAuth} from '../controllers/authControllers.js';


// set router
const router = express.Router();


router.get('/:token', getAuthToken);

router.post('/', postAuth);
    
router.put('/', putAuth);

export default router;