import express from "express";
import jwt from "jsonwebtoken";
import client from '../db/database.js';
import queries from '../routes/queries.js';

import {getAuthToken, postAuth, putAuth} from '../controllers/authControllers.js';


// set router
const router = express.Router();

const EnumType = {
    apiToken : 1,
    fullName : 2,
    dashboard : 3,
    menu : 4,
    settingForm : 5,
    theme : 6,
    username : 7
 }

router.get('/:token', getAuthToken)

router.post('/', postAuth)
    
router.put('/', putAuth)

export default router;