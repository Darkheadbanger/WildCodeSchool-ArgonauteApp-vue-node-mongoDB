const express = require("express"),
    mongoose = require("mongoose"),
    app = express(),
    memberRoutes = require("./routes/stuff"),
    helmet = require("helmet");
var bodyParser = require("body-parser");
const path = require("path");
// Permet d'inclure et de lire dotenv
require("dotenv").config(),
// Pour se connecter a la base de donner NoSQL mongoDB
    mongoose
    .connect(process.env.CONNECT_TO_MONGODB, {
        useNewUrlParser: !0,
        useUnifiedTopology: !0,
    })
    .then(() => console.log("Connexion \xe0 MongoDB r\xe9ussie !")) // \xe0 unicode hex pour à
    .catch((e) => console.log(`Connexion \xe0 mongoDB \xe9chou\xe9e ${e}`)),
    //  Middleware qui sert a éviter l'erreur cors entre front et end
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_ORIGIN), //*
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"),
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS"),
            next();
    }),
    app.use(bodyParser.json()),
    app.use(express.json()),
    app.use(helmet()),
    app.use("/api/member", memberRoutes),
    (module.exports = app);