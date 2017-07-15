"use strict";

// -> Basic Express Setup:
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// -> Mongo Database Setup:
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

// -> Database Connection:
MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // -> Saves Helper Functions for Saving and Getting Tweets
  const DataHelpers = require("./lib/data-helpers.js")(db);

  // -> Adds Helper Functions to Request Handlers that Use Them: 
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  // -> Routes Requests to Handlers:
  app.use("/tweets", tweetsRoutes);


  // -> Port Listener //
  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });

});
