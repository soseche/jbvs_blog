//importation du module mongoose pour interagir avec mongo db
const mongoose = require("mongoose");

//connexion a notre base de données avec gestion d'erreur pour les logs serveurs
mongoose.connect("mongodb://localhost:27017/jbvs-blog", (err) => {
  if (!err) console.log("mongo database connected");
  else console.log("connection failed : " + err);
});
