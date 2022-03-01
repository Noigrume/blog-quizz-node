import express from "express";
const router = express.Router();

import {
    allArticles,
    oneArticle,
    saveArticle,
    updateArticle,
    delArticle,
} from "../controllers/articles.controllers.js";

router.get("/all", allArticles);
router.get("/:id", oneArticle);
router.post("/save", saveArticle);
router.patch("/update/:id", updateArticle);
router.delete("/delete/:id", delArticle);

export default router;