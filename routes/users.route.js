import { getAllUsers } from "../controllers/users.controller.js";
import express from "express";

const router = express.Router();
router.get('/users', getAllUsers )

export default router;