import client from '../db/database.js';
import queries from '../routes/queries.js';
import dotenv from 'dotenv';
dotenv.config();

export const getAuthToken = async (req, res) => {
    try{
        const token = req.params.token;
        // var decodedToken = jwtDecode(token);
        // var userToken = Object.values(decodedToken);
        var userInfo;
        client.query(queries.getUserWithToken, [token], (error, results) => {
            if (error) {
                res.send("There is an error/ get user auth");
                throw error;
            }
            res.status(200).json(results.rows);
        });


    }catch(error){
        res.send(error);
    }

};

export const postAuth = (req, res) => {
    // if(req.headers["eleos-platform-key"] != process.env.ELEOS_PLATFORM_KEY) {
    //     res.status(401).send("401: broked Eleos Platform Key");
    //     }
    // else {
        try{
            res.send("postAuth works!! well, it gets past the platform key");
        }
        catch(error){
            res.status(400).send(error);
        }
    // }
}

export const putAuth = (req, res) => {
    // if(req.headers["eleos-platform-key"] != process.env.ELEOS_PLATFORM_KEY) {
    //     res.status(401).send("401: broked Eleos Platform Key");
    //     }
    // else {
        try{
            res.send("putAuth works!! well, it gets past the platform key");
        }
        catch(error){
            res.status(400).send(error);
        }
    // }
}