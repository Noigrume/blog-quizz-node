import {
    deleteOneArticle,
    getAllArticles,
    getOneArticle,
    updateOneArticle,
    saveOneArticle,
} from "../queries/article.queries.js";

import { Article } from "../database/models/article.model.js";

export const allArticles = async (req, res) => {
    try {
        const articles = await getAllArticles();
        res.render("layout", { template: "list", articles: articles });
    } catch (err) {
        console.log(err);
    }
};

export const oneArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await getOneArticle(id);
        const { name, age, available, picture } = article;
        res.render("layout", {
            template: "detail",
            article: {
                dispo: available ? "oui" : "non",
                name: name,
                age: age,
                available: available,
                picture: picture,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export const saveArticle = async (req,res) => {
    try {
        const { body } = req;

    const newArticle = new Article({
        ...body,
        available: body.isAvailable ? true : false,
    });

    await saveOneArticle(newArticle)
    res.redirect(303, "/admin");
    } catch (err) {
        console.log(err);
    }
}

export const updateArticle = async (req, res) => {
    try {
        const datas = req.body.newDatas;
        const { id } = req.params;
        await updateOneArticle(id, datas);
        res.redirect(303, "/list");
    } catch (err) {
        console.log(err);
    }
};

export const delArticle = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteOneArticle(id);
        res.redirect(303, "/");
    } catch (err) {
        console.log(err);
    }
};
