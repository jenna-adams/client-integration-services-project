import express from 'express';

import {getLoads} from '../controllers/loadControllers.js';

const router = express.Router();    //initalize router
router.get('/', getLoads);
export default router;