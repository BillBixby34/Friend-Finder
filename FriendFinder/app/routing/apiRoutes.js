// ===============================================================================
// LOAD DATA
//This will be routing for data(determines data user sees and posts to friends.js)
var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
 //this will be used to display JSON of all possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

 //---------------------------------------------------------------------------
//This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic. 
  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know they're match
    // It will do this by sending out the value "true" have a table
    
      friendsData.push(req.body);
      res.json(true);
  });

  //app.post("/api/clear", function() {
    // Empty out the array of friends data
    //friendsData = [];
  // console.log(tableData);
 // });
};
