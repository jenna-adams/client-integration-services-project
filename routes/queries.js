const getUsers = "SELECT * FROM test_table";
const getUser = "SELECT * FROM test_table WHERE id = $1";
const checkUserId = "SELECT s FROM test_table s WHERE s.id = $1";
const addUserToDb = "INSERT INTO test_table (id, firstName, lastName, age) VALUES ($1, $2, $3, $4)";
const removeUser = "DELETE FROM test_table WHERE id = $1";
const updateUser = "UPDATE test_table SET firstName = $1 WHERE id = $2";

export default{
    getUsers,
    getUser,
    checkUserId,
    addUserToDb,
    removeUser,
    updateUser
};