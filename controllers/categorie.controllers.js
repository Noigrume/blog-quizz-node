import {
    deleteOneCategorie,
    getAllCategories,
    saveOneCategorie,

} from "../queries/categorie.queries.js";


import { Categorie } from "../database/models/categorie.model.js";

export const allCategories = async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.render("layout", { template: "categories", categories: categories });
    } catch (err) {
        console.log(err);
    }
};

export const newCategorieTemplate = async (req, res) => {
    try {
        res.render("layout", {
            template: "new_categorie",
        });
    } catch (err) {
        console.log(err);
    }
};

export const saveCategorie = async (req, res) => {
    try {
        const { body } = req;

        const newCategorie = new Categorie({
            ...body,
            category_id: body.category,
        });

        await saveOneCategorie(newCategorie)
        res.redirect(303, "/admin");
    } catch (err) {
        console.log(err);
    }
}



export const delCategorie = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteOneCategorie(id);
        res.redirect(303, "/categorie");
    } catch (err) {
        console.log(err);
    }
};
