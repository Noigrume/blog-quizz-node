import { Categorie } from "../database/models/categorie.model.js";

export const getAllCategories = () => {
    return Categorie.find({}).exec();
};

export const getOneCategorie = (id) => {
    return Categorie.findOne({ index: { $eq: id } });
};

export const getOneQuizz = (id) => {
    return Categorie.findOne({ index: { $eq: id } });
};

export const saveOneCategorie = (newCategorie) => {
    return newCategorie.save();
};

export const updateOneCategorie = (id, datas) => {
    const { label } = datas;
    return Categorie.findOneAndUpdate(
        { index: id },
        { $set: { label: label } }
    );
};

export const deleteOneCategorie = (id) => {
    return Categorie.findOneAndDelete({ index: { $eq: id } });
};
