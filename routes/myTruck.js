import express from 'express';

import {getLoads} from '../controllers/myTruckControllers.js';

const router = express.Router();    //initalize router
router.get('/', getMyTruck);
export default router;