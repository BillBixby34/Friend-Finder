
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
app.use(express.static('public'));//see all in public
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//app.get('/', function(req, res){
//	res.send('Hello World');
//})//testing server

app.listen(PORT, function() {
//use to check for server listening
  console.log("App listening on PORT " + PORT);
});