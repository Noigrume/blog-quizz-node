import pkg from 'mongoose';
const {Schema, model} = pkg;

const ArticleSchema = Schema(
    {
        index: Number,
        // name: { type: String, minlength: 2, required: true },
        // age: { type: Number, required: true },
        // picture: {type: String, default: "no-picture.png"},
        // available: { type: Boolean, required: true },
        title: { type: String, minlength: 2, required: true },
        date: { type: Date, required: true },
        picture: {type: String, default: "no-picture.png"},
        description: { type: String, required: true },
    },
    { timestamps: true }
);

ArticleSchema.pre("save", async function () {
    const docCount = await Article.countDocuments();
    return (this.index = docCount + 1);
});

export const Article = model("article", ArticleSchema);
