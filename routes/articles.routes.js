import express from "express";
const router = express.Router();

import {
    allArticles,
    oneArticle,
    saveArticle,
    updateArticle,
    delArticle,
    
    newArticleTemplate,
} from "../controllers/articles.controllers.js";

import {
    oneQuizz,
    saveQuizz,
} from "../controllers/quizz.controllers.js";



/******************************************    ROUTES ARTICLES   *****************************************************************/
router.get("/", allArticles);

router.get("/new", newArticleTemplate)
// router.get('/new', function(req, res){
 
//     res.render('home');
// })
 
router.get("/:id", oneArticle);


//router.get("/new", newArticleTemplate)
router.post("/save", saveArticle);
router.patch("/update/:id", updateArticle);
router.delete("/delete/:id", delArticle);

/******************************************    ROUTES QUIZZ   ********************************************************************/

router.get('/:id/quizz',oneQuizz); //pour voir le quizz d'un article
router.post("/:id/quizz/save", saveQuizz); // enregistre un quizz lié à l'id d'un article
//router.delete("/delete/:id", delQuizz);


export default router;