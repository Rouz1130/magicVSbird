// business logic
var dieRoll = '';
var result = [];
var result2 = [];
var totalPlayer1 = 0
var totalPlayer2 = 0
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// function Player(playOrder, result, total) {
//   this.order = playOrder;
//   this.result = result;
//   this.total = total;
// }
//
// Player.prototype.rollDie = function() {
//   console.log("huh");
// }



// user logic
$(document).ready(function() {
  $("form#player1").click(function(event) {
    event.preventDefault();
    dieRoll = getRandomInt(1,7);
    result.push(dieRoll);
    $("#resultPlayer1").append("<li>" + dieRoll + "</li>")
  });

  $("form#player2").click(function(event) {
    event.preventDefault();
    dieRoll = getRandomInt(1,7);
    result2.push(dieRoll);
    $("#resultPlayer2").append("<li>" + dieRoll + "</li>")
  });

  $("form#holdPlayer1").click(function(event) {
    $("#resultPlayer1").empty();
    event.preventDefault();
    for (var i=0; i < result.length; i++) {
     totalPlayer1 += result[i];
    }
    result = [];
    $(".totalPlayer1").text(totalPlayer1);
  });

  $("form#holdPlayer2").click(function(event) {
    $("#resultPlayer2").empty();
    event.preventDefault();
    for (var i=0; i < result2.length; i++) {
    totalPlayer2 += result2[i];
    }
    result2 = [];
      $(".totalPlayer2").text(totalPlayer2);

  });



});
