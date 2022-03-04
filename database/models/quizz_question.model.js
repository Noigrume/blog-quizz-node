import pkg from 'mongoose';
const { Schema, model } = pkg;

const QuizzQuestionSchema = Schema(
    {
        index: Number,
        label: { type: String, minlength: 2, required: true },
        date: { type: Date, default: Date.now() },
        succeded: { type: bool, required: false },
        quizz_id: {
            type: Schema.Types.ObjectId,
            ref: 'quizz_evaluation'
        },
        quizz_answers: [{
            type: Schema.Types.ObjectId,
            ref: 'quizz_answer'
         }]
    },
    { timestamps: true }
);

QuizzQuestionSchema.pre("save", async function () {
    const docCount = await QuizzQuestion.countDocuments();
    return (this.index = docCount + 1);
});

export const QuizzQuestion = model("quizz_question", QuizzQuestionSchema);