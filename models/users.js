import connectDB from "../config/db.js";

class Users {
    static async query(q, ...values) {
        const client = await connectDB();
        return await client.query(q, values);
    }

    static async getAllUsers() {
        return await this.query("SELECT * FROM public.user");
    }

    static async getUserById(id) {
        return await this.query("SELECT * FROM public.user WHERE id = $1", id);
    }

    static async getUserByEmail(email) {
        return await this.query("SELECT * FROM public.user WHERE email = $1", email);
    }

    static async getUserByEmailAndPassword(email, password) {
        return await this.query("SELECT * FROM public.user WHERE email = $1 AND password = $2", email, password);
    }

    static async getUserByIdAndPassword(id, password) {
        return await this.query("SELECT * FROM public.user WHERE id = $1 AND password = $2", id, password);
    }

    static async addUser({ name, email, password }) {
        return await this.query("INSERT INTO public.user (name, email, password) VALUES ($1, $2, $3)", name, email, password);
    }

    static async updateUser(id, { name, email, password }) {
        return await this.query("UPDATE public.user SET name = $1, email = $2, password = $3 WHERE id = $4", name, email, password, id);
    }

    static async deleteUser(id) {
        return await this.query("DELETE FROM public.user WHERE id = $1", id);
    }

    static async deleteAllUsers() {
        return await this.query("DELETE FROM public.user");
    }
}

export default Users;