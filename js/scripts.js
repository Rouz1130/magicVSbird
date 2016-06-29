// business logic
var dieRoll = '';
var result = [];
var total = 0
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}




// user logic
$(document).ready(function() {
  $("form#player1").click(function(event) {
    event.preventDefault();
    dieRoll = getRandomInt(1,7);
    result.push(dieRoll);
    $("#resultPlayer1").append("<li>" + dieRoll + "</li>")
  });

  $("form#holdPlayer1").click(function(event) {
    event.preventDefault();

  });

});
