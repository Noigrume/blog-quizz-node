import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

import authRoutes from "./auth.routes.js";
import articlesRoutes from "./articles.routes.js";

import authMiddleware from "../middlewares/auth.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();

router.use((req, res, next) => {
    res.locals.alias = req.session.alias;
    next();
});

router.use("/auth", authRoutes);
router.use("/articles", articlesRoutes);

router.get("/admin", authMiddleware, (req, res) => {
    res.render("layout", { template: "admin" });
});

router.get("/", (req, res) => {
    res.render("layout", { template: "home" });
});

//route not found
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "images/404.jpg"));
});

export default router;
