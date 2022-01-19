const mongoose = require("mongoose");
//Innov, OUTSCALE, Préfecture de police
const UsersModel = mongoose.model(
  "jbvs-blog",
  {
    username: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  "users"
);

module.exports = { UsersModel };
