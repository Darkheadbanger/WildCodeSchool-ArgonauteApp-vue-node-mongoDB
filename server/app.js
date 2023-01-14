"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express"), mongoose = require("mongoose"), app = express(), memberRoutes = require("./routes/stuff"), helmet = require("helmet");
var bodyParser = require("body-parser");
const path = require("path");
// Permet d'inclure et de lire dotenv
require("dotenv").config();
const mongoDB = {
    CONNECT_TO_MONGODB: process.env.CONNECT_TO_MONGODB,
};
let connectToMongoDB = mongoDB.CONNECT_TO_MONGODB;
mongoose
    .connect(connectToMongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connexion  \xe0 MongoDB r\xe9ussie !"))
    .catch((e) => console.log(`Connexion \xe0 mongoDB \xe9chou\xe9e ${e}`)),
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", connectToMongoDB);
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
        res.setHeader("X-XSS-Protection", "1; made=block");
        next();
    }),
    app.use(bodyParser.json()),
    app.use(express.json()),
    app.use(helmet()),
    app.use("/api/member", memberRoutes),
    (module.exports = app);
