import client from '../db/database.js';
import queries from '../routes/queries.js';

export const getLoads = async (req, res) => {
    try{
        client.query(queries.getLoads, (error, results) => {
            if (error) {
                res.send("There is an error/ loads");
                throw error;
            }
            res.status(200).json(results.rows);
        });
    }
    catch(error){

    }
}