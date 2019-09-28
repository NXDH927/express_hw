var friendsData = require('../data/friends.js');

module.exports = function (app){

app.get("/api/tables", function(req, res) {
    res.json(friendsData);
  });

  app.post("/app/data/friends",function(req, res){

    friendsData.push(req.body);

    var friendsList = friendsData.length - 1;
    var differenceList = [];
    var differenceNum = 0;

    for (var i=0; i<friendsList; i++){

      var score = friendsData[i].scores;
      var currentScore = req.body.scores;

      // for (var x=0; x<score.length; x++){
        function myFunc(total, num) {
          return parseInt(total) - parseInt(num);
        }

        var friendScore = score.reduce(myFunc);
        var userScore = currentScore.reduce(myFunc);



        if (friendScore != userScore ){
          differenceNum = 0;
          differenceNum += Math.abs(friendScore - userScore);        
        }

        else{
          differenceNum += 0;
        };

        differenceList.push(differenceNum);



    };

    var lowestNum = Math.min.apply(Math, differenceList);
    var index = differenceList.indexOf(lowestNum);
    console.log(friendsData[index]);
    
    res.json(friendsData[index]);

  })


};