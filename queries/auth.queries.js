import { User } from "../database/models/user.model.js";

export const createUser = async (user) => {
    try {
        const hash = await User.hashPassword(user.pwd);
        const newUser = new User({
            name: user.alias,
            password: hash,
        });
        return newUser.save();
    } catch (err) {
        throw err;
    }
};

export const getUserByAlias = async (alias) => {
    const user = await User.findOne({ name: alias })
    return user
}