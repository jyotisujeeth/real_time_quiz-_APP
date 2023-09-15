"use strict";
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
var config = require("../config");
var Mongoose = require("mongoose");
var logger = require("../logger");

//const mongoConnect 


// Connect to the database
// construct the database URI and encode username and password.
// var dbURI = "mongodb://" +
// 			encodeURIComponent(config.db.username) + ":" +
// 			encodeURIComponent(config.db.password) + "@" +
// 			config.db.host + ":" +
// 			config.db.port + "/" +
// 			config.db.name;
Mongoose.connect= (callback) => {
  mongoose
    .connect(
      // "mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.d7wxssa.mongodb.net/expenseDb"
      // "mongodb+srv://jyoti:zFh0iHlM73Dcfqh7@cluster0.le606nm.mongodb.net/admin"
      "mongodb+srv://jyotisujeeth:jyotisujeeth@cluster0.txox8e9.mongodb.net/mydemo"
    )
    .then((client) => {
      console.log("Connected!");
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
// mpromise (mongoose's default promise library) is deprecated,
// Plug-in your own promise library instead.
// Use native promises
Mongoose.Promise = global.Promise;

module.exports = {
  Mongoose,
  models: {
    user: require("./schemas/user.js"),
    room: require("./schemas/room.js"),
    question: require("./schemas/question.js"),
  },
};


//module.exports = mongoConnect;



