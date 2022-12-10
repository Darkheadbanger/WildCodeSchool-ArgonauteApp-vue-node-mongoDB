const express = require("express");
const mongoose = require("mongoose");
const app = express();
const memberRoutes = require("./routes/stuff");
const helmet = require("helmet");
var bodyParser = require("body-parser");
const path = require("path");
// const cors = require("cors");

require("dotenv").config();

mongoose
  .connect(process.env.CONNECT_TO_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log(`Connexion à mongoDB échouée ${error}`));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //process.env.FRONTEND_ORIGIN
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//Pour lire le format application/JSON
app.use(bodyParser.json());
app.use(express.json());
app.use(helmet()); // Helmet pour sécuriser l'Express en mettant plusieurs entête HTTP et respeter OWASP

// Enregistrement le routeur pour toutes demandes effectués (dans le dossier routes/stuff.js) vers l'URL /api/stuff
app.use("/api/member", memberRoutes);

module.exports = app;
