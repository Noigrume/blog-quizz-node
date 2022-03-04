import pkg from 'mongoose';
const { Schema, model } = pkg;

const QuizzEvaluationSchema = Schema(
    {
        index: Number,
        label: { type: String, minlength: 2, required: true },
        date: { type: Date, default: Date.now() },
        note: { type: Number, required: false },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        description: { type: String, required: true },
        article_id: {
            type: Schema.Types.ObjectId,
            ref: 'article'
        },
        related_questions: [{
            type: Schema.Types.ObjectId,
            ref: 'quizz_question'
         }]
    },
    { timestamps: true }
);

QuizzEvaluationSchema.pre("save", async function () {
    const docCount = await QuizzEvaluation.countDocuments();
    return (this.index = docCount + 1);
});

export const QuizzEvaluation = model("quizz_evaluation", QuizzEvaluationSchema);