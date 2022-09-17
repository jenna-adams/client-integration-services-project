import express from "express";
import authRoutes from './auth.js';
import userRoutes from './users.js';
import loadRoutes from './loads.js';

const router = express.Router();

router
    .use('/users', userRoutes)
    .use('/authenticate', authRoutes)
    .use('/loads', loadRoutes);

export default router;