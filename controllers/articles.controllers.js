import {
    deleteOneArticle,
    getAllArticles,
    getOneArticle,
    updateOneArticle,
    saveOneArticle,
    getOneQuizz,

} from "../queries/article.queries.js";

import {
    getAllCategories,

} from "../queries/categorie.queries.js";

import { Article } from "../database/models/article.model.js";

export const allArticles = async (req, res) => {
    try {
        const articles = await getAllArticles();
        res.render("layout", { template: "list", articles: articles });
    } catch (err) {
        console.log(err);
    }
};

export const oneQuizz = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await getOneQuizz(id);
        const { label } = quizz;
        res.render("layout", {
            template: "detail",
            quizz: {
                label: label,
            },
        });
    } catch (err) {
        console.log(err);
    }
};


export const newArticleTemplate = async (req, res) => {
    try {
        const categories = getAllCategories;
        res.render("layout", {
            template: "new_article",
            categories: categories,
        });
    } catch (err) {
        console.log(err);
    }
};

export const oneArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await getOneArticle(id);
        const { index, title, date,description, picture } = article;
        res.render("layout", {
            template: "detail",
            article: {
                index:id,
                title : title,
                date: date,
                picture: picture,
                description: description,
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
      //  category_id: body.category,
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
        res.redirect(303, "/article");
    } catch (err) {
        console.log(err);
    }
};
