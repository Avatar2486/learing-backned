import connectDB from "../config/db.js";

class Users {
    static async getAllUsers(){
        let client = await connectDB()
        const query = `SELECT * FROM users`
        return await client.query(query);
    }

}

export default Users;