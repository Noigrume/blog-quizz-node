import express from "express";
const router = express.Router();


import {
    allCategories,
    saveCategorie,
    delCategorie,
} from "../controllers/categorie.controllers.js";

router.get("/", allCategories);
router.post("/save", saveCategorie);
router.delete("/delete/:id", delCategorie);


export default router;