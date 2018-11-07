const path = require("path");


// routing

module.exports = function(app) {
  // GET Requests to home

  // If no matching route is found default to home
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};