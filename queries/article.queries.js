import { Article } from "../database/models/article.model.js";

export const getAllArticles = () => {
    return Article.find({}).exec();
};

export const getOneArticle = (id) => {
    return Article.findOne({ index: { $eq: id } });
};

export const saveOneArticle = (newArticle) => {
    return newArticle.save();
};

export const updateOneArticle = (id, datas) => {
    const { name, age, available } = datas;
    return Article.findOneAndUpdate(
        { index: id },
        { $set: { name: name, age: age, available: available } }
    );
};

export const deleteOneArticle = (id) => {
    return Article.findOneAndDelete({ index: { $eq: id } });
};
