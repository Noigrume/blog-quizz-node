import { QuizzEvaluation } from "../database/models/quizz_evaluation.model.js";



export const getAllQuizzs = () => {
    return QuizzEvaluation.find({}).exec();
};



export const getOneQuizz = (id) => {
    return QuizzEvaluation.findOne({ index: { $eq: id } });
};

export const saveOneQuizz = (newQuizz) => {
    return newQuizz.save();
};

export const updateOneQuizz = (id, datas) => {
    const { name, age, available } = datas;
    return QuizzEvaluation.findOneAndUpdate(
        { index: id },
        { $set: { name: name, age: age, available: available } }
    );
};

export const deleteOneQuizz = (id) => {
    return QuizzEvaluation.findOneAndDelete({ index: { $eq: id } });
};

