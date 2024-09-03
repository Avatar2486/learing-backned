import Users from "../models/users.js";

export const getAllUsers = (req, res) => {
    console.log(req);
    console.log("getting all users");
    Users.getAllUsers()
       .then(users => res.json(users))
       .catch(err => res.status(500).json({ message: err.message }));
}