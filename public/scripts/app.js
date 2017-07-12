/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


function createTweetElement(tweetData) {
  // Create section elements
  let $tweet = $("<article>").addClass("tweet");
  let header = $("<header>");
    let avatar = $("<img>").addClass("avatar");
    let name = $("<div>").addClass("name");
    let handle = $("<div>").addClass("handle");
  let content = $("<div>").addClass("content");
    let message = $("<div>").addClass("message");
  let footer = $("<footer>");
    let postAgo = $("<div>").addClass("post-ago");
    let flag = $("<img>").addClass("flag");
    let retweet = $("<img>").addClass("retweet");
    let like = $("<img>").addClass("like");

  // Append header, footer, and body
  $tweet.append(header);
    $(header).append(avatar);
    $(header).append(name);
    $(header).append(handle);
  $tweet.append(content);
    $(content).append(message);
  $tweet.append(footer);
    $(footer).append(postAgo);
    $(footer).append(flag);
    $(footer).append(retweet);
    $(footer).append(like);
  // Append object data to created html
  return $tweet;
}



// Test / driver code (temporary). Eventually will get this from the server.
var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

$(document).ready(() => {

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweet-box').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

})
