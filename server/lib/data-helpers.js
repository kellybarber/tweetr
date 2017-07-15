"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`:
module.exports = function makeDataHelpers(db) {

  return {

    // Saves a tweet to the database:
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, (err, tweets) => {
        if (err) {
          return callback(err);
        }
        callback(null, true);
      })
    },

    // Get all tweets in database, sorted by newest first:
    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err, tweets) => {
        if (err) {
          return callback(err);
        }
        const sortNewestFirst = (a, b) => b.created_at - a.created_at;
        callback(null, tweets.sort(sortNewestFirst));
      })
    }
  }

}
