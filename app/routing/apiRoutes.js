// access the friends data js file
const friends = require("../data/friends");

// routing

module.exports = function (app) {
  // GET requests

  // route to GET friends list
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // POST requests

  // route to POST friends list
  app.post("/api/friends", function (req, res) {

    // set empty new best friend  
    let bestFriend = {
      name: '',
      pic: '',
      friendDelta: 10000
    }
    // get the user scores
    let userData = req.body;
    let userScores = req.body.scores;

    // store the total difference
    let totalDiff;

    //loop through friends list
    for (let i = 0; i < friends.length; i++) {
      let currentFriend = friends[i];
      totalDiff = 0;

      // loop through the scores of each friend
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        //calculate the difference between the scores and add to total difference
        totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      // If the sum of differences is less then the differences of the current "best match"
      if (totalDiff <= bestFriend.friendDelta) {
        // Reset the bestMatch to be the new friend.
        bestFriend.name = currentFriend.name;
        bestFriend.pic = currentFriend.photo;
        bestFriend.friendDelta = totalDiff;
      }
    }

    //push user to database
    //friends.push(userData);

    // Return a JSON with new best friend
    res.json(bestFriend);
  });
};