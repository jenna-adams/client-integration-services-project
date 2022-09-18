const getUsers = "SELECT * FROM test_table";
const getUser = "SELECT * FROM test_table WHERE username = $1";
const getUserAuth = "SELECT * FROM test_table WHERE username = $1";
const getUserWithToken = "SELECT * FROM test_table WHERE api_token = $1";
const checkUserUsername = "SELECT s FROM test_table s WHERE s.username = $1";
const addUserToDb = "INSERT INTO test_table (id, firstName, lastName, age) VALUES ($1, $2, $3, $4)";
const removeUser = "DELETE FROM test_table WHERE username = $1";
const updateUser = "UPDATE test_table SET firstName = $1 WHERE id = $2";
const getLoads = "SELECT * FROM loads";
const getTrucks = "SELECT * FROM trucks";
export default{
    getUsers,
    getUser,
    getUserAuth,
    getUserWithToken,
    checkUserUsername,
    addUserToDb,
    removeUser,
    updateUser,
    getLoads,
    getTrucks
};