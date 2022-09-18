import client from '../db/database.js';
import queries from '../routes/queries.js';
import dotenv from 'dotenv';
dotenv.config();

export const getAuthToken = async (req, res) => {
    try{
        // need to figure out jwt codes and stuff
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
    try{
        const {username, password, is_team_driver} = req.body;
        client.query(queries.getUserAuth, [username], (error, results) => {
            if (error) {
                res.send("There is an error/ get user postAuth");
                throw error;
            }
            res.status(200).json(results.rows);
        }
    )}
    catch(error){
        res.status(400).send(error);
    }
};

export const putAuth = (req, res) => {
    try{
        const token = req.params.token;
        // var decodedToken = jwtDecode(token);
        // var userToken = Object.values(decodedToken);
        var userInfo;
        client.query(queries.getUserWithToken, [token], (error, results) => {
            if (error) {
                res.send("There is an error/ get user putAuth");
                throw error;
            }
            res.status(200).json(results.rows);
        });
    }
    catch(error){
        res.status(400).send(error);
    }
};