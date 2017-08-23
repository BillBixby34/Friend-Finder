
//This is routing for the user(html);

var path = require("path");

  //html routing get
module.exports = function(app) {
   
  
//when user visits 1 of 2 pages on app
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

};
