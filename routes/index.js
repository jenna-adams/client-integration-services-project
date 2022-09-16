import express from "express";
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';

const router = express.Router();

router
    .use('/user', userRoutes)
    .use('/authenticate', authRoutes);

export default router;