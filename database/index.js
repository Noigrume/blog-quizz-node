import mongoose from "mongoose";

const { HOST_DB, PORT_DB, DATABASE } = process.env;

mongoose
    .connect(`mongodb://${HOST_DB}:${PORT_DB}/${DATABASE}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((res) => {
        console.log(
            `Connected to ${res.connection.name} database on http://${res.connection.host}:${res.connection.port}`
        );
    })
    .catch((err) => {
        console.log("ERROR", err);
    });
