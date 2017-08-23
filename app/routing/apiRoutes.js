// ===============================================================================
// LOAD DATA
//This will be routing for data(determines data user sees and posts to friends.js)
var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
 //this will be used to display JSON of all possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
    var match;
  });

 //---------------------------------------------------------------------------
//This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic. 
  app.post("/api/friends", function(req, res) {
    //Our "server" will respond to requests and let users know they're match
    
      var user = (req.body);
      //console.log(user);
      //console.log(user.scores);
      var diffArr = [];
      var difference = 0;
      for (var j = 0; j < friends.length; j++) {
      for (var i = 0; i < (friends[j].scores).length; i++) {
        difference += Math.abs(friends[j].scores[i] - user.scores[i]);
      }
      //console.log(difference);
      diffArr.push(difference);
      difference = 0;
      console.log(diffArr);//checksout
      console.log(Math.min.apply(null, diffArr));
      var matchNum = diffArr.indexOf(Math.min.apply(null, diffArr));
      match = friends[matchNum];
      console.log(match);
      //friends.push(req.body);
      //res.json(true);
    };
  });

  //app.post("/api/clear", function() {
    // Empty out the array of friends data
    //friendsData = [];
  // console.log(tableData);
 // });
};
