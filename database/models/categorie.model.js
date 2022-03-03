import pkg from 'mongoose';
const { Schema, model } = pkg;

const CategorieSchema = Schema(
    {
        index: Number,
        label: { type: String, minlength: 2, required: true },
    },
    { timestamps: true }
);

CategorieSchema.pre("save", async function () {
    const docCount = await Categorie.countDocuments();
    return (this.index = docCount + 1);
});

export const Categorie = model("categorie", CategorieSchema);