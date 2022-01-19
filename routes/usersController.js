const express = require("express");
const router = express.Router();
// get my models
const { UsersModel } = require("../models/usersModel");
//interact with ID
const ObjectID = require("mongoose").Types.ObjectId;

//=====READ ALL=====
router.get("/", (req, res) => {
  UsersModel.find((err, output) => {
    if (!err) res.send(output);
    else console.log("error to get data : " + err);
  });
});

//=====READ ONE=====
router.get("/:userId", (req, res) => {
  if (!ObjectID.isValid(req.params.userId))
    return res.status(400).send("ID unknow : " + req.params.userId);

  UsersModel.findById(req.params.userId, (err, output) => {
    if (!err) res.send(output);
    else console.log("error to get one data : " + err);
  });
});

//=====CREATE=====
router.post("/", (req, res) => {
  //create object with data frome request in the DB format
  const newRecord = new UsersModel({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    admin: req.body.admin,
  });

  //save my var in mongoDB
  newRecord.save((err, output) => {
    if (!err) res.send(output);
    else console.log("error creating new data" + err);
  });
});

//=====UPDATE=====
router.put("/:userId", (req, res) => {
  if (!ObjectID.isValid(req.params.userId))
    return res.status(400).send("ID unknow : " + req.params.userId);

  const updateRecord = {
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    admin: req.body.admin,
  };
  UsersModel.findByIdAndUpdate(
    req.params.userId,
    { $set: updateRecord },
    { new: true },
    (err, output) => {
      if (!err) res.send(output);
      else console.log("error updating data" + err);
    }
  );
});

//=====DELETE=====
router.delete("/:userId", (req, res) => {
  if (!ObjectID.isValid(req.params.userId))
    return res.status(400).send("ID unknow : " + req.params.userId);

  UsersModel.findByIdAndDelete(req.params.userId, (err, output) => {
    if (!err) res.send(output);
    else console.log("deleting failed : " + err);
  });
});

module.exports = router;
