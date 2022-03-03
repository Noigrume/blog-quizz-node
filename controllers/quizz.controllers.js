import {
    deleteOneQuizz,
    getAllQuizzs,
    getOneQuizz,
    updateOneQuizz,
    saveOneQuizz,
} from "../queries/quizz.queries.js";

import { QuizzEvaluation } from "../database/models/quizz_evaluation.model.js";

export const allQuizzs = async (req, res) => {
    try {
        const quizzs = await getAllQuizzs();
        res.render("layout", { template: "home", quizzs: quizzs });
    } catch (err) {
        console.log(err);
    }
};



export const oneQuizz = async (req, res) => {
    try {
        const { id } = req.params;
        const quizz = await getOneQuizz(id);
        const { name, age, available, picture } = quizz;
        res.render("layout", {
            template: "detail",
            quizz: {
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

export const saveQuizz = async (req,res) => {
    try {
        const { body } = req;

    const newQuizz = new QuizzEvaluation({
        ...body,
        available: body.isAvailable ? true : false,
    });

    await saveOneQuizz(newQuizz)
    res.redirect(303, "/admin");
    } catch (err) {
        console.log(err);
    }
}

export const updateQuizz = async (req, res) => {
    try {
        const datas = req.body.newDatas;
        const { id } = req.params;
        await updateOneQuizz(id, datas);
        res.redirect(303, "/list");
    } catch (err) {
        console.log(err);
    }
};

export const delQuizz = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteOneQuizz(id);
        res.redirect(303, "/");
    } catch (err) {
        console.log(err);
    }
};
