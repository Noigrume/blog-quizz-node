import jwt from "jsonwebtoken";

export default (req, res, next) => {
    jwt.verify(req.session.token, "RANDOM_TOKEN_SECRET", (err, decode) => {
        if (
            typeof decode === "undefined" ||
            (req.session.userId && req.session.userId !== decode.userId)
        ) {
            res.redirect("/auth/login");

            return;
        }
		// continue l'action / passe au middleware suivant ; si on l'omets, l'action sera bloqué et notre appli' par la même occasion !
        next();
    });
};
