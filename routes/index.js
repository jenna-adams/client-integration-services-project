import express from "express";
import authRoutes from './auth.js';
import userRoutes from './users.js';

const router = express.Router();

router
    .use('/users', userRoutes)
    .use('/authenticate', authRoutes);

export default router;