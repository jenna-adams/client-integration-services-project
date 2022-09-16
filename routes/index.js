import express from "express";

const router = express.Router();

router
    .use('/user', require('./users.js'))
    .use('/authenticate', require('./auth.js'));

export default router;