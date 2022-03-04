import pkg from 'mongoose';
const { Schema, model } = pkg;

const ArticleSchema = Schema(
    {
        index: Number,
        title: { type: String, minlength: 2, required: true },
        date: { type: Date, default: Date.now() },
        picture: { type: String, default: "no-picture.png" },
        description: { type: String, required: true },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'categorie'
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        related_quizz: [{
            type: Schema.Types.ObjectId,
            ref: 'quizz_evaluation'
         }]
    },
    { timestamps: true }
);

ArticleSchema.pre("save", async function () {
    const docCount = await Article.countDocuments();
    return (this.index = docCount + 1);
});

export const Article = model("article", ArticleSchema);
