import { createUser, getUserByAlias } from "../queries/auth.queries.js";
import jwt from "jsonwebtoken";
import { allArticles } from "./articles.controllers.js";

export const createSession = async (req, res) => {
    try {

        if (req.method === "GET") {
            res.render("layout", { template: "user/login", error: null });
        }

        if (req.method === "POST") {
            const { alias, pwd } = req.body;

            const user = await getUserByAlias(alias);
            if (!user) {
                res.render("layout", {
                    template: "user/login",
                    error: "no user with this alias",
                });
                return;
            }

            const pwdChecked = await user.comparePassword(pwd, user.password);

            if (pwdChecked) {
                req.session.token = jwt.sign(
                    { userId: user._id },
                    "RANDOM_TOKEN_SECRET",
                    { expiresIn: "24h" }
                );
                req.session.userId = user._id;
                req.session.alias = user.name;

                res.redirect("/");
                return;
            }

            res.render("layout", {
                template: "user/login",
                error: "bad password",
            });
        }
    } catch (err) {
        throw err;
    }
};

export const deleteSession = (req, res, next) => {
    req.session.destroy();
    res.redirect("/");
};

export const newUser = async (req, res) => {
    if (req.method === "GET") {
        res.render("layout", { template: "user/register" });
    }
    if (req.method === "POST") {
        try {
            const body = req.body;
            const user = await createUser(body);
            res.redirect("login");
        } catch (err) {
            res.render("home", { error: err.message });
        }
    }
};
