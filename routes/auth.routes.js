import express from "express";
const router = express.Router();

import {
    createSession,
    deleteSession,
    newUser
} from "../controllers/auth.controllers.js";

router.all("/register", newUser);
router.all("/login", createSession);
router.get("/logout", deleteSession);

export default router;