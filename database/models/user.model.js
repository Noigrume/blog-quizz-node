import pkg from "mongoose";
import bcrypt from 'bcrypt';
const { Schema, model } = pkg;

const UserSchema = Schema(
    {
        index: Number,
        name: { type: String, minlength: 3, required: true },
        password: { type: String, minlength:3, required: true },
        published_articles: [{
            type: Schema.Types.ObjectId,
            ref: 'Article'
         }]
    },
    { timestamps: true }
);

UserSchema.statics.hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10)
        return bcrypt.hash(password, salt)
    } catch (err) {
        throw err
    }
}

UserSchema.methods.comparePassword = function(password, hash){
    return bcrypt.compare(password, hash)
}

UserSchema.pre("save", async function () {
    const docCount = await User.countDocuments();
    return (this.index = docCount + 1);
});

export const User = model("user", UserSchema);
