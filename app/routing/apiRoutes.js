// access the friends data js file
const friends = require("../data/friends");

// routing

module.exports = function(app) {
  // GET requests

  // route to get friends list
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
};