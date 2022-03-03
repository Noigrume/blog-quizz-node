import express from "express";
const router = express.Router();

import {
    allArticles,
    oneArticle,
    saveArticle,
    updateArticle,
    delArticle,
} from "../controllers/articles.controllers.js";

import {
    oneQuizz,
    saveQuizz,
    updateQuizz,
    delQuizz,
} from "../controllers/quizz.controllers.js";


/****************************************** ROUTES ARTICLES********************************************************************/
router.get("/", allArticles);
router.get("/:id", oneArticle);
router.post("/save", saveArticle);
router.patch("/update/:id", updateArticle);
router.delete("/delete/:id", delArticle);

/****************************************** ROUTES QUIZZ********************************************************************/

router.get('/:id/quizz',oneQuizz);
router.post("/save", saveQuizz);
router.patch("/update/:id", updateQuizz);
router.delete("/delete/:id", delQuizz);


export default router;