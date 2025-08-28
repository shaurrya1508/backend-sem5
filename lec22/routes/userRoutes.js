import express from "express";
import { registerUser, loginUser, getUsers, getUserById } from "../controllers/userController.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/", getUsers);
router.get("/:id", getUserById);

export default router;
