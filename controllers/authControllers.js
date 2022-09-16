import client from '../db/database.js';
import queries from '../routes/queries.js';

export const getAuthToken = async (res, req) => {

    if(req.headers.Authorization != process.env.ELEOS_PLATFORM_KEY) {
        res.send("401: broked Eleos Platform Key");
    }
    else {
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
                userInfo = json(results.rows);
            })

            // var encodedToken = jwt.encode({fullname : user[fullName], username : userInfo[username]}, "code", 'HS256')

            // const response = {
            //     api_token : encodedToken,
            //     full_name : userInfo[fullName],
            //     menu_code : userInfo[menu],
            //     dashboard_code : userInfo[dashboard],
            //     custom_settings_form_code : userInfo[settingForm],
            //     theme : userInfo[theme],
            //     username : user[username] 
            // }
            res.status(200).send(userInfo);

        }catch(error){
            res.status(400).send(error);
        }
    }

};

export const postAuth = (res, req) => {
    if(req.headers["eleos-platform-key"] != process.env.ELEOS_PLATFORM_KEY) {
        res.status(401).send("401: broked Eleos Platform Key");
        }
    else {
        try{
            res.send("postAuth works!! well, it gets past the platform key");
        }
        catch(error){
            res.status(400).send(error);
        }
    }
}

export const putAuth = (res, req) => {
    if(req.headers["eleos-platform-key"] != process.env.ELEOS_PLATFORM_KEY) {
        res.status(401).send("401: broked Eleos Platform Key");
        }
    else {
        try{
            res.send("putAuth works!! well, it gets past the platform key");
        }
        catch(error){
            res.status(400).send(error);
        }
    }
}