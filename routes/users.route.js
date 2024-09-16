import express from "express";
import { getAllUsers, getUserById } from "../controllers/users.controller.js";
import { verifyToken } from "../utils/auth.js";

const router = express.Router();

router.get("/users", verifyToken, getAllUsers);
router.get("/users/:id", verifyToken, getUserById);

export default router;
