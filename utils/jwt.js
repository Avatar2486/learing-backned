import jwt from "jsonwebtoken";
import { secretKey } from "../config/secrets.js";

export const generateToken = user => {
  console.log(user);
  const payload = {
    id: user.id,
    email: user.email
  };

  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secretKey, options);
};
