import Users from "../models/users.js";

export const getAllUsers = (req, res) => {
  console.log("getting all users");
  Users.getAllUsers()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ message: err.message }));
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  Users.getUserById(id)
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ message: err.message }));
};
