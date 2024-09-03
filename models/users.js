import db from "../config/db.js";

class Users {
    static getAllUsers(){
        const query = `SELECT * FROM users`
        return db.query(query);
    }

}

export default Users;