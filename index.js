// variable pour convertir en json les requests
const bodyParser = require("body-parser");

//importation du framework express
const express = require("express");
const app = express();

// importation du retour de la configuration de la database
require("./models/dbConfig");

// importe le retour du crud
const usersRoutes = require("./routes/usersController");

// conversion des requetes en json
app.use(bodyParser.json());
//lien de /users vers le crud
app.use("/users", usersRoutes);

// lancement serveur
app.listen(3000, () => console.log("Server started on 3000"));
