import express from "express";
const router = express.Router();

import { saveUser, newUser } from "../controllers/user.controllers.js";

router.get("/login", newUser);
router.get("/register", newUser);
router.post("/new", saveUser);

export default router;