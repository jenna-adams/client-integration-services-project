import express from "express";
import database from "database";
import jwt from "jsonwebtoken";
import res, { send } from "express/lib/response";
import { user } from "pg/lib/defaults";

// set router
const router = express.Router();

router
    .get('authenticate/:token', async (req, res) => {
        if(req.headers["eleos-platform-key"] != process.env.ELEOS_PLATFORM_KEY) {
            res.status(401).send("401: Invalid Eleos Platform Key!!");
          }
        else {
            try{
                export const getUser = (req, res) => {
                    const username = parseInt(req.params.username);
                    client.query(queries.getUser, [username], (error, results) => {
                        if (error) {
                            res.send("There is an error/ get user");
                            throw error;
                        }
                        res.status(200).json(results.row);
                    })
                };
            }catch(err){
                res.status(400).send(err);
            }
        }

    });