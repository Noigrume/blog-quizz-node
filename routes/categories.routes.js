import express from "express";
const router = express.Router();


import {
    allCategories,
    saveCategorie,
    delCategorie,
    newCategorieTemplate,
} from "../controllers/categorie.controllers.js";

router.get("/", allCategories);

router.get("/new", newCategorieTemplate)
router.post("/save", saveCategorie);
router.delete("/delete/:id", delCategorie);


export default router;