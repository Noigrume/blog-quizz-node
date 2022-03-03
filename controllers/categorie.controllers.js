import {
    deleteOneCategorie,
    getAllCategories,
    saveOneCategorie,

} from "../queries/categorie.queries.js";


import { Categorie } from "../database/models/categorie.model.js";

export const allCategories = async (req, res) => {
    try {
        const categorie = await getAllCategories();
        res.render("layout", { template: "home", categories: categories });
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
