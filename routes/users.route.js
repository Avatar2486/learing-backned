import { getAllUsers, getUserById } from "../controllers/users.controller.js";
import express from "express";

const router = express.Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

export default router;
