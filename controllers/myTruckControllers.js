import client from '../db/database.js';
import queries from '../routes/queries.js';

// how are we connecting this to a user on the backend?


export const getMyTruck = async (req, res) => {
    try{
        client.query(queries.getTrucks, (error, results) => {
            if (error) {
                res.send("There is an error/ trucks");
                throw error;
            }
            res.status(200).json(results.rows);
        });
    }
    catch(error){
        res.send(error);
    }
}