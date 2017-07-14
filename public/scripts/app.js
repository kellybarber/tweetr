
// -> Creates Tweet from User Data //
function createTweetElement(tweetData) {

  let $tweet = $("<article>").addClass("tweet");
    let header = $("<header>");
      let avatar = $("<img>", {src: tweetData['user']['avatars']['small']}).addClass("avatar");
      let name = $("<div>").addClass("name").text(tweetData['user']['name']);
      let handle = $("<div>").addClass("handle").text(tweetData['user']['handle']);
    let content = $("<div>").addClass("content");
      let message = $("<div>").addClass("message").text(tweetData['content']['text']);
    let footer = $("<footer>");
      let postAgo = $("<div>").addClass("post-ago").prepend(tweetData['created_at']);
      let flag = $("<img>", {src: "../images/flag.png"}).addClass("flag");
      let retweet = $("<img>", {src: "../images/retweet.png"}).addClass("retweet");
      let like = $("<img>", {src: "../images/like.png"}).addClass("like");

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

  return $tweet;
}

// -> Adds Tweets to Page //
function renderTweets(tweets) {
    tweets.forEach((tweet) => {
      $('#tweets-container').append(createTweetElement(tweet));
    })

}

// -> Calls on Page Load //
$(document).ready(() => {

  // -> Loads Tweets to Page //
  function loadTweets(callback) {
    $.ajax({
      url: "/tweets",
      method: "GET",
      success: (tweets) => {
        callback(tweets);
      }
    })
  }
  loadTweets(renderTweets);

  // -> New Tweet Submission Handler //
  $("form").on("submit", function(event) {
    event.preventDefault();

    if (!($("textarea").val())) {
      alert("No Text!")
    } else if ((Number($(".counter").text())) < 0) {
      alert("Too Long!")
    } else {

      $.ajax({
      url: "/tweets",
      method: "POST",
      data: $(this).serialize(),
        success: (tweet) => {
          $("textarea").val("");
          $('#tweets-container').prepend(createTweetElement(tweet));
        }
      })
    }
  })

  // -> Compose Button to Toggle Tweet Input //
  $("button").on('click', () => {
    $(".new-tweet").slideToggle();
    $("textarea").focus();
  })

})
