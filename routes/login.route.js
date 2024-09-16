import { loginController } from "../controllers/login.controller.js";
import express from "express";

const router = express.Router();

router.post("/login", loginController);

export default router;
