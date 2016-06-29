// business logic
var dieRoll = '';
var result = [];
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}




// user logic
$(document).ready(function() {
  $("form#player1").click(function(event) {
    event.preventDefault();
    dieRoll = getRandomInt(1,7);
    result.push(dieRoll);
    console.log(result);
  });
});
