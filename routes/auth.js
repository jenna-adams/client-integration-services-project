import express from "express";
import jwt from "jsonwebtoken";
import client from '../db/database.js';
import queries from '../routes/queries.js';


// set router
const router = express.Router();

const EnumType = {
    apiToken : 1,
    fullName : 2,
    dashboard : 3,
    menu : 4,
    settingForm : 5,
    theme : 6,
    username : 7
 }

router
    .get('/:token', async (req, res) => {
        if(req.headers["eleos-platform-key"] != process.env.ELEOS_PLATFORM_KEY) {
            res.status(401).send("401: Invalid Eleos Platform Key!!");
          }
        else {
            try{
                const token = req.params.token
                var decodedToken = jwtDecode(token)
                var userToken = Object.values(decodedToken)
                var userInfo
                client.query(queries.getUserWithToken, [userToken], (error, results) => {
                    if (error) {
                        res.send("There is an error/ get user auth");
                        throw error;
                    }
                    userInfo = json(results.rows);
                })

                var encodedToken = jwt.encode({fullname : user[fullName], username : userInfo[username]}, "code", 'HS256')

                const response = {
                    api_token : encodedToken,
                    full_name : userInfo[fullName],
                    menu_code : userInfo[menu],
                    dashboard_code : userInfo[dashboard],
                    custom_settings_form_code : userInfo[settingForm],
                    theme : userInfo[theme],
                    username : user[username] 
                }
                res.status(200).send('hi');

            }catch(err){
                res.status(400).send(err);
            }
        }

    });

    export default router;