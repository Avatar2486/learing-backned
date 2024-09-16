import Users from "../models/users.js";
import { generateToken } from "../utils/jwt.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await Users.getUserByEmailAndPassword(email, password);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = generateToken(user.rows[0]);
  res.status(200).json({ token });
};
