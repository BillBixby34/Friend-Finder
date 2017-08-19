
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/htmlRoutes.js")(app);
//app.get('/', function(req, res){
//	res.send('Hello World');
//})//testing server
// Create New Characters(change to friend)from post route - takes in JSON input
app.post("/api/new", function(req, res) {
  //req.body is submitted info
  //check starWars add.html
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
//making sure friend comes through
  console.log(newcharacter);
//push newcharacter into existing character array
  characters.push(newcharacter);
//send newcharacter to front end
  res.json(newcharacter);
});

app.listen(PORT, function() {
//use to check for server listening
  console.log("App listening on PORT " + PORT);
});