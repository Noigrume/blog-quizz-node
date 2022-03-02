import pkg from 'mongoose';
const { Schema, model } = pkg;

const QuizzAnswerSchema = Schema(
    {
        index: Number,
        label: { type: String, minlength: 2, required: true },
        checked: { type: bool, required:true },
        quizz_question: {
            type: Schema.Types.ObjectId,
            ref: 'QuizzQuestion'
        },
    },
    { timestamps: true }
);

QuizzAnswerSchema.pre("save", async function () {
    const docCount = await QuizzAnswer.countDocuments();
    return (this.index = docCount + 1);
});

export const QuizzAnswer = model("quizz_answer", ArticleSchema);